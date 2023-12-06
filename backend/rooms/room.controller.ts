import { NextRequest, NextResponse } from 'next/server';

export const getAll = async(request: NextRequest)=> {
    return NextResponse.json({
        data: 'Hello'
    })
}
