 
 type TPlayFunction = (track: string) => void
 type TVolumeFunction = (level: number) => void

 const play: TPlayFunction = (track)=>{
 console.log(`Playing track: ${track}`)
 }