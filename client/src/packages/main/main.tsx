import * as React from "react";
import { Plus } from "react-feather";
import Button from "../../components/Button";
import RequestUnit from "../../components/RequestUnit";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full px-3">
        <div className="flex flex-col flex-1 w-full">
          <div
            className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
            style={{ top: "0px" }}
          >
            <div className="flex justify-between items-center mb-5">
              <h2>Requests for you</h2>
              <Button>
                <article className="flex items-center justify-center gap-2">
                  <Plus className="w-auto h-4" />
                  <span className="text-sm">Request</span>
                </article>
              </Button>
            </div>
          </div>
          <div>
            <div className="flex flex-col flex-1 mb-8">
              <div className="flex flex-col space-y-4">
                <RequestUnit />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
