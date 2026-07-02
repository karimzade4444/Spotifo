enum EnumAudioQuality {
    LOW = "96",
    MEDIUM = "192",
    HIGH = "320",
    LOSSLESS = "FLAC",
}

export const AudioQuality = {
    LOW: "96",
    MEDIUM: "192",
    HIGH: "320",
    LOSSLESS: "FLAC",
} as const;

export type AudioQuality = typeof AudioQuality[keyof typeof AudioQuality];

let q: AudioQuality;
 q = AudioQuality.HIGH
 q= '320'
 console.log(q)
