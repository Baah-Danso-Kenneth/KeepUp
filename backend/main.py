from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from api.routes import (
   auth, onboarding
)
from core.config import settings 
from core.database import init_db, close_db


import models  



@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan context manager for startup and shutdown events.
    """
    # Startup
    print(f" Starting {settings.APP_NAME} v{settings.APP_VERSION}")
    await init_db()
    print(" Database initialized")
    

    yield


    print("Shutting down...")
    await close_db()
    print(" Database connections closed")





app = FastAPI(
    title=settings.APP_NAME,
    description="AI-powered fitness system with  specialized agents",
    version=settings.APP_VERSION,
    lifespan=lifespan
)




app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(auth.router, prefix="/api")
app.include_router(onboarding.router, prefix="/api")



@app.get("/", tags=["System"])
async def root():
    """Root endpoint"""
    return {
        "message": f"Welcome to {settings.APP_NAME} API",
        "version": settings.APP_VERSION,
        "docs": "/docs",
        "status": "/health"
    }


@app.get("/health", tags=["System"])
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT
    }







if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG
    )
