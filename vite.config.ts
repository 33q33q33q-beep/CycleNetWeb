import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
// import { readdyJsxRuntimeProxyPlugin } from "./vite.jsx-runtime-proxy";

/** サブディレクトリ公開用: BASE_PATH=/test202605-2/ のように指定（末尾スラッシュ有無どちらでも可） */
function resolvePublicPaths(raw: string | undefined) {
  const input = (raw ?? "/").trim();
  if (!input || input === "/") {
    return { viteBase: "/", routerBasename: "" as const };
  }
  const withLeading = input.startsWith("/") ? input : `/${input}`;
  const noTrailing = withLeading.replace(/\/+$/, "");
  const viteBase = `${noTrailing}/`;
  return { viteBase, routerBasename: noTrailing };
}

const { viteBase: base, routerBasename } = resolvePublicPaths(process.env.BASE_PATH);
const isPreview = process.env.IS_PREVIEW ? true : false;
//const proxyPlugins = isPreview ? [readdyJsxRuntimeProxyPlugin()] : [];
// https://vite.dev/config/
export default defineConfig({
  define: {
    __ROUTER_BASENAME__: JSON.stringify(routerBasename),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
    __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
  },
  plugins: [
    // ...proxyPlugins,
    react(),
    AutoImport({
      imports: [
        {
          react: [
            ["default", "React"],
            "useState",
            "useEffect",
            "useContext",
            "useReducer",
            "useCallback",
            "useMemo",
            "useRef",
            "useImperativeHandle",
            "useLayoutEffect",
            "useDebugValue",
            "useDeferredValue",
            "useId",
            "useInsertionEffect",
            "useSyncExternalStore",
            "useTransition",
            "startTransition",
            "lazy",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate",
            "useLocation",
            "useParams",
            "useSearchParams",
            "Link",
            "NavLink",
            "Navigate",
            "Outlet",
          ],
        },
        // React i18n
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
  base,
  build: {
    sourcemap: true,
    outDir: 'out',
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    // 0.0.0.0 だと一部環境で os.networkInterfaces の列挙に失敗するため、ローカル表示は 127.0.0.1 を優先
    host: "127.0.0.1",
  },
});
