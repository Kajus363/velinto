import React from 'react';

const FramerComponent = () => {
    return (
        <div dangerouslySetInnerHTML={ { __html: `<script async src="https://events.framer.com/script?v=1" data-fid="7fedfa667cf557816af4b39a166ed5fc5ba6c9739c39d52987cc0372c2284e4d" data-no-nt></script>
    <!-- Start of bodyStart -->
    
    <!-- End of bodyStart -->
    <div id="main"></div>
    
    
    <div id="__framer-badge-container"></div>
    <script data-framer-appear-animation="no-preference"></script>
    <script type="module" async data-framer-bundle="main">
        import * as Framer from "framer";
import * as React from "react";
import { createPortal } from "react-dom";
import * as ReactDOM from "react-dom/client";
import LayoutTemplate from "https://framerusercontent.com/modules/6ZGrLn7mT2JFgwPEm1J8/CuEuT2LcCOZODtS5L2gr/ek_UIwYmW.js";

        const routes = {augiA20Il: {elements: {b58gIVT3I: "testimonials", BKULGjTB1: "skills", CaAED2YD5: "services", DSosHFJQB: "faq-section", ivzHkc92O: "profile", LPH2zifzT: "hero-section", oWCjJY6e8: "process", owWMb_cfG: "projects", pQqVYIupV: "exp", YW2XmG3a7: "benefits"}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/hfVj7pBIV4zGKQoiuims/eekb5BZNqhQQtqo2OxW1/augiA20Il.js")), path: "/"}, KZiBMHKVh: {elements: {OiCXeyEiq: "projects"}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/1QaP2jDsAKU62BQeQLf5/jaxK90dCYaRmmBZz8RBR/KZiBMHKVh.js")), path: "/projects"}, mMBXPq2dS: {elements: {JvYUdUuKT: "contact"}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/beEAHxVgRj7abRQrjdeU/1ld4lh9GYgxXcOnAYTqR/mMBXPq2dS.js")), path: "/contact"}, slgXsCnT9: {elements: {ZMqpGYSv6: "hero-section"}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/gqDec9G7ISkDR1ab2Op6/Y5WxGebhRXux8a7wcqBq/slgXsCnT9.js")), path: "/404"}, SGe7LzTFs: {collectionId: "AgkzsKCF7", elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/rzHmUNjtOI4Xsh2nIVLW/jfIWEWoaeaAtvYXi4tIk/SGe7LzTFs.js")), path: "/projects/:sdaVuE614"}}
        const locales = [{code: "en", id: "default", name: "English", slug: ""}]
        const collectionUtils = {AgkzsKCF7: async () => (await import("https://framerusercontent.com/modules/3wfJox9VUrRAyC8ecQPt/h7oHSSYd8dj4MCK5TlCI/AgkzsKCF7.js"))?.["utils"]}
        const framerSiteId = "7fedfa667cf557816af4b39a166ed5fc5ba6c9739c39d52987cc0372c2284e4d"
        function Template({routeId, children, style, ...rest}) {const templateProps = {}
const props = templateProps[routeId] ?? {}
switch (routeId) {case "augiA20Il":
case "KZiBMHKVh":
case "mMBXPq2dS":
case "slgXsCnT9":
case "SGe7LzTFs":
return React.createElement(LayoutTemplate, {...props, key: "LayoutTemplate", routeId, style}, children(true));
default: { return children(false) }}}
export function getLayoutTemplateBreakpoints(routeId) {switch (routeId) {case "augiA20Il":
case "KZiBMHKVh":
case "mMBXPq2dS":
case "slgXsCnT9":
case "SGe7LzTFs":
return [{hash: "ynmlr3", mediaQuery: "(min-width: 1300px)"}, {hash: "1979d9p", mediaQuery: "(min-width: 750px) and (max-width: 1299px)"}, {hash: "173olyx", mediaQuery: "(max-width: 749px)"}]
default: { return undefined }}}

        export async function getPageRoot({ routeId, pathVariables, localeId }) {
            
if (typeof window !== "undefined") {
    void (async () => {
        const route = routes[routeId]

        const defaultLocaleId = "default"
        const framerLocale = locales.find(({ id }) => !localeId ? id === defaultLocaleId : id === localeId).code

        let collectionItemId = null
        if (route?.collectionId && collectionUtils) {
              const utils = await collectionUtils[route.collectionId]?.()
              const [slug] = Object.values(pathVariables)
              if (utils && typeof slug === "string") {
                  collectionItemId = (await utils.getRecordIdBySlug(slug, framerLocale || undefined)) ?? null
              }
        }

        const resolvedDateTimeOptions = Intl.DateTimeFormat().resolvedOptions()
        const timezone = resolvedDateTimeOptions.timeZone
        const locale = resolvedDateTimeOptions.locale

        window.__framer_events.push([
            "published_site_pageview",
            {
                framerSiteId: framerSiteId ?? null,
                routePath: route?.path || "/",
                collectionItemId,
                framerLocale: framerLocale || null,
                webPageId: routeId,
                referrer: document.referrer || null,
                url: window.location.href,
                hostname: window.location.hostname || null,
                pathname: window.location.pathname || null,
                hash: window.location.hash || null,
                search: window.location.search || null,
                timezone,
                locale,
            }
        ])
    })()
}


            // We don't want the initial render to immediately have to suspend.
            await routes[routeId].page.preload()

            const content = React.createElement(
                Framer.PageRoot,
                {
                    isWebsite: true,
                    routeId,
                    pathVariables,
                    routes,
                    collectionUtils,
                    framerSiteId,
                    notFoundPage: Framer.lazy(() => import("https://framerusercontent.com/modules/gqDec9G7ISkDR1ab2Op6/Y5WxGebhRXux8a7wcqBq/slgXsCnT9.js")),
                    isReducedMotion: undefined,
                    localeId,
                    locales,
                    preserveQueryParams: undefined,
                    siteCanonicalURL: undefined,
                    EditorBar: 
        typeof window === "undefined" ? undefined : Framer.lazy(async () => {
            const { createEditorBar } = await import("https://edit.framer.com/init.mjs")
            return {
                default: createEditorBar({
                    dependencies: {
                        __version: 1,
                        framer: {
                            useCurrentRoute: Framer.useCurrentRoute,
                            useLocaleInfo: Framer.useLocaleInfo,
                            useRouter: Framer.useRouter
                        },
                        react: {
                            createElement: React.createElement,
                            memo: React.memo,
                            useCallback: React.useCallback,
                            useEffect: React.useEffect,
                            useRef: React.useRef,
                            useState: React.useState
                        },
                        'react-dom': { createPortal }
                    }
                })
            }
        })
    ,
                    LayoutTemplate: Template,
                }
            )

            const contentWithFeaturesContext = React.createElement(
                Framer.LibraryFeaturesProvider,
                {
                    children: content,
                    value: {codeBoundaries: true, editorBarSubtle: false, enableAsyncURLUpdates: true, newTrackingEvents: true, pauseOffscreen: true, replaceNestedLinks: true, useGranularSuspense: true, wrapUpdatesInTransitions: true}
                }
            )

            const contentWithGracefullyDegradingErrorBoundary = React.createElement(Framer.GracefullyDegradingErrorBoundary, {
                children: contentWithFeaturesContext
            })

            
            const page = React.createElement(Framer.PageEffectsProvider, {
                children: contentWithGracefullyDegradingErrorBoundary,
                value: {routes: {}}
            })

            return page
        }

        const isBrowser = typeof document !== "undefined"
        if (isBrowser) {
            window.__framer_importFromPackage = (packageAndFilename, exportIdentifier) => () => {
                return React.createElement(Framer.ErrorPlaceholder, { error: 'Package component not supported: "' + exportIdentifier + '" in "' + packageAndFilename + '"' })
            }

            // A lot of libraries assume process.env.NODE_ENV is present in runtime/buildtime, so we are polyfilling it
            window.process = {
                ...window.process,
                env: {
                    ...(window.process ? window.process.env: undefined),
                    NODE_ENV: "production"
                }
            }

            window.__framer_events = window.__framer_events || []

            // Fallback support for stack gaps
            Framer.installFlexboxGapWorkaroundIfNeeded()

            const container = document.getElementById("main")
            // We know that #main is parsed before this script, so we don't need to wait for DOMContentLoaded or similar events.
            if ("framerHydrateV2" in container.dataset) main(true, container)
            else main(false, container)
        }

        function track() {
            if (!isBrowser) return
            window.__framer_events.push(arguments)
        }

        async function main(shouldHydrate, container) {
            function handleError(error, errorInfo, recoverable = true) {
                if (error.caught || window.__framer_hadFatalError) return // we already logged it

                const componentStack = errorInfo?.componentStack
                if (recoverable) {
                    console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:\n", error, componentStack)
                    // we only want to collect 1%, because this can be quite noisy (floods the data pipeline)
                    if (Math.random() > 0.01) return
                } else {
                    console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/")
                }
                track(recoverable ? "published_site_load_recoverable_error" : "published_site_load_error", {
                    message: String(error),
                    componentStack, // componentStack is more useful
                    stack: componentStack ? undefined : error instanceof Error && typeof error.stack === "string" ? error.stack : null,
                })
            }

            try {
                let routeId, localeId, pathVariables, breakpoints
                if (shouldHydrate) {
                    const routeData = JSON.parse(container.dataset.framerHydrateV2)
                    routeId = routeData.routeId
                    localeId = routeData.localeId
                    pathVariables = routeData.pathVariables
                    breakpoints = routeData.breakpoints
                } else {
                    const routeData = Framer.inferInitialRouteFromPath(routes, decodeURIComponent(location.pathname), true, locales)
                    routeId = routeData.routeId
                    localeId = routeData.localeId
                    pathVariables = routeData.pathVariables
                }

                const page = await getPageRoot({ routeId, localeId, pathVariables })
                if (shouldHydrate) {
                    

                    Framer.withPerformanceMarks("framer-rewrite-breakpoints", () => {
                        Framer.removeHiddenBreakpointLayersV2(breakpoints)
                        window.__framer_onRewriteBreakpoints?.(breakpoints)
                    })

                    

                    const startTransition = React.startTransition
                    startTransition(() => {
                        Framer.markHydrationStart()
                        Framer.setInitialHydrationState()
                        if (true) Framer.turnOffReactEventHandling()
                        ReactDOM.hydrateRoot(container, page, { onRecoverableError: handleError })
                    })
                } else {
                    
                    ReactDOM.createRoot(container, { onRecoverableError: handleError }).render(page)
                }
            } catch (error) {
                handleError(error, undefined, false)
                throw error
            }
        }

        

        
        ;(function () {
            if (!isBrowser) return

            React.startTransition(() => {
                ReactDOM.createRoot(document.getElementById("__framer-badge-container")).render(React.createElement(React.Suspense, {},
                    React.createElement(Framer.withStyleAppearEffect(Framer.Container), {
                        className: "__framer-badge",
                        __framer__threshold: 0.5,
                        __framer__animateOnce: true,
                        __framer__opacity: 0,
                        __framer__targetOpacity: 1,
                        __framer__rotate: 0,
                        __framer__x: 0,
                        __framer__y: 10,
                        __framer__scale: 1,
                        __framer__transition: {
                            "type": "spring",
                            "ease": [0.44, 0, 0.56, 1],
                            "duration": 0.3,
                            "delay": 1,
                            "stiffness": 350,
                            "damping": 40,
                            "mass": 1.5
                        },
                        __framer__rotateX: 0,
                        __framer__rotateY: 0,
                        __framer__perspective: 1200,
                    }, React.createElement(React.lazy(() => import("__framer-badge")))
                    )
                ))
            })
        })()
    </script>
    <!-- Start of bodyEnd -->
    
    <!-- End of bodyEnd -->` } } />
    );
};

export default FramerComponent;
