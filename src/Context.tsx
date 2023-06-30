import * as React from 'react';
import { Tweets,TwitterContextType } from "./@types/twitter";
export const TwitterContext = React.createContext<TwitterContextType | null>(null);

interface TwitterProviderProps {
  children : React.ReactNode
}

const TwitterProvider : React.FC<TwitterProviderProps> = ({children})=>{
  const tweets : Tweets = {
    name:"xyz",
    username:"typingrust",
    tweet: "TYPESCRIPT Rules",
    commentsCount: 6,
    likesCount:23,
 }
 const tweet1 : Tweets= {
  name:"xyz",
    username:"typingRust",
    tweet: "RUST Rules",
    commentsCount: 6,
    likesCount:23,
 }
 const main : Tweets[] = [tweets,tweet1];
  return <TwitterContext.Provider value={{main}}>
    {children}
  </TwitterContext.Provider>
}

export default TwitterProvider;