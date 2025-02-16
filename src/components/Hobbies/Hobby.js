import React from "react";
import gym_1 from "./gymm.png";
import gym_2 from "./gymm2.jpg";
import cooking from "./cookking.jpg";
import music from "./music.jpg";
import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";
import Icon from "../../const/icons";

const Cycling = () => {
  return (
    <div id="road_cycling" class="hobby">
      <Icon.HobbyHeading hobbyName="gym" />
      <p class="text-start description">
        {textConst.HOBBIES_CYCLING_DESCRIPTION}
      </p>
      <div id="cycling_images">
  <img
    src={gym_1}
    loading="lazy"
    alt="Cycling 1"
    id="cycling_picture_1"
    className="image"
  />
  <img
    src={gym_2}
    loading="lazy"
    alt="Cycling 2"
    id="cycling_picture_2"
    className="image"
  />
</div>
    </div>
  );
};

const Running = () => {
  return (
    <div id="running" class="hobby">
      <Icon.HobbyHeading hobbyName="cooking" />
      <p class="text-start description">
        {textConst.HOBBIES_RUNNING_DESCRIPTION}
      </p>
      <div id="running_images">
      <img
  src={cooking}
  loading="lazy"
  alt="Running"
  id="running_picture"
  className="image"
/>

      </div>
     
    </div>
  );
};

const Guitar = () => {
  return (
    <div id="electric_guitar" class="hobby">
      <Icon.HobbyHeading hobbyName="music" />
      <p class="text-start description">
        {textConst.HOBBIES_GUITAR_DESCRIPTION}
      </p>
      <div id="guitarist_images">
         <img
          src={music}
          loading="lazy"
          alt="Brad Delson"
          id="brad_delson_picture"
          class="image"
        ></img>
       
      </div>
     
    </div>
  );
};

const Netflix = () => {
  return (
    <div id="netflix_and_anime" class="hobby">
      <Icon.HobbyHeading hobbyName="netflix" />
      <p class="text-start description">
        {textConst.HOBBIES_NETFLIX_DESCRIPTION}
      </p>
      <div id="anime_images" class="hobby_end">
        <img
          src={urlConst.HOBBIES_NETFLIX_VEGETA_PICTURE_URL}
          loading="lazy"
          alt="Vegeta"
          id="vegeta_picture"
          class="image"
        ></img>
        <img
          src={urlConst.HOBBIES_NETFLIX_ITACHI_PICTURE_URL}
          loading="lazy"
          alt="Itachi Uchiha"
          id="itachi_uchiha_picture"
          class="image"
        ></img>
      </div>
    </div>
  );
};

const Hobby = {
  Cycling,
  Running,
  Guitar,
  Netflix,
};

export default Hobby;
