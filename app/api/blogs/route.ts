import mongoose from 'mongoose';
import connectToDatabase from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

const BlogSchema = new mongoose.Schema({
    title: String,
});

async function connectToDbAndReturnModel() {
    await connectToDatabase();
    return mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
}

export async function GET() {
    try {
        const Blog = await connectToDbAndReturnModel();
        const blogs = await Blog.find({}).exec();
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
