import React from "react";
import { Button, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function WeeklyPlan({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1185px]">
      {/* schedule background section */}
      <div className="flex w-full flex-col items-center rounded-[12px] bg-blue_gray-100_01 p-4">
        {/* schedule content section */}
        <div className="mb-[5px] flex w-[97%] flex-col items-center gap-5 md:w-full">
          {/* schedule heading section */}
          <Heading size="md" as="h1" className="text-center !text-blue_gray-800">
            Weekly Schedule{" "}
          </Heading>

          {/* days of week section */}
          <div className="flex flex-col items-center gap-1.5 self-stretch">
            {/* dates row section */}
            <div className="flex w-[94%] items-center justify-between gap-5 md:w-full md:flex-col">
              <Heading as="h2" className="text-center !text-blue_gray-800">
                Monday
              </Heading>

              {/* weekday list section */}
              <div className="flex w-[39%] flex-wrap justify-between gap-5 md:w-full">
                <Heading as="h3" className="text-center !text-blue_gray-800">
                  Tuesday
                </Heading>
                <Heading as="h4" className="text-center !text-blue_gray-800">
                  Wednesday
                </Heading>
                <Heading as="h5" className="text-center !text-blue_gray-800">
                  Thursday
                </Heading>
              </div>
              <Heading as="h6" className="text-center !text-blue_gray-800">
                Friday
              </Heading>
              <Heading as="h5" className="text-center !text-blue_gray-800">
                Saturday
              </Heading>
              <Heading as="h5" className="text-center !text-blue_gray-800">
                Sunday
              </Heading>
            </div>

            {/* meal schedule section */}
            <div className="grid grid-cols-7 justify-center gap-5 self-stretch md:grid-cols-4 sm:grid-cols-1">
              {/* breakfast column section */}
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>

              {/* lunch column section */}
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Breakfast
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 AM - 00:00 AM
                </Heading>
              </div>
              <div className="flex w-full flex-col gap-[3px]">
                <div className="flex flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                  <div className="h-[116px] self-stretch bg-blue_gray-100" />
                  <Heading as="h5" className="text-center">
                    Lunch
                  </Heading>
                  <Heading size="xs" as="p" className="text-center">
                    00:00 PM - 00:00 PM
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                  <div className="h-[116px] self-stretch bg-blue_gray-100" />
                  <Heading as="h5" className="text-center">
                    Dinner
                  </Heading>
                  <Heading size="xs" as="p" className="text-center">
                    00:00 PM - 00:00 PM
                  </Heading>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Lunch
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Lunch
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Lunch
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Lunch
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Lunch
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Lunch
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col gap-[3px]">
                <div className="flex flex-col items-center justify-center gap-[5px] bg-white-A700 p-[7px]">
                  <div className="h-[116px] self-stretch bg-blue_gray-100" />
                  <Heading as="h5" className="text-center">
                    Lunch
                  </Heading>
                  <Heading size="xs" as="p" className="text-center">
                    00:00 PM - 00:00 PM
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                  <div className="h-[116px] self-stretch bg-blue_gray-100" />
                  <Heading as="h5" className="text-center">
                    Dinner
                  </Heading>
                  <Heading size="xs" as="p" className="text-center">
                    00:00 PM - 00:00 PM
                  </Heading>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Dinner
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Dinner
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Dinner
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Dinner
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Dinner
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 bg-white-A700 p-[7px]">
                <div className="h-[116px] self-stretch bg-blue_gray-100" />
                <Heading as="h5" className="text-center">
                  Dinner
                </Heading>
                <Heading size="xs" as="p" className="text-center">
                  00:00 PM - 00:00 PM
                </Heading>
              </div>
            </div>
          </div>

          {/* action buttons section */}
          <div className="ml-11 flex gap-[29px] self-start md:ml-0">
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button color="gray_500" size="xs" shape="round" className="min-w-[461px] font-semibold sm:px-5">
                Dashboard
              </Button>
            </a>
            <Button size="xs" shape="round" className="min-w-[461px] sm:px-5">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
