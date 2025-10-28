'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [volume, setVolume] = useState(20);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const playerRef = useRef<any>(null);
  // Replace with your preferred relaxing music
  // Single video: "jfKfPfyJRdk" - Lofi Hip Hop Radio
  // Playlist: ["jfKfPfyJRdk", "videoId2", "videoId3"] - Will play through all videos
  const youtubeVideoId = "qYcoJpqCha4";
  const youtubePlaylistId = "RDEM6mP505XPi7kWwygTUHGIJQ"; // For playlist, use the playlist ID from YouTube
  const youtubePlaylist = youtubeVideoId; // For playlist, change to: "videoId1,videoId2,videoId3"

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (playerRef.current) return; // Prevent duplicate initialization
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: 1,
            loop: 0, // Disable loop for playlist
            playlist: youtubePlaylist,
            list: youtubePlaylistId, // YouTube playlist ID - enables auto-playing related videos
            controls: 0,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              event.target.setVolume(volume); // Set to initial volume
              // Note: Loop is controlled by playlist parameter
              setIsReady(true);
              setIsPlaying(false); // Start paused
              setIsMuted(false);
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused, 3 = buffering, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              }
            },
          },
        });
      };
    } else if (window.YT.Player) {
      // API already loaded
      if (playerRef.current) return; // Prevent duplicate initialization
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: youtubeVideoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: youtubeVideoId,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
          events: {
            onReady: (event: any) => {
              event.target.setVolume(volume);
              event.target.setLoop(true);
              setIsReady(true);
              setIsPlaying(false); // Start paused
              setIsMuted(false);
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused, 3 = buffering, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              }
            },
          },
      });
    }
  }, [youtubeVideoId, youtubePlaylist, youtubePlaylistId]);

  const toggleMusic = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const toggleVolumeControl = () => {
    setShowVolumeControl(!showVolumeControl);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  return (
    <div>
      {/* Hidden YouTube player */}
      <div
        id="youtube-player"
        className="fixed bottom-0 right-0 opacity-0 pointer-events-none w-1 h-1 overflow-hidden"
        style={{ width: '1px', height: '1px' }}
      />

      {/* Control buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end gap-2">
          {/* Volume slider (shown when volume control is active) */}
          {showVolumeControl && (
            <div className="bg-neutral-800 dark:bg-neutral-200 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 w-48">
                <span className="text-white dark:text-black text-sm">🔊</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-lg appearance-none cursor-pointer accent-neutral-600 dark:accent-neutral-300"
                />
                <span className="text-white dark:text-black text-sm w-8 text-right">
                  {volume}%
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <button
                  onClick={toggleMute}
                  className="text-white dark:text-black hover:opacity-80 transition-opacity px-2 py-1 rounded"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? 'Mute' : 'Unmute'}
                </button>
              </div>
            </div>
          )}

          {/* Control buttons */}
          <div className="flex gap-2">
            <button
              onClick={toggleMusic}
              className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black px-4 py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity"
              aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button
              onClick={toggleVolumeControl}
              className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black px-4 py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity"
              aria-label="Volume control"
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


