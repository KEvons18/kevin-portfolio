"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const currentWord = words[wordIndexRef.current];

    const tick = () => {
      if (isDeletingRef.current) {
        charIndexRef.current -= 1;
      } else {
        charIndexRef.current += 1;
      }

      setDisplayText(currentWord.substring(0, charIndexRef.current));

      if (!isDeletingRef.current && charIndexRef.current === currentWord.length) {
        isDeletingRef.current = true;
        scheduleTick(delayBetweenWords);
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        scheduleTick(500);
      } else {
        scheduleTick(isDeletingRef.current ? deleteSpeed : typeSpeed);
      }
    };

    let timer: ReturnType<typeof setTimeout>;

    function scheduleTick(delay: number) {
      timer = setTimeout(tick, delay);
    }

    scheduleTick(typeSpeed);

    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return displayText;
}
