export interface Tweets {
  name:string,
  username: string,
  tweet :string,
  commentsCount:number,
  likesCount : number,
}

export type TwitterContextType = {
  main : Tweets[],
}