// pages/api/test-db.js OR app/api/test-db/route.js

import prisma from "@/global/prisma";


export async function GET() {
  try {
    console.log("Testing database connection...");
    
    // Test connection
    await prisma.$connect();
    console.log("Database connected");
    
    // Test a simple query
    const userCount = await prisma.user.count();
    console.log("User count:", userCount);
    
    // Test the user model structure
    const tableInfo = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'User'
    `;
    console.log("Table structure:", tableInfo);
    
    return Response.json({
      success: true,
      userCount,
      tableInfo,
      message: "Database connection successful"
    });
    
  } catch (error) {
    console.error("Database test error:", error);
    return Response.json({
      success: false,
      error: error.message,
      message: "Database connection failed"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}