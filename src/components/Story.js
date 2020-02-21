import React from "react";

const Story = props => {
  let {
    adj1,
    adj2,
    adj3,
    bodyPt,
    game,
    ingVerb1,
    ingVerb2,
    ingVerb3,
    noun1,
    noun2,
    noun3,
    num,
    place,
    plant,
    pNoun1,
    pNoun2,
    pNoun3,
    pNoun4
  } = props.form;

  return (
    <>
      <p>
        A vacation is when you take a trip to some {adj1} place with your {adj2}{" "}
        family. Usually you go to some place that is near a/an {noun1} or up on
        a/an {noun2}. A good vacation place is one where you can ride {pNoun1}{" "}
        or play {game} or go hunting for {pNoun2}. I like to spend my time{" "}
        {ingVerb1} or {ingVerb2}. When parents go on a vacation, they spend
        their time eating three {pNoun3} a day, and fathers play golf, and
        mothers sit around {ingVerb3}. Last summer, my little brother fell in
        a/an {noun3} and got poison {plant} all over his {bodyPt}. My family is
        going to go to (the) {place}, and I will practice {ingVerb3}. Parents
        need vacations more than kids because parents are always very {adj3} and
        because they have to work {num} hours every day all year making enough{" "}
        {pNoun4} to pay for the vacation.
      </p>
    </>
  );
};

export default Story;

// A vacation is when you take a trip to some {adj} place with your {adj} family. Usually you go to some place that is near a/an {noun} or up on a/an {noun}. A good vacation place is one where you can ride {plural noun} or play {game} or go hunting for {plural noun}. I like to spend my time {ing verb} or {ing verb}. When parents go on a vacation, they spend their time eating three {plural noun} a day, and fathers play golf, and mothers sit around {ing verb}. Last summer, my little brother fell in a/an {noun} and got poison {plant} all over his {body part}. My family is going to go to (the) {a place}, and I will practice {ing verb}. Parents need vacations more than kids because parents are always very {adj} and because they have to work {num} hours every day all year making enough {plural noun} to pay for the vacation.
