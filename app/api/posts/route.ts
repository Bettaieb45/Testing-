import mongoose from 'mongoose';
import connectToDatabase from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

const PostSchema = new mongoose.Schema({
    title: String,
});

async function connectToDbAndReturnModel() {
    await connectToDatabase();
    return mongoose.models.Post || mongoose.model('Post', PostSchema);
}

export async function GET() {
    try {
        const Post = await connectToDbAndReturnModel();
        const posts = await Post.find({}).exec();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
