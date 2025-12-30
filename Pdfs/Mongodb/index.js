// routes/auth.ts
const express = require('express');
const cors = require('cors');
const User = require('./usermodel.js'); // Adjust path
const app = express();
const router = express.Router();
const port = 9000;
const connection = require('./connect.js'); // Adjust path
connection()
app.use(cors({ origin: '*' }));
app.use(express.json());

// MOUNT THE ROUTER
// app.use('/', router);
router.post('/login', async (req, res) => {
    console.log("hi");
    const { username, password, clientFingerprint } = req.body;
    console.log('req.body: ', req.body);

    const user = await User.create({ username, password });

    // if (!user) return res.status(404).json({ message: 'User not found' });

    // Fake password check here (replace with real one)
    // if (password !== user.password) {
    //     return res.status(401).json({ message: 'Incorrect password' });
    // }

    // // Check if logged in on a different browser
    // if (user.browserFingerprint && user.browserFingerprint !== clientFingerprint) {
    //     return res.status(403).json({
    //         message: 'Already logged in on another browser. Please logout first.',
    //     });
    // }

    // Generate server-side session token
    // const sessionToken = uuidv4();

    // Save session info
    // // user.sessionToken = sessionToken;
    // user.browserFingerprint = clientFingerprint;
    // await user.save();

    // res.json({ message: 'Login successful', browserFingerprint });
    res.json({ message: 'signup successful' });
});

router.post('/logout', async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        user.sessionToken = null;
        user.browserFingerprint = null;
        await user.save();
    }
    res.json({ message: 'Logged out successfully' });
});
// export default router;
module.exports = router;
// export const =router ;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}
)
