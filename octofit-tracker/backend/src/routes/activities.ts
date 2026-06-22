import { Router } from 'express';
import Activity from '../models/activity.ts';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find().lean();
  res.json({ activities });
});

router.post('/', async (req, res) => {
  const newActivity = await Activity.create(req.body);
  res.status(201).json({ message: 'Activity logged', activity: newActivity });
});

export default router;
