import React from "react";
import { Button, Heading } from "../../components";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function WeeklyPlan({ isOpen, ...props }) {
  return (
    <Modal isOpen={isOpen} {...props} className="modal" overlayClassName="overlay">
      <div className="weekly-plan">
        <Heading size="md" as="h1" className="text-center text-blue-gray-800">
          Weekly Schedule
        </Heading>

        <div className="days-of-week">
          <div className="day-column">
            <Heading as="h2" className="text-center text-blue-gray-800">
              Monday
            </Heading>
          </div>

          {/* Tuesday to Sunday columns */}
          <div className="day-column">
            <Heading as="h3" className="text-center text-blue-gray-800">
              Tuesday
            </Heading>
          </div>
          <div className="day-column">
            <Heading as="h4" className="text-center text-blue-gray-800">
              Wednesday
            </Heading>
          </div>
          <div className="day-column">
            <Heading as="h5" className="text-center text-blue-gray-800">
              Thursday
            </Heading>
          </div>
          <div className="day-column">
            <Heading as="h6" className="text-center text-blue-gray-800">
              Friday
            </Heading>
          </div>
          <div className="day-column">
            <Heading as="h5" className="text-center text-blue-gray-800">
              Saturday
            </Heading>
          </div>
          <div className="day-column">
            <Heading as="h5" className="text-center text-blue-gray-800">
              Sunday
            </Heading>
          </div>
        </div>

        <div className="schedule-grid">
          {/* Render schedule items (e.g., Breakfast, Lunch, Dinner) for each day */}
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="schedule-item">
              <div className="placeholder-image bg-blue-gray-100" />
              <Heading as="h5" className="text-center">
                Breakfast
              </Heading>
              <p className="text-center">00:00 AM - 00:00 AM</p>
            </div>
          ))}
        </div>

        {/* Dashboard and Edit buttons */}
        <div className="dashboard-controls">
          <Button color="gray_500" shape="round" className="dashboard-button">
            Dashboard
          </Button>
          <Button shape="round" className="edit-button">
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  );
}
