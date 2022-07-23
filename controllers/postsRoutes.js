const router = require('express').Router();
const { Posts, Comments, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for posts
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postsData = await Posts.findAll({
      include: [{ model: Comments},{ model: User}],
      order: [['post_date', 'DESC']],
    });

    // Serialize data so the template can read it
    const posts = postsData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('posts', { 
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'username',
            'id',
          ],
        },
        {
          model: Comments,
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('comment', {
      ...post,
      loggedIn: req.session.loggedIn,
      
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Use withAuth middleware to prevent access to route
// router.get('/mydashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.userId, {
//       attributes: { exclude: ['password'] },
//       include: [{model:Posts}, {model:Comments}],
//     });

//     const user = userData.get({ plain: true });

//     res.render('mydashboard', {
//       ...user,
//       loggedIn: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/mydashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postsData = await Posts.findAll({
      where: {
        user_id: req.session.userId
      },
      attributes: { exclude: ['password'] },
      include: [{model: User}, {model:Comments}],
    });

    
    const posts =postsData.map((post) => post.get({ plain: true }));

    res.render('mydashboard', { 
      posts,
      loggedIn: true,
      username: req.session.user
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/create', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId);

    const user = userData.get({ plain: true });

    res.render('create', {
      ...user,
      loggedIn: true,
      userId: req.session.userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/mydashboard');
    return;
  }

  res.render('login');
});

module.exports = router;