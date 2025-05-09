export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_SUGGESSTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNTER = 25;
