
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Settings = () => (
  <div className="max-w-xl mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-6 text-center">Settings</h1>
    <form className="space-y-8 bg-background border shadow-sm rounded-lg p-6">
      <div>
        <h2 className="font-semibold text-lg mb-2">Account</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="user-name">Name</Label>
            <Input id="user-name" placeholder="Jane Doe" defaultValue="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="user-email">Email</Label>
            <Input id="user-email" type="email" placeholder="jane@company.com" defaultValue="jane@company.com" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-2">Preferences</h2>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Label htmlFor="pref-notifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive important updates & reminders.</p>
          </div>
          <Switch id="pref-notifications" defaultChecked />
        </div>
        <div className="flex items-center justify-between gap-4 mt-2">
          <div>
            <Label htmlFor="pref-darkmode">Dark Mode</Label>
            <p className="text-sm text-muted-foreground">Enable dark theme for this app.</p>
          </div>
          <Switch id="pref-darkmode" />
        </div>
      </div>
      <div>
        <Button type="submit" className="w-full">Save Changes</Button>
      </div>
    </form>
    <div className="mt-8 text-muted-foreground text-center">
      Update your preferences and account settings here.
    </div>
  </div>
);

export default Settings;

