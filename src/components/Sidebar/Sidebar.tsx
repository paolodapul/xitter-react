import {
  Bell,
  Bookmark,
  Building2,
  Hash,
  Home,
  Mail,
  MoreHorizontal,
  Search,
  Star,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

function Sidebar() {
  return (
    <SidebarProvider>
      <SidebarComponent>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-xl font-bold"
                >
                  <Star className="h-8 w-8" />
                  <span className="sr-only">Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/" className="flex items-center gap-3 text-lg">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/explore" className="flex items-center gap-3 text-lg">
                  <Search className="h-5 w-5" />
                  <span>Explore</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/notifications"
                  className="flex items-center gap-3 text-lg"
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/messages"
                  className="flex items-center gap-3 text-lg"
                >
                  <Mail className="h-5 w-5" />
                  <span>Messages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/grok" className="flex items-center gap-3 text-lg">
                  <Hash className="h-5 w-5" />
                  <span>Grok</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/bookmarks"
                  className="flex items-center gap-3 text-lg"
                >
                  <Bookmark className="h-5 w-5" />
                  <span>Bookmarks</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/communities"
                  className="flex items-center gap-3 text-lg"
                >
                  <Users className="h-5 w-5" />
                  <span>Communities</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/premium" className="flex items-center gap-3 text-lg">
                  <Star className="h-5 w-5" />
                  <span>Premium</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/verified-orgs"
                  className="flex items-center gap-3 text-lg"
                >
                  <Building2 className="h-5 w-5" />
                  <span>Verified Orgs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/profile" className="flex items-center gap-3 text-lg">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/more" className="flex items-center gap-3 text-lg">
                  <MoreHorizontal className="h-5 w-5" />
                  <span>More</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/compose/post"
                  className="flex items-center gap-3 text-lg bg-blue-500"
                >
                  <span>Post</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarRail />
      </SidebarComponent>
    </SidebarProvider>
  );
}

export { Sidebar };
