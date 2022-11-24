import avatarMarkWebber from "../../assets/images/avatar-mark-webber.webp";
import avatarAngela from "../../assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../../assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../../assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../../assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../../assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../../assets/images/avatar-anna-kim.webp";

export const notifications = [
  {
    image: avatarMarkWebber,
    author: "Mark Webber",
    content: "reacted to your recent post",
    contentPost: "My first tournament today!",
    time: "1m ago",
    isRead: false,
  },
  {
    image: avatarAngela,
    author: "Angela Gray",
    content: "followed you",
    time: "5m ago",
    isRead: false,
  },
  {
    image: avatarJacobThompson,
    author: "Jacob Thompson",
    content: "has joined your group",
    contentPost: "Chess Club",
    time: "1 day ago",
    isRead: false,
  },
  {
    image: avatarRizkyHasanuddin,
    author: "Rizky hasanuddin",
    content: "sent you a proate message",
    time: "5 days ago",
    privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improvung my game.",
    isRead: true,
  },
  {
    image: avatarKimberlySmith,
    author: "Kimberly Smith",
    content: "commented on your picture",
    time: "1 week ago",
    isRead: true,
  },
  {
    image: avatarNathanPeterson,
    author: "Nathan Peterson",
    content: "reacted to your recent post",
    contentPost: "5 end-game strategies to increase your win rate",
    time: "2 week ago",
    isRead: true,
  },
  {
    image: avatarAnnaKim,
    author: "Anna Kim",
    content: "left the group",
    contentPost: "Chess Club",
    time: "2 week ago",
    isRead: true,
  },
];
