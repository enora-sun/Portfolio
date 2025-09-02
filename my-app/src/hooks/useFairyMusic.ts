"use client";
import { useEffect, useRef, useState } from "react";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const songs: string[] = [
  `${prefix}/music/song1.mp3`,
  `${prefix}/music/song2.mp3`,
  `${prefix}/music/song3.mp3`,
  `${prefix}/music/song4.mp3`,
  `${prefix}/music/song5.mp3`,
  `${prefix}/music/song6.mp3`,
  `${prefix}/music/song7.mp3`,
  `${prefix}/music/song8.mp3`,
];

export default function useFairyMusic() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songIndex, setSongIndex] = useState<number>(() => Math.floor(Math.random() * songs.length));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clickCountRef = useRef<number>(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Only create audio once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(songs[songIndex]);
      audioRef.current.volume = 0.5;
      audioRef.current.onended = skipToNextSong;
    }
  }, []);

  // When songIndex changes, load new song into existing audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[songIndex];
      audioRef.current.onended = skipToNextSong;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [songIndex]);

  const playPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const skipToNextSong = () => {
    setSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handleClick = () => {
    clickCountRef.current += 1;

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    clickTimerRef.current = setTimeout(() => {
      if (clickCountRef.current === 1) {
        playPause();
      } else if (clickCountRef.current === 2) {
        skipToNextSong();
      }
      clickCountRef.current = 0;
    }, 300);
  };

  return {
    isPlaying,
    handleClick,
  };
}

