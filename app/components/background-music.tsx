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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
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
            onReady: async (event: any) => {
              event.target.setVolume(volume); // Set to initial volume
              // Note: Loop is controlled by playlist parameter
              setIsReady(true);
              setIsPlaying(false); // Start paused
              setIsMuted(false);
              
              // Fetch video title
              try {
                const title = event.target.getVideoData().title;
                setVideoTitle(title);
              } catch (e) {
                console.log('Could not fetch video title');
              }
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused, 3 = buffering, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
                // Fetch video title when playing
                try {
                  const title = event.target.getVideoData().title;
                  setVideoTitle(title);
                } catch (e) {
                  console.log('Could not fetch video title'); 
                }
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
                // Fetch video title when playing
                try {
                  const title = event.target.getVideoData().title;
                  setVideoTitle(title);
                } catch (e) {
                  console.log('Could not fetch video title');
                }
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

  const nextSong = () => {
    if (!playerRef.current) return;
    try {
      playerRef.current.nextVideo();
    } catch (e) {
      console.log('Could not skip to next song');
    }
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

      {/* Glass Control Panel - Horizontal Expandable */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex justify-end"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(isExpanded || isHovered) ? (
          /* Expanded Horizontal Bar */
          <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 dark:from-indigo-800/30 dark:via-purple-800/30 dark:to-pink-800/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-xl px-4 py-2.5 flex items-center gap-3 min-w-[350px] max-w-[400px] h-10 transition-all duration-300">
            {/* Song Info - always rendered to prevent layout shift */}
            <div className="flex items-center gap-2 min-w-[120px] flex-1 mr-2">
              {isPlaying && videoTitle ? (
                <>
                  <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="overflow-hidden w-full">
                    <div className="marquee-delayed text-xs text-white whitespace-nowrap relative">
                      <span>{videoTitle}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-shrink-0 w-7 h-7 bg-neutral-700/50 rounded-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="overflow-hidden w-full">
                    <div className="marquee-delayed text-xs text-neutral-500">
                      <span>Nothing is playing</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Volume Slider */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.618 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.618l3.765-3.793a1 1 0 011.617.793z" clipRule="evenodd" />
              </svg>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-neutral-700/50 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${volume}%, rgba(255,255,255,0.3) ${volume}%, rgba(255,255,255,0.3) 100%)`
                }}
              />
            </div>
            
            {/* Next Song Button */}
            <button
              onClick={nextSong}
              className="flex-shrink-0 text-white/70 hover:text-white transition-colors p-1"
              aria-label="Next song"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.933 12.8a1 1 0 000-1.6L6 6.4V18l5.933-5.2zM18 6v12a1 1 0 102 0V6a1 1 0 10-2 0z" />
              </svg>
            </button>
            
            {/* Play/Pause Button - Rightmost */}
            <button
              onClick={toggleMusic}
              className="flex-shrink-0 text-white hover:scale-110 transition-transform w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/15 rounded-lg"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        ) : (
          /* Collapsed Play Button */
          <button
            onClick={() => {
              if (!isPlaying) {
                toggleMusic();
              }
              setIsExpanded(true);
            }}
            className="bg-gradient-to-br from-indigo-900/40 to-pink-900/40 dark:from-indigo-800/30 dark:to-pink-800/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-xl w-11 h-11 flex items-center justify-center text-white hover:from-indigo-900/50 hover:to-pink-900/50 dark:hover:from-indigo-800/40 dark:hover:to-pink-800/40 transition-all duration-200 active:scale-95"
            aria-label="Music player"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        )}
      </div>

    </div>
  );
}


