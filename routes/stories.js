import { getAllStories } from '../controllers/stories.js';
import router from './server.js';

router.get('/v1/stories', getAllStories)

export default router
