from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    status = Column(String)  # "pending", "in_progress", "completed"
    progress = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)
    due_date = Column(DateTime, nullable=True)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=True)

    project = relationship("Project", back_populates="tasks")

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    status = Column(String)  # "active", "completed", "on_hold"
    created_at = Column(DateTime, default=datetime.utcnow)
    target_completion = Column(DateTime, nullable=True)

    tasks = relationship("Task", back_populates="project")

class DataEntry(Base):
    __tablename__ = "data_entries"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(String)
    source = Column(String)  # "web" or "discord"
    created_at = Column(DateTime, default=datetime.utcnow)
    created_by = Column(String)  # user identifier
