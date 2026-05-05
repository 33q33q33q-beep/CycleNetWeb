import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import GCTVPage from "../pages/gctv/page";
import CorrespondentPage from "../pages/correspondent/page";
import AboutPage from "../pages/about/page";
import JBCFPage from "../pages/jbcf/page";
import SponsorPage from "../pages/sponsor/page";
import LivePage from "../pages/live/page";
import ComingSoon from "../pages/ComingSoon";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gctv",
    element: <GCTVPage />,
  },
  {
    path: "/correspondent",
    element: <CorrespondentPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/jbcf",
    element: <JBCFPage />,
  },
  {
    path: "/sponsor",
    element: <SponsorPage />,
  },
  {
    path: "/live",
    element: <LivePage />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;