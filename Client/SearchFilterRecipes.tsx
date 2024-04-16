import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './SearchFilterRecipes.module.css';

interface Props {
  className?: string;
}
/* @figmaId 196:556 */
export const SearchFilterRecipes: FC<Props> = memo(function SearchFilterRecipes(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.rectangle40}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.logo}></div>
      <div className={classes.prepPal}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Prep</span>
          <span className={classes.label2}>Pal</span>
        </p>
      </div>
      <div className={classes.dailyRecipes}>Daily Recipes</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.search}>search</div>
      <div className={classes.rectangle80}></div>
      <div className={classes.dashboard}>dashboard</div>
      <div className={classes.rectangle86}></div>
      <div className={classes.search2}>Search</div>
      <div className={classes.rectangle87}></div>
      <div className={classes.price}>price</div>
      <div className={classes.rectangle88}></div>
      <div className={classes.nutrition}>nutrition</div>
      <div className={classes.rectangle89}></div>
      <div className={classes.nutrition2}>allergy</div>
      <div className={classes.rectangle90}></div>
      <div className={classes.image}></div>
      <div className={classes.mealTitle}>Meal Title</div>
      <div className={classes.timeframe}>Breakfast | $0.00</div>
      <div className={classes.rectangle91}></div>
      <div className={classes.image2}></div>
      <div className={classes.mealTitle2}>Meal Title</div>
      <div className={classes.timeframe2}>Lunch | $0.00</div>
      <div className={classes.rectangle92}></div>
      <div className={classes.image3}></div>
      <div className={classes.mealTitle3}>Meal Title</div>
      <div className={classes.timeframe3}>Dinner | $0.00</div>
      <div className={classes.rectangle93}></div>
      <div className={classes.generateNewRecipes}>generate new recipes</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.iD}>ID</div>
      <div className={classes.emailCom}>email@example.com</div>
    </div>
  );
});
