const express = require('express');
const router = express.Router();
const multer=require('multer')
const { saveExerciseToChallenge, getChallenges } = require('../controllers/Challenges/createEx');
const { joinChallenge, getJoinedChallenge } = require('../controllers/Challenges/joinEx');
const { markChallengeAsCompleted } = require('../controllers/Challenges/submitEx');
const upload = multer({ storage: multer.memoryStorage() });

// In your routes file
const verifyToken = require('../middleware/auth');

// Challenge Routes
router.post('/challenge', verifyToken, saveExerciseToChallenge);
router.get('/challenge', verifyToken, getChallenges);
router.post('/challenge/join', verifyToken, joinChallenge);
router.get('/challenge/join', verifyToken, getJoinedChallenge);
router.post('/challenge/complete', verifyToken, upload.single('media'), markChallengeAsCompleted);

module.exports = router;