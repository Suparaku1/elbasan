"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, AlertCircle } from "lucide-react";

export default function VideoPage() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [muted, setMuted] = useState(false);
  const [errors, setErrors] = useState({});
  const videoRefs = useRef({});

  const videos = [
    {
      id: 1,
      title: "Tur Virtual në Kalanë e Elbasanit - Pjesa 1",
      description: "Krenaria e qytetit tone",
      src: "/video/video1.mp4" // Path i saktë nga public folder
    },
    {
      id: 2,
      title: "Tur Virtual në Kalanë e Elbasanit - Pjesa 2",
      description: "Kulla karakteristike e kalase",
      src: "/video/video2.mp4" // Path i saktë nga public folder
    }
  ];

  const togglePlay = async (videoId) => {
    const video = videoRefs.current[videoId];
    
    if (!video) return;

    try {
      if (playingVideo === videoId) {
        video.pause();
        setPlayingVideo(null);
      } else {
        // Pause any currently playing video
        if (playingVideo) {
          const currentVideo = videoRefs.current[playingVideo];
          if (currentVideo) currentVideo.pause();
        }
        
        await video.play();
        setPlayingVideo(videoId);
      }
    } catch (error) {
      console.error("Error playing video:", error);
      setErrors(prev => ({ ...prev, [videoId]: true }));
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.muted = !muted;
    });
  };

  const handleVideoEnd = (videoId) => {
    setPlayingVideo(null);
  };

  const handleVideoError = (videoId) => {
    console.error(`Video ${videoId} failed to load`);
    setErrors(prev => ({ ...prev, [videoId]: true }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Video Galeri</h1>
        <p className="text-muted-foreground">Eksploroni Elbasanin përmes videove promovuese.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="aspect-video bg-muted rounded-lg relative overflow-hidden group cursor-pointer border"
          >
            {errors[video.id] ? (
              // Error state
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 text-red-600 p-4">
                <AlertCircle className="h-12 w-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">Video nuk u gjet</h3>
                <p className="text-center text-sm">
                  Videoja nuk është gjetur në: <code>{video.src}</code>
                </p>
                <p className="text-center text-xs mt-4">
                  <strong>Zgjidhja:</strong> Vendosni videon në folderin <code>public/video/</code>
                </p>
              </div>
            ) : (
              // Video player
              <>
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={muted}
                  onClick={() => togglePlay(video.id)}
                  onEnded={() => handleVideoEnd(video.id)}
                  onError={() => handleVideoError(video.id)}
                  preload="metadata"
                />
                
                {/* Overlay Controls */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    playingVideo === video.id ? 'bg-black/30' : 'bg-black/40'
                  }`}
                  onClick={() => togglePlay(video.id)}
                >
                  {playingVideo !== video.id && (
                    <div className="h-16 w-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white fill-current ml-1" />
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                  playingVideo === video.id ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}>
                  <h3 className="text-white font-bold">{video.title}</h3>
                  <p className="text-white/80 text-sm">{video.description}</p>
                </div>

                {/* Play/Pause Indicator */}
                {playingVideo === video.id && (
                  <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                    <Pause className="h-5 w-5 text-white" />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Global Mute Control */}
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          {muted ? (
            <>
              <VolumeX className="h-5 w-5" />
              <span>Zëri është i fikur</span>
            </>
          ) : (
            <>
              <Volume2 className="h-5 w-5" />
              <span>Zëri është i ndezur</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-12 p-8 bg-muted/30 rounded-lg text-center">
        <p className="text-muted-foreground">Më shumë video së shpejti...</p>
      </div>
    </div>
  );
}