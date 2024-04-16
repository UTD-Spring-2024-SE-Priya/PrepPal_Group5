import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './LogIn.module.css';

interface Props {
  className?: string;
}
/* @figmaId 8:581 */
export const LogIn: FC<Props> = memo(function LogIn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle40}></div>
      <div className={classes.logIn}>Log in</div>
      <div className={classes.enterTheEmailAssociatedWithYou}>
        Enter the email associated with your existing account or sign in using Google{' '}
      </div>
      <div className={classes.rectangle17}></div>
      <div className={classes.enterEmail}>Enter email</div>
      <div className={classes.rectangle44}></div>
      <div className={classes.enterPassword}>Enter password</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.logIn2}>Log in</div>
      <div className={classes.rectangle45}></div>
      <div className={classes.forgotEmailCreateANewAccount}>Forgot email? Create a new account </div>
      <div className={classes.line1}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.o}>O</div>
      <div className={classes.rectangle42}></div>
      <div className={classes.google}>Google</div>
      <div className={classes.rectangle43}></div>
      <div className={classes.forgotPassword}>Forgot Password?</div>
      <div className={classes.logo}></div>
    </div>
  );
});
