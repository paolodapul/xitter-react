import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

function Feed() {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="for-you"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              For You
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="p-4">
        {activeTab === "for-you" && (
          <div className="text-center text-muted-foreground">
            For You feed content will be displayed here
          </div>
        )}
        {activeTab === "following" && (
          <div className="text-center text-muted-foreground">
            Following feed content will be displayed here
          </div>
        )}
      </div>
    </div>
  );
}

export { Feed };
