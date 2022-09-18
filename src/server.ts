import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import CategoryRoute from '@routes/category.route';
import QuizRoute from '@routes/quiz.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new CategoryRoute(), new QuizRoute()]);

app.listen();
