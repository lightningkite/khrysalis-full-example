// File: /home/jivie/Projects/khrysalis-full-example/android/src/main/java/com/lightningkite/rxexample/models/Post.kt
// Package: com.lightningkite.rxexample.models
// Generated by Khrysalis - this file will be overwritten.
import { hashAnything, parse, safeEq } from '@lightningkite/khrysalis-runtime'

//! Declares com.lightningkite.rxexample.models.Post
export class Post {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;
    public constructor(userId: number = 0, id: number = 0, title: string = "", body: string = "") {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    public static fromJSON(obj: any): Post { return new Post(
        parse(obj["userId"], [Number]) as number,
        parse(obj["id"], [Number]) as number,
        parse(obj["title"], [String]) as string,
        parse(obj["body"], [String]) as string
    ) }
    public toJSON(): object { return {
        userId: this.userId,
        id: this.id,
        title: this.title,
        body: this.body
    } }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.userId);
        hash = 31 * hash + hashAnything(this.id);
        hash = 31 * hash + hashAnything(this.title);
        hash = 31 * hash + hashAnything(this.body);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof Post && safeEq(this.userId, other.userId) && safeEq(this.id, other.id) && safeEq(this.title, other.title) && safeEq(this.body, other.body) }
    public toString(): string { return `Post(userId=${this.userId}, id=${this.id}, title=${this.title}, body=${this.body})` }
    public copy(userId: number = this.userId, id: number = this.id, title: string = this.title, body: string = this.body): Post { return new Post(userId, id, title, body); }
}
