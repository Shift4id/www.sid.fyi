import Image from "next/image";
import { Headphones } from "react-feather";
import useSWR from "swr";

import Link from "@/components/link";
import fetcher from "@/lib/hooks/fetcher";

const CurrentlyPlaying = () => {
  const { data: song } = useSWR("/api/spotify/current", fetcher, {
    refreshInterval: 30 * 1000,
  });

  return (
    <Link
      className="flex p-2 w-full max-w-xs rounded-md border-2 border-gray-300 dark:border-gray-700"
      href={song?.isPlaying ? song.url : "https://open.spotify.com/user/sidfrostbear"}
    >
      <div className="flex justify-center items-center w-12 h-12">
        {song?.isPlaying ? (
          <Image alt="" className="rounded-md" width={64} height={64} src={song.image} />
        ) : (
          <Headphones size="75%" />
        )}
      </div>
      <div className="max-w-[calc(100%-4.5rem)] ml-2 flex flex-col text-left justify-center">
        <p className="font-medium truncate overflow-ellipsis">
          {song?.isPlaying ? song.title : "Not Playing"}
        </p>
        <p className="text-sm text-gray-700 truncate dark:text-gray-300 overflow-ellipsis">
          {song?.isPlaying ? song.artist : "Spotify"}
        </p>
      </div>
    </Link>
  );
};

export default CurrentlyPlaying;
