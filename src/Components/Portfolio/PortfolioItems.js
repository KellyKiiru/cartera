import InstagramSs  from "../../Assets/instagramss.jpg";
import AwwwardsSs from "../../Assets/awwwardsss.jpg";
import PinterestSs from "../../Assets/Pinterestss.jpg";
import Python from "../../Assets/bxl-python.svg";
import Django from "../../Assets/bxl-django.svg";
import PostgreSQL from "../../Assets/bxl-postgresql.svg";


export const portFolioItems = [
  {
    image: [InstagramSs],
    category: "Back End Applications",
    description: "A lightweight clone of instagram",
    title: "Instagram Clone",
    live: "https://thedropper.herokuapp.com/",
    github: "https://github.com/KellyKiiru/the-drop",
    languages: [Python, Django, PostgreSQL],
  },{
    image: [AwwwardsSs],
    category: "Full Stack Applications",
    description: "Awwwards clone fetching data from PostgreSQL DB",
    title: "Awwwards Clone",
    live: "https://kiiruawwards.herokuapp.com/",
    github: "https://github.com/KellyKiiru/django-ip3",
    languages: [Python, Django, PostgreSQL],
  },{
    image: [PinterestSs],
    category: "Full Stack Applications",
    description: "A clone of Pinterest",
    title: "Pinterest Clone",
    live: "https://bishaciakwa.herokuapp.com/",
    github: "https://github.com/KellyKiiru/pin-your-interests",
    languages: [Python, Django, PostgreSQL],
  }
];
