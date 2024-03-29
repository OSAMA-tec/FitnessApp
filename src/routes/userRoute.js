const express = require('express');
const router = express.Router();
const {signUp} = require('../controllers/Registration/signUp');
const {login} = require('../controllers/Registration/login');
const {recoverPassword,updatePassword,verifyUser} = require('../controllers/Registration/recoverPassword');
const {updateUserProfile,getUserProfile,uploadProfilePic} = require('../controllers/User/userData');
const {createPlan} = require('../controllers/User/userPlan');
const {addPoints} = require('../controllers/User/userPoint');
const {generateGymInfo} = require('../controllers/User/randomData');
const {getNonAdminUsers} = require('../controllers/User/getAll');
const {deleteUser} = require('../controllers/User/delete');



const verifyToken = require('../middleware/auth');



//Registration
router.post('/signup', signUp);
router.post('/login', login);
router.post('/recover/password', recoverPassword);
router.put('/update/password', updatePassword);
router.post('/verify/otp', verifyUser);





//Profile Update
router.post('/profile', updateUserProfile);
router.get('/profile',verifyToken, getUserProfile);
router.post('/profile/pic',verifyToken, uploadProfilePic);



//User Plan
router.post('/user/plan',verifyToken, createPlan);


//User Point
router.post('/user/point',verifyToken, addPoints);



//Random Data
router.get('/start/random', generateGymInfo);


//Random Data
router.get('/users/all', getNonAdminUsers);

//Delete User
router.delete('/delete/profile',verifyToken, deleteUser);

module.exports = router;