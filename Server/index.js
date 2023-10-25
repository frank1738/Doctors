import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDb } from './config/db.js';
import authRoute from './routes/auth.routes.js';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from './models/userModel.js';
import bcrypt from 'bcrypt';
import Doctor from './models/doctorModel.js';
import userRouter from './routes/user.routes.js';
import doctorRouter from './routes/doctorRoute.js';
import reviewRouter from './routes/reviewRoute.js';

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
  })
);

// connect to database
connectDb();

// Passport for Auth

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/reviews', reviewRouter);

//passport

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      try {
        // Find a user with the provided username
        const { role } = req.body;
        let UserModel;

        if (!role) {
          return done(null, false, { message: 'The role is missing.' });
        }

        if (role === 'patient' || role === 'admin') {
          UserModel = User;
        } else if (role === 'doctor') {
          UserModel = Doctor;
        } else {
          return done(null, false, { message: 'The role does not exists' });
        }
        const user = await UserModel.findOne({ username });

        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        // If both username and password are correct, return the user
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, { id: user.id, role: user.role });
});

passport.deserializeUser(async (serializedUser, done) => {
  try {
    const { id, role } = serializedUser;
    let UserModel;
    if (role === 'patient' || role === 'admin') {
      UserModel = User;
    } else if (role === 'doctor') {
      UserModel = Doctor;
    } else {
      return done(null, false, { message: 'The role does not exists' });
    }
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
