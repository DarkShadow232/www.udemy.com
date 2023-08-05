/*! For license information please see vendors~common-desktop-udlite-app~common-mobile-udlite-app~common-ufb-desktop-udlite-app~common-ufb-~d3dbf287.323328f1377e7ac20b80.js.LICENSE.txt */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["vendors~common-desktop-udlite-app~common-mobile-udlite-app~common-ufb-desktop-udlite-app~common-ufb-~d3dbf287"], {
        "./node_modules/@tanstack/react-query/build/lib/useQuery.esm.js": function(e, t, n) {
            "use strict";
            const r = typeof window === "undefined" || "Deno" in window;

            function i() {
                return undefined
            }

            function s(e, t) {
                return typeof e === "function" ? e(t) : e
            }

            function o(e) {
                return typeof e === "number" && e >= 0 && e !== Infinity
            }

            function u(e, t) {
                return e.filter((e => t.indexOf(e) === -1))
            }

            function a(e, t, n) {
                const r = e.slice(0);
                r[t] = n;
                return r
            }

            function c(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function l(e, t, n) {
                if (!q(e)) {
                    return e
                }
                if (typeof t === "function") {
                    return { ...n,
                        queryKey: e,
                        queryFn: t
                    }
                }
                return { ...t,
                    queryKey: e
                }
            }

            function f(e, t, n) {
                if (q(e)) {
                    if (typeof t === "function") {
                        return { ...n,
                            mutationKey: e,
                            mutationFn: t
                        }
                    }
                    return { ...t,
                        mutationKey: e
                    }
                }
                if (typeof e === "function") {
                    return { ...t,
                        mutationFn: e
                    }
                }
                return { ...e
                }
            }

            function d(e, t, n) {
                return q(e) ? [{ ...t,
                    queryKey: e
                }, n] : [e || {}, t]
            }

            function h(e, t, n) {
                return q(e) ? [{ ...t,
                    mutationKey: e
                }, n] : [e || {}, t]
            }

            function v(e, t) {
                const {
                    type: n = "all",
                    exact: r,
                    fetchStatus: i,
                    predicate: s,
                    queryKey: o,
                    stale: u
                } = e;
                if (q(o)) {
                    if (r) {
                        if (t.queryHash !== y(o, t.options)) {
                            return false
                        }
                    } else if (!b(t.queryKey, o)) {
                        return false
                    }
                }
                if (n !== "all") {
                    const e = t.isActive();
                    if (n === "active" && !e) {
                        return false
                    }
                    if (n === "inactive" && e) {
                        return false
                    }
                }
                if (typeof u === "boolean" && t.isStale() !== u) {
                    return false
                }
                if (typeof i !== "undefined" && i !== t.state.fetchStatus) {
                    return false
                }
                if (s && !s(t)) {
                    return false
                }
                return true
            }

            function p(e, t) {
                const {
                    exact: n,
                    fetching: r,
                    predicate: i,
                    mutationKey: s
                } = e;
                if (q(s)) {
                    if (!t.options.mutationKey) {
                        return false
                    }
                    if (n) {
                        if (m(t.options.mutationKey) !== m(s)) {
                            return false
                        }
                    } else if (!b(t.options.mutationKey, s)) {
                        return false
                    }
                }
                if (typeof r === "boolean" && t.state.status === "loading" !== r) {
                    return false
                }
                if (i && !i(t)) {
                    return false
                }
                return true
            }

            function y(e, t) {
                const n = (t == null ? void 0 : t.queryKeyHashFn) || m;
                return n(e)
            }

            function m(e) {
                return JSON.stringify(e, ((e, t) => C(t) ? Object.keys(t).sort().reduce(((e, n) => {
                    e[n] = t[n];
                    return e
                }), {}) : t))
            }

            function b(e, t) {
                return w(e, t)
            }

            function w(e, t) {
                if (e === t) {
                    return true
                }
                if (typeof e !== typeof t) {
                    return false
                }
                if (e && t && typeof e === "object" && typeof t === "object") {
                    return !Object.keys(t).some((n => !w(e[n], t[n])))
                }
                return false
            }

            function g(e, t) {
                if (e === t) {
                    return e
                }
                const n = j(e) && j(t);
                if (n || C(e) && C(t)) {
                    const r = n ? e.length : Object.keys(e).length;
                    const i = n ? t : Object.keys(t);
                    const s = i.length;
                    const o = n ? [] : {};
                    let u = 0;
                    for (let r = 0; r < s; r++) {
                        const s = n ? r : i[r];
                        o[s] = g(e[s], t[s]);
                        if (o[s] === e[s]) {
                            u++
                        }
                    }
                    return r === s && u === r ? e : o
                }
                return t
            }

            function O(e, t) {
                if (e && !t || t && !e) {
                    return false
                }
                for (const n in e) {
                    if (e[n] !== t[n]) {
                        return false
                    }
                }
                return true
            }

            function j(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function C(e) {
                if (!R(e)) {
                    return false
                }
                const t = e.constructor;
                if (typeof t === "undefined") {
                    return true
                }
                const n = t.prototype;
                if (!R(n)) {
                    return false
                }
                if (!n.hasOwnProperty("isPrototypeOf")) {
                    return false
                }
                return true
            }

            function R(e) {
                return Object.prototype.toString.call(e) === "[object Object]"
            }

            function q(e) {
                return Array.isArray(e)
            }

            function S(e) {
                return e instanceof Error
            }

            function x(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }

            function E(e) {
                x(0).then(e)
            }

            function F() {
                if (typeof AbortController === "function") {
                    return new AbortController
                }
                return
            }

            function Q(e, t, n) {
                if (n.isDataEqual != null && n.isDataEqual(e, t)) {
                    return e
                } else if (typeof n.structuralSharing === "function") {
                    return n.structuralSharing(e, t)
                } else if (n.structuralSharing !== false) {
                    return g(e, t)
                }
                return t
            }

            function _() {
                let e = [];
                let t = 0;
                let n = e => {
                    e()
                };
                let r = e => {
                    e()
                };
                const i = e => {
                    let n;
                    t++;
                    try {
                        n = e()
                    } finally {
                        t--;
                        if (!t) {
                            u()
                        }
                    }
                    return n
                };
                const s = r => {
                    if (t) {
                        e.push(r)
                    } else {
                        E((() => {
                            n(r)
                        }))
                    }
                };
                const o = e => (...t) => {
                    s((() => {
                        e(...t)
                    }))
                };
                const u = () => {
                    const t = e;
                    e = [];
                    if (t.length) {
                        E((() => {
                            r((() => {
                                t.forEach((e => {
                                    n(e)
                                }))
                            }))
                        }))
                    }
                };
                const a = e => {
                    n = e
                };
                const c = e => {
                    r = e
                };
                return {
                    batch: i,
                    batchCalls: o,
                    schedule: s,
                    setNotifyFunction: a,
                    setBatchNotifyFunction: c
                }
            }
            const P = _();
            class M {
                constructor() {
                    this.listeners = [];
                    this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    this.listeners.push(e);
                    this.onSubscribe();
                    return () => {
                        this.listeners = this.listeners.filter((t => t !== e));
                        this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.length > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
            class k extends M {
                constructor() {
                    super();
                    this.setup = e => {
                        if (!r && window.addEventListener) {
                            const t = () => e();
                            window.addEventListener("visibilitychange", t, false);
                            window.addEventListener("focus", t, false);
                            return () => {
                                window.removeEventListener("visibilitychange", t);
                                window.removeEventListener("focus", t)
                            }
                        }
                        return
                    }
                }
                onSubscribe() {
                    if (!this.cleanup) {
                        this.setEventListener(this.setup)
                    }
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        (e = this.cleanup) == null ? void 0 : e.call(this);
                        this.cleanup = undefined
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e;
                    (t = this.cleanup) == null ? void 0 : t.call(this);
                    this.cleanup = e((e => {
                        if (typeof e === "boolean") {
                            this.setFocused(e)
                        } else {
                            this.onFocus()
                        }
                    }))
                }
                setFocused(e) {
                    this.focused = e;
                    if (e) {
                        this.onFocus()
                    }
                }
                onFocus() {
                    this.listeners.forEach((e => {
                        e()
                    }))
                }
                isFocused() {
                    if (typeof this.focused === "boolean") {
                        return this.focused
                    }
                    if (typeof document === "undefined") {
                        return true
                    }
                    return [undefined, "visible", "prerender"].includes(document.visibilityState)
                }
            }
            const A = new k;
            class T extends M {
                constructor() {
                    super();
                    this.setup = e => {
                        if (!r && window.addEventListener) {
                            const t = () => e();
                            window.addEventListener("online", t, false);
                            window.addEventListener("offline", t, false);
                            return () => {
                                window.removeEventListener("online", t);
                                window.removeEventListener("offline", t)
                            }
                        }
                        return
                    }
                }
                onSubscribe() {
                    if (!this.cleanup) {
                        this.setEventListener(this.setup)
                    }
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        (e = this.cleanup) == null ? void 0 : e.call(this);
                        this.cleanup = undefined
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e;
                    (t = this.cleanup) == null ? void 0 : t.call(this);
                    this.cleanup = e((e => {
                        if (typeof e === "boolean") {
                            this.setOnline(e)
                        } else {
                            this.onOnline()
                        }
                    }))
                }
                setOnline(e) {
                    this.online = e;
                    if (e) {
                        this.onOnline()
                    }
                }
                onOnline() {
                    this.listeners.forEach((e => {
                        e()
                    }))
                }
                isOnline() {
                    if (typeof this.online === "boolean") {
                        return this.online
                    }
                    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
                        return true
                    }
                    return navigator.onLine
                }
            }
            const U = new T;

            function I(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function L(e) {
                return (e != null ? e : "online") === "online" ? U.isOnline() : true
            }
            class D {
                constructor(e) {
                    this.revert = e == null ? void 0 : e.revert;
                    this.silent = e == null ? void 0 : e.silent
                }
            }

            function N(e) {
                return e instanceof D
            }

            function B(e) {
                let t = false;
                let n = 0;
                let r = false;
                let i;
                let s;
                let o;
                const u = new Promise(((e, t) => {
                    s = e;
                    o = t
                }));
                const a = t => {
                    if (!r) {
                        h(new D(t));
                        e.abort == null ? void 0 : e.abort()
                    }
                };
                const c = () => {
                    t = true
                };
                const l = () => {
                    t = false
                };
                const f = () => !A.isFocused() || e.networkMode !== "always" && !U.isOnline();
                const d = t => {
                    if (!r) {
                        r = true;
                        e.onSuccess == null ? void 0 : e.onSuccess(t);
                        i == null ? void 0 : i();
                        s(t)
                    }
                };
                const h = t => {
                    if (!r) {
                        r = true;
                        e.onError == null ? void 0 : e.onError(t);
                        i == null ? void 0 : i();
                        o(t)
                    }
                };
                const v = () => new Promise((t => {
                    i = e => {
                        const n = r || !f();
                        if (n) {
                            t(e)
                        }
                        return n
                    };
                    e.onPause == null ? void 0 : e.onPause()
                })).then((() => {
                    i = undefined;
                    if (!r) {
                        e.onContinue == null ? void 0 : e.onContinue()
                    }
                }));
                const p = () => {
                    if (r) {
                        return
                    }
                    let i;
                    try {
                        i = e.fn()
                    } catch (e) {
                        i = Promise.reject(e)
                    }
                    Promise.resolve(i).then(d).catch((i => {
                        var s, o;
                        if (r) {
                            return
                        }
                        const u = (s = e.retry) != null ? s : 3;
                        const a = (o = e.retryDelay) != null ? o : I;
                        const c = typeof a === "function" ? a(n, i) : a;
                        const l = u === true || typeof u === "number" && n < u || typeof u === "function" && u(n, i);
                        if (t || !l) {
                            h(i);
                            return
                        }
                        n++;
                        e.onFail == null ? void 0 : e.onFail(n, i);
                        x(c).then((() => {
                            if (f()) {
                                return v()
                            }
                            return
                        })).then((() => {
                            if (t) {
                                h(i)
                            } else {
                                p()
                            }
                        }))
                    }))
                };
                if (L(e.networkMode)) {
                    p()
                } else {
                    v().then(p)
                }
                return {
                    promise: u,
                    cancel: a,
                    continue: () => {
                        const e = i == null ? void 0 : i();
                        return e ? u : Promise.resolve()
                    },
                    cancelRetry: c,
                    continueRetry: l
                }
            }
            class K extends M {
                constructor(e, t) {
                    super();
                    this.client = e;
                    this.options = t;
                    this.trackedProps = new Set;
                    this.selectError = null;
                    this.bindMethods();
                    this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this);
                    this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    if (this.listeners.length === 1) {
                        this.currentQuery.addObserver(this);
                        if (G(this.currentQuery, this.options)) {
                            this.executeFetch()
                        }
                        this.updateTimers()
                    }
                }
                onUnsubscribe() {
                    if (!this.listeners.length) {
                        this.destroy()
                    }
                }
                shouldFetchOnReconnect() {
                    return V(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return V(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = [];
                    this.clearStaleTimeout();
                    this.clearRefetchInterval();
                    this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    const n = this.options;
                    const r = this.currentQuery;
                    this.options = this.client.defaultQueryOptions(e);
                    if (false) {}
                    if (!O(n, this.options)) {
                        this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        })
                    }
                    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
                        throw new Error("Expected enabled to be a boolean")
                    }
                    if (!this.options.queryKey) {
                        this.options.queryKey = n.queryKey
                    }
                    this.updateQuery();
                    const i = this.hasListeners();
                    if (i && H(this.currentQuery, r, this.options, n)) {
                        this.executeFetch()
                    }
                    this.updateResult(t);
                    if (i && (this.currentQuery !== r || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime)) {
                        this.updateStaleTimeout()
                    }
                    const s = this.computeRefetchInterval();
                    if (i && (this.currentQuery !== r || this.options.enabled !== n.enabled || s !== this.currentRefetchInterval)) {
                        this.updateRefetchInterval(s)
                    }
                }
                getOptimisticResult(e) {
                    const t = this.client.getQueryCache().build(this.client, e);
                    return this.createResult(t, e)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    const t = {};
                    Object.keys(e).forEach((n => {
                        Object.defineProperty(t, n, {
                            configurable: false,
                            enumerable: true,
                            get: () => {
                                this.trackedProps.add(n);
                                return e[n]
                            }
                        })
                    }));
                    return t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    const t = this.client.defaultQueryOptions(e);
                    const n = this.client.getQueryCache().build(this.client, t);
                    n.isFetchingOptimistic = true;
                    return n.fetch().then((() => this.createResult(n, t)))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: (t = e.cancelRefetch) != null ? t : true
                    }).then((() => {
                        this.updateResult();
                        return this.currentResult
                    }))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    if (!(e != null && e.throwOnError)) {
                        t = t.catch(i)
                    }
                    return t
                }
                updateStaleTimeout() {
                    this.clearStaleTimeout();
                    if (r || this.currentResult.isStale || !o(this.options.staleTime)) {
                        return
                    }
                    const e = c(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    const t = e + 1;
                    this.staleTimeoutId = setTimeout((() => {
                        if (!this.currentResult.isStale) {
                            this.updateResult()
                        }
                    }), t)
                }
                computeRefetchInterval() {
                    var e;
                    return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : false
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval();
                    this.currentRefetchInterval = e;
                    if (r || this.options.enabled === false || !o(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
                        return
                    }
                    this.refetchIntervalId = setInterval((() => {
                        if (this.options.refetchIntervalInBackground || A.isFocused()) {
                            this.executeFetch()
                        }
                    }), this.currentRefetchInterval)
                }
                updateTimers() {
                    this.updateStaleTimeout();
                    this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    if (this.staleTimeoutId) {
                        clearTimeout(this.staleTimeoutId);
                        this.staleTimeoutId = undefined
                    }
                }
                clearRefetchInterval() {
                    if (this.refetchIntervalId) {
                        clearInterval(this.refetchIntervalId);
                        this.refetchIntervalId = undefined
                    }
                }
                createResult(e, t) {
                    const n = this.currentQuery;
                    const r = this.options;
                    const i = this.currentResult;
                    const s = this.currentResultState;
                    const o = this.currentResultOptions;
                    const u = e !== n;
                    const a = u ? e.state : this.currentQueryInitialState;
                    const c = u ? this.currentResult : this.previousQueryResult;
                    const {
                        state: l
                    } = e;
                    let {
                        dataUpdatedAt: f,
                        error: d,
                        errorUpdatedAt: h,
                        fetchStatus: v,
                        status: p
                    } = l;
                    let y = false;
                    let m = false;
                    let b;
                    if (t._optimisticResults) {
                        const i = this.hasListeners();
                        const s = !i && G(e, t);
                        const o = i && H(e, n, t, r);
                        if (s || o) {
                            v = L(e.options.networkMode) ? "fetching" : "paused";
                            if (!f) {
                                p = "loading"
                            }
                        }
                        if (t._optimisticResults === "isRestoring") {
                            v = "idle"
                        }
                    }
                    if (t.keepPreviousData && !l.dataUpdatedAt && c != null && c.isSuccess && p !== "error") {
                        b = c.data;
                        f = c.dataUpdatedAt;
                        p = c.status;
                        y = true
                    } else if (t.select && typeof l.data !== "undefined") {
                        if (i && l.data === (s == null ? void 0 : s.data) && t.select === this.selectFn) {
                            b = this.selectResult
                        } else {
                            try {
                                this.selectFn = t.select;
                                b = t.select(l.data);
                                b = Q(i == null ? void 0 : i.data, b, t);
                                this.selectResult = b;
                                this.selectError = null
                            } catch (e) {
                                if (false) {}
                                this.selectError = e
                            }
                        }
                    } else {
                        b = l.data
                    }
                    if (typeof t.placeholderData !== "undefined" && typeof b === "undefined" && p === "loading") {
                        let e;
                        if (i != null && i.isPlaceholderData && t.placeholderData === (o == null ? void 0 : o.placeholderData)) {
                            e = i.data
                        } else {
                            e = typeof t.placeholderData === "function" ? t.placeholderData() : t.placeholderData;
                            if (t.select && typeof e !== "undefined") {
                                try {
                                    e = t.select(e);
                                    this.selectError = null
                                } catch (e) {
                                    if (false) {}
                                    this.selectError = e
                                }
                            }
                        }
                        if (typeof e !== "undefined") {
                            p = "success";
                            b = Q(i == null ? void 0 : i.data, e, t);
                            m = true
                        }
                    }
                    if (this.selectError) {
                        d = this.selectError;
                        b = this.selectResult;
                        h = Date.now();
                        p = "error"
                    }
                    const w = v === "fetching";
                    const g = p === "loading";
                    const O = p === "error";
                    const j = {
                        status: p,
                        fetchStatus: v,
                        isLoading: g,
                        isSuccess: p === "success",
                        isError: O,
                        isInitialLoading: g && w,
                        data: b,
                        dataUpdatedAt: f,
                        error: d,
                        errorUpdatedAt: h,
                        failureCount: l.fetchFailureCount,
                        failureReason: l.fetchFailureReason,
                        errorUpdateCount: l.errorUpdateCount,
                        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
                        isFetchedAfterMount: l.dataUpdateCount > a.dataUpdateCount || l.errorUpdateCount > a.errorUpdateCount,
                        isFetching: w,
                        isRefetching: w && !g,
                        isLoadingError: O && l.dataUpdatedAt === 0,
                        isPaused: v === "paused",
                        isPlaceholderData: m,
                        isPreviousData: y,
                        isRefetchError: O && l.dataUpdatedAt !== 0,
                        isStale: W(e, t),
                        refetch: this.refetch,
                        remove: this.remove
                    };
                    return j
                }
                updateResult(e) {
                    const t = this.currentResult;
                    const n = this.createResult(this.currentQuery, this.options);
                    this.currentResultState = this.currentQuery.state;
                    this.currentResultOptions = this.options;
                    if (O(n, t)) {
                        return
                    }
                    this.currentResult = n;
                    const r = {
                        cache: true
                    };
                    const i = () => {
                        if (!t) {
                            return true
                        }
                        const {
                            notifyOnChangeProps: e
                        } = this.options;
                        if (e === "all" || !e && !this.trackedProps.size) {
                            return true
                        }
                        const n = new Set(e != null ? e : this.trackedProps);
                        if (this.options.useErrorBoundary) {
                            n.add("error")
                        }
                        return Object.keys(this.currentResult).some((e => {
                            const r = e;
                            const i = this.currentResult[r] !== t[r];
                            return i && n.has(r)
                        }))
                    };
                    if ((e == null ? void 0 : e.listeners) !== false && i()) {
                        r.listeners = true
                    }
                    this.notify({ ...r,
                        ...e
                    })
                }
                updateQuery() {
                    const e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) {
                        return
                    }
                    const t = this.currentQuery;
                    this.currentQuery = e;
                    this.currentQueryInitialState = e.state;
                    this.previousQueryResult = this.currentResult;
                    if (this.hasListeners()) {
                        t == null ? void 0 : t.removeObserver(this);
                        e.addObserver(this)
                    }
                }
                onQueryUpdate(e) {
                    const t = {};
                    if (e.type === "success") {
                        t.onSuccess = !e.manual
                    } else if (e.type === "error" && !N(e.error)) {
                        t.onError = true
                    }
                    this.updateResult(t);
                    if (this.hasListeners()) {
                        this.updateTimers()
                    }
                }
                notify(e) {
                    P.batch((() => {
                        if (e.onSuccess) {
                            var t, n, r, i;
                            (t = (n = this.options).onSuccess) == null ? void 0 : t.call(n, this.currentResult.data);
                            (r = (i = this.options).onSettled) == null ? void 0 : r.call(i, this.currentResult.data, null)
                        } else if (e.onError) {
                            var s, o, u, a;
                            (s = (o = this.options).onError) == null ? void 0 : s.call(o, this.currentResult.error);
                            (u = (a = this.options).onSettled) == null ? void 0 : u.call(a, undefined, this.currentResult.error)
                        }
                        if (e.listeners) {
                            this.listeners.forEach((e => {
                                e(this.currentResult)
                            }))
                        }
                        if (e.cache) {
                            this.client.getQueryCache().notify({
                                query: this.currentQuery,
                                type: "observerResultsUpdated"
                            })
                        }
                    }))
                }
            }

            function z(e, t) {
                return t.enabled !== false && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === false)
            }

            function G(e, t) {
                return z(e, t) || e.state.dataUpdatedAt > 0 && V(e, t, t.refetchOnMount)
            }

            function V(e, t, n) {
                if (t.enabled !== false) {
                    const r = typeof n === "function" ? n(e) : n;
                    return r === "always" || r !== false && W(e, t)
                }
                return false
            }

            function H(e, t, n, r) {
                return n.enabled !== false && (e !== t || r.enabled === false) && (!n.suspense || e.state.status !== "error") && W(e, n)
            }

            function W(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
            var X = n("./node_modules/react/index.js");
            var $ = n("./node_modules/use-sync-external-store/shim/index.js");
            "use client";
            const J = $["useSyncExternalStore"];
            "use client";

            function Z() {
                let e = false;
                return {
                    clearReset: () => {
                        e = false
                    },
                    reset: () => {
                        e = true
                    },
                    isReset: () => e
                }
            }
            const Y = X["createContext"](Z());
            const ee = () => X["useContext"](Y);
            const te = ({
                children: e
            }) => {
                const [t] = X["useState"]((() => Z()));
                return X["createElement"](Y.Provider, {
                    value: t
                }, typeof e === "function" ? e(t) : e)
            };
            "use client";
            const ne = X["createContext"](undefined);
            const re = X["createContext"](false);

            function ie(e, t) {
                if (e) {
                    return e
                }
                if (t && typeof window !== "undefined") {
                    if (!window.ReactQueryClientContext) {
                        window.ReactQueryClientContext = ne
                    }
                    return window.ReactQueryClientContext
                }
                return ne
            }
            const se = ({
                context: e
            } = {}) => {
                const t = X["useContext"](ie(e, X["useContext"](re)));
                if (!t) {
                    throw new Error("No QueryClient set, use QueryClientProvider to set one")
                }
                return t
            };
            const oe = ({
                client: e,
                children: t,
                context: n,
                contextSharing: r = false
            }) => {
                X["useEffect"]((() => {
                    e.mount();
                    return () => {
                        e.unmount()
                    }
                }), [e]);
                if (false) {}
                const i = ie(n, r);
                return X["createElement"](re.Provider, {
                    value: !n && r
                }, X["createElement"](i.Provider, {
                    value: e
                }, t))
            };
            "use client";
            const ue = X["createContext"](false);
            const ae = () => X["useContext"](ue);
            const ce = ue.Provider;

            function le(e, t) {
                if (typeof e === "function") {
                    return e(...t)
                }
                return !!e
            }
            "use client";
            const fe = (e, t) => {
                if (e.suspense || e.useErrorBoundary) {
                    if (!t.isReset()) {
                        e.retryOnMount = false
                    }
                }
            };
            const de = e => {
                X["useEffect"]((() => {
                    e.clearReset()
                }), [e])
            };
            const he = ({
                result: e,
                errorResetBoundary: t,
                useErrorBoundary: n,
                query: r
            }) => e.isError && !t.isReset() && !e.isFetching && le(n, [e.error, r]);
            const ve = e => {
                if (e.suspense) {
                    if (typeof e.staleTime !== "number") {
                        e.staleTime = 1e3
                    }
                }
            };
            const pe = (e, t) => e.isLoading && e.isFetching && !t;
            const ye = (e, t, n) => (e == null ? void 0 : e.suspense) && pe(t, n);
            const me = (e, t, n) => t.fetchOptimistic(e).then((({
                data: t
            }) => {
                e.onSuccess == null ? void 0 : e.onSuccess(t);
                e.onSettled == null ? void 0 : e.onSettled(t, null)
            })).catch((t => {
                n.clearReset();
                e.onError == null ? void 0 : e.onError(t);
                e.onSettled == null ? void 0 : e.onSettled(undefined, t)
            }));
            "use client";

            function be(e, t) {
                const n = se({
                    context: e.context
                });
                const r = ae();
                const i = ee();
                const s = n.defaultQueryOptions(e);
                s._optimisticResults = r ? "isRestoring" : "optimistic";
                if (s.onError) {
                    s.onError = P.batchCalls(s.onError)
                }
                if (s.onSuccess) {
                    s.onSuccess = P.batchCalls(s.onSuccess)
                }
                if (s.onSettled) {
                    s.onSettled = P.batchCalls(s.onSettled)
                }
                ve(s);
                fe(s, i);
                de(i);
                const [o] = X["useState"]((() => new t(n, s)));
                const u = o.getOptimisticResult(s);
                J(X["useCallback"]((e => r ? () => undefined : o.subscribe(P.batchCalls(e))), [o, r]), (() => o.getCurrentResult()), (() => o.getCurrentResult()));
                X["useEffect"]((() => {
                    o.setOptions(s, {
                        listeners: false
                    })
                }), [s, o]);
                if (ye(s, u, r)) {
                    throw me(s, o, i)
                }
                if (he({
                        result: u,
                        errorResetBoundary: i,
                        useErrorBoundary: s.useErrorBoundary,
                        query: o.getCurrentQuery()
                    })) {
                    throw u.error
                }
                return !s.notifyOnChangeProps ? o.trackResult(u) : u
            }
            n.d(t, "a", (function() {
                return we
            }));
            "use client";

            function we(e, t, n) {
                const r = l(e, t, n);
                return be(r, K)
            }
        },
        "./node_modules/@udemy/browse-course/node_modules/classnames/index.js": function(e, t, n) {
            var r, i;
            (function() {
                "use strict";
                var n = {}.hasOwnProperty;
                var s = "[native code]";

                function o() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (!r) continue;
                        var i = typeof r;
                        if (i === "string" || i === "number") {
                            e.push(r)
                        } else if (Array.isArray(r)) {
                            if (r.length) {
                                var s = o.apply(null, r);
                                if (s) {
                                    e.push(s)
                                }
                            }
                        } else if (i === "object") {
                            if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                e.push(r.toString());
                                continue
                            }
                            for (var u in r) {
                                if (n.call(r, u) && r[u]) {
                                    e.push(u)
                                }
                            }
                        }
                    }
                    return e.join(" ")
                }
                if (true && e.exports) {
                    o.default = o;
                    e.exports = o
                } else if (true) {
                    !(r = [], i = function() {
                        return o
                    }.apply(t, r), i !== undefined && (e.exports = i))
                } else {}
            })()
        },
        "./node_modules/@udemy/graphql/node_modules/js-cookie/dist/js.cookie.js": function(e, t, n) {
            (function(t, n) {
                true ? e.exports = n() : undefined
            })(this, (function() {
                "use strict";

                function e(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) {
                            e[r] = n[r]
                        }
                    }
                    return e
                }
                var t = {
                    read: function(e) {
                        if (e[0] === '"') {
                            e = e.slice(1, -1)
                        }
                        return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                    },
                    write: function(e) {
                        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                    }
                };

                function n(t, r) {
                    function i(n, i, s) {
                        if (typeof document === "undefined") {
                            return
                        }
                        s = e({}, r, s);
                        if (typeof s.expires === "number") {
                            s.expires = new Date(Date.now() + s.expires * 864e5)
                        }
                        if (s.expires) {
                            s.expires = s.expires.toUTCString()
                        }
                        n = encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var o = "";
                        for (var u in s) {
                            if (!s[u]) {
                                continue
                            }
                            o += "; " + u;
                            if (s[u] === true) {
                                continue
                            }
                            o += "=" + s[u].split(";")[0]
                        }
                        return document.cookie = n + "=" + t.write(i, n) + o
                    }

                    function s(e) {
                        if (typeof document === "undefined" || arguments.length && !e) {
                            return
                        }
                        var n = document.cookie ? document.cookie.split("; ") : [];
                        var r = {};
                        for (var i = 0; i < n.length; i++) {
                            var s = n[i].split("=");
                            var o = s.slice(1).join("=");
                            try {
                                var u = decodeURIComponent(s[0]);
                                r[u] = t.read(o, u);
                                if (e === u) {
                                    break
                                }
                            } catch (e) {}
                        }
                        return e ? r[e] : r
                    }
                    return Object.create({
                        set: i,
                        get: s,
                        remove: function(t, n) {
                            i(t, "", e({}, n, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return n(this.converter, e({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return n(e({}, this.converter, t), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(r)
                        },
                        converter: {
                            value: Object.freeze(t)
                        }
                    })
                }
                var r = n(t, {
                    path: "/"
                });
                return r
            }))
        },
        "./node_modules/react-query/es/core/focusManager.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
            var i = n("./node_modules/react-query/es/core/subscribable.js");
            var s = n("./node_modules/react-query/es/core/utils.js");
            var o = function(e) {
                Object(r["a"])(t, e);

                function t() {
                    return e.apply(this, arguments) || this
                }
                var n = t.prototype;
                n.onSubscribe = function e() {
                    if (!this.removeEventListener) {
                        this.setDefaultEventListener()
                    }
                };
                n.setEventListener = function e(t) {
                    var n = this;
                    if (this.removeEventListener) {
                        this.removeEventListener()
                    }
                    this.removeEventListener = t((function(e) {
                        if (typeof e === "boolean") {
                            n.setFocused(e)
                        } else {
                            n.onFocus()
                        }
                    }))
                };
                n.setFocused = function e(t) {
                    this.focused = t;
                    if (t) {
                        this.onFocus()
                    }
                };
                n.onFocus = function e() {
                    this.listeners.forEach((function(e) {
                        e()
                    }))
                };
                n.isFocused = function e() {
                    if (typeof this.focused === "boolean") {
                        return this.focused
                    }
                    if (typeof document === "undefined") {
                        return true
                    }
                    return [undefined, "visible", "prerender"].includes(document.visibilityState)
                };
                n.setDefaultEventListener = function e() {
                    var t;
                    if (!s["f"] && ((t = window) == null ? void 0 : t.addEventListener)) {
                        this.setEventListener((function(e) {
                            window.addEventListener("visibilitychange", e, false);
                            window.addEventListener("focus", e, false);
                            return function() {
                                window.removeEventListener("visibilitychange", e);
                                window.removeEventListener("focus", e)
                            }
                        }))
                    }
                };
                return t
            }(i["a"]);
            var u = new o
        },
        "./node_modules/react-query/es/core/index.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react-query/es/core/queryClient.js");
            n.d(t, "QueryClient", (function() {
                return r["a"]
            }));
            var i = n("./node_modules/react-query/es/core/types.js");
            var s = n.n(i);
            if (n.o(i, "QueryClientProvider")) n.d(t, "QueryClientProvider", (function() {
                return i["QueryClientProvider"]
            }));
            if (n.o(i, "useMutation")) n.d(t, "useMutation", (function() {
                return i["useMutation"]
            }));
            if (n.o(i, "useQuery")) n.d(t, "useQuery", (function() {
                return i["useQuery"]
            }))
        },
        "./node_modules/react-query/es/core/logger.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n.d(t, "b", (function() {
                return o
            }));
            var r = n("./node_modules/react-query/es/core/utils.js");
            var i = console || {
                error: r["i"],
                warn: r["i"],
                log: r["i"]
            };

            function s() {
                return i
            }

            function o(e) {
                i = e
            }
        },
        "./node_modules/react-query/es/core/mutation.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n.d(t, "b", (function() {
                return c
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var i = n("./node_modules/react-query/es/core/logger.js");
            var s = n("./node_modules/react-query/es/core/notifyManager.js");
            var o = n("./node_modules/react-query/es/core/retryer.js");
            var u = n("./node_modules/react-query/es/core/utils.js");
            var a = function() {
                function e(e) {
                    this.options = Object(r["a"])({}, e.defaultOptions, e.options);
                    this.mutationId = e.mutationId;
                    this.mutationCache = e.mutationCache;
                    this.observers = [];
                    this.state = e.state || c()
                }
                var t = e.prototype;
                t.setState = function e(t) {
                    this.dispatch({
                        type: "setState",
                        state: t
                    })
                };
                t.addObserver = function e(t) {
                    if (this.observers.indexOf(t) === -1) {
                        this.observers.push(t)
                    }
                };
                t.removeObserver = function e(t) {
                    this.observers = this.observers.filter((function(e) {
                        return e !== t
                    }))
                };
                t.cancel = function e() {
                    if (this.retryer) {
                        this.retryer.cancel();
                        return this.retryer.promise.then(u["i"]).catch(u["i"])
                    }
                    return Promise.resolve()
                };
                t.continue = function e() {
                    if (this.retryer) {
                        this.retryer.continue();
                        return this.retryer.promise
                    }
                    return this.execute()
                };
                t.execute = function e() {
                    var t = this;
                    var n;
                    var r = this.state.status === "loading";
                    var s = Promise.resolve();
                    if (!r) {
                        this.dispatch({
                            type: "loading",
                            variables: this.options.variables
                        });
                        s = s.then((function() {
                            return t.options.onMutate == null ? void 0 : t.options.onMutate(t.state.variables)
                        })).then((function(e) {
                            if (e !== t.state.context) {
                                t.dispatch({
                                    type: "loading",
                                    context: e,
                                    variables: t.state.variables
                                })
                            }
                        }))
                    }
                    return s.then((function() {
                        return t.executeMutation()
                    })).then((function(e) {
                        n = e
                    })).then((function() {
                        return t.options.onSuccess == null ? void 0 : t.options.onSuccess(n, t.state.variables, t.state.context)
                    })).then((function() {
                        return t.options.onSettled == null ? void 0 : t.options.onSettled(n, null, t.state.variables, t.state.context)
                    })).then((function() {
                        t.dispatch({
                            type: "success",
                            data: n
                        });
                        return n
                    })).catch((function(e) {
                        if (t.mutationCache.config.onError) {
                            t.mutationCache.config.onError(e, t.state.variables, t.state.context, t)
                        }
                        Object(i["a"])().error(e);
                        return Promise.resolve().then((function() {
                            return t.options.onError == null ? void 0 : t.options.onError(e, t.state.variables, t.state.context)
                        })).then((function() {
                            return t.options.onSettled == null ? void 0 : t.options.onSettled(undefined, e, t.state.variables, t.state.context)
                        })).then((function() {
                            t.dispatch({
                                type: "error",
                                error: e
                            });
                            throw e
                        }))
                    }))
                };
                t.executeMutation = function e() {
                    var t = this,
                        n;
                    this.retryer = new o["a"]({
                        fn: function e() {
                            if (!t.options.mutationFn) {
                                return Promise.reject("No mutationFn found")
                            }
                            return t.options.mutationFn(t.state.variables)
                        },
                        onFail: function e() {
                            t.dispatch({
                                type: "failed"
                            })
                        },
                        onPause: function e() {
                            t.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: function e() {
                            t.dispatch({
                                type: "continue"
                            })
                        },
                        retry: (n = this.options.retry) != null ? n : 0,
                        retryDelay: this.options.retryDelay
                    });
                    return this.retryer.promise
                };
                t.dispatch = function e(t) {
                    var n = this;
                    this.state = l(this.state, t);
                    s["a"].batch((function() {
                        n.observers.forEach((function(e) {
                            e.onMutationUpdate(t)
                        }));
                        n.mutationCache.notify(n)
                    }))
                };
                return e
            }();

            function c() {
                return {
                    context: undefined,
                    data: undefined,
                    error: null,
                    failureCount: 0,
                    isPaused: false,
                    status: "idle",
                    variables: undefined
                }
            }

            function l(e, t) {
                switch (t.type) {
                    case "failed":
                        return Object(r["a"])({}, e, {
                            failureCount: e.failureCount + 1
                        });
                    case "pause":
                        return Object(r["a"])({}, e, {
                            isPaused: true
                        });
                    case "continue":
                        return Object(r["a"])({}, e, {
                            isPaused: false
                        });
                    case "loading":
                        return Object(r["a"])({}, e, {
                            context: t.context,
                            data: undefined,
                            error: null,
                            isPaused: false,
                            status: "loading",
                            variables: t.variables
                        });
                    case "success":
                        return Object(r["a"])({}, e, {
                            data: t.data,
                            error: null,
                            status: "success",
                            isPaused: false
                        });
                    case "error":
                        return Object(r["a"])({}, e, {
                            data: undefined,
                            error: t.error,
                            failureCount: e.failureCount + 1,
                            isPaused: false,
                            status: "error"
                        });
                    case "setState":
                        return Object(r["a"])({}, e, t.state);
                    default:
                        return e
                }
            }
        },
        "./node_modules/react-query/es/core/mutationCache.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
            var i = n("./node_modules/react-query/es/core/notifyManager.js");
            var s = n("./node_modules/react-query/es/core/mutation.js");
            var o = n("./node_modules/react-query/es/core/utils.js");
            var u = n("./node_modules/react-query/es/core/subscribable.js");
            var a = function(e) {
                Object(r["a"])(t, e);

                function t(t) {
                    var n;
                    n = e.call(this) || this;
                    n.config = t || {};
                    n.mutations = [];
                    n.mutationId = 0;
                    return n
                }
                var n = t.prototype;
                n.build = function e(t, n, r) {
                    var i = new s["a"]({
                        mutationCache: this,
                        mutationId: ++this.mutationId,
                        options: t.defaultMutationOptions(n),
                        state: r,
                        defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : undefined
                    });
                    this.add(i);
                    return i
                };
                n.add = function e(t) {
                    this.mutations.push(t);
                    this.notify(t)
                };
                n.remove = function e(t) {
                    this.mutations = this.mutations.filter((function(e) {
                        return e !== t
                    }));
                    t.cancel();
                    this.notify(t)
                };
                n.clear = function e() {
                    var t = this;
                    i["a"].batch((function() {
                        t.mutations.forEach((function(e) {
                            t.remove(e)
                        }))
                    }))
                };
                n.getAll = function e() {
                    return this.mutations
                };
                n.notify = function e(t) {
                    var n = this;
                    i["a"].batch((function() {
                        n.listeners.forEach((function(e) {
                            e(t)
                        }))
                    }))
                };
                n.onFocus = function e() {
                    this.resumePausedMutations()
                };
                n.onOnline = function e() {
                    this.resumePausedMutations()
                };
                n.resumePausedMutations = function e() {
                    var t = this.mutations.filter((function(e) {
                        return e.state.isPaused
                    }));
                    return i["a"].batch((function() {
                        return t.reduce((function(e, t) {
                            return e.then((function() {
                                return t.continue().catch(o["i"])
                            }))
                        }), Promise.resolve())
                    }))
                };
                return t
            }(u["a"])
        },
        "./node_modules/react-query/es/core/mutationObserver.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var i = n("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
            var s = n("./node_modules/react-query/es/core/mutation.js");
            var o = n("./node_modules/react-query/es/core/notifyManager.js");
            var u = n("./node_modules/react-query/es/core/subscribable.js");
            var a = n("./node_modules/react-query/es/core/utils.js");
            var c = function(e) {
                Object(i["a"])(t, e);

                function t(t, n) {
                    var r;
                    r = e.call(this) || this;
                    r.client = t;
                    r.setOptions(n);
                    r.bindMethods();
                    r.updateResult();
                    return r
                }
                var n = t.prototype;
                n.bindMethods = function e() {
                    this.mutate = this.mutate.bind(this);
                    this.reset = this.reset.bind(this)
                };
                n.setOptions = function e(t) {
                    this.options = this.client.defaultMutationOptions(t)
                };
                n.onUnsubscribe = function e() {
                    if (!this.listeners.length) {
                        var t;
                        (t = this.currentMutation) == null ? void 0 : t.removeObserver(this)
                    }
                };
                n.onMutationUpdate = function e(t) {
                    this.updateResult();
                    var n = {
                        listeners: true
                    };
                    if (t.type === "success") {
                        n.onSuccess = true
                    } else if (t.type === "error") {
                        n.onError = true
                    }
                    this.notify(n)
                };
                n.getCurrentResult = function e() {
                    return this.currentResult
                };
                n.reset = function e() {
                    this.currentMutation = undefined;
                    this.updateResult();
                    this.notify({
                        listeners: true
                    })
                };
                n.mutate = function e(t, n) {
                    this.mutateOptions = n;
                    if (this.currentMutation) {
                        this.currentMutation.removeObserver(this)
                    }
                    this.currentMutation = this.client.getMutationCache().build(this.client, Object(r["a"])({}, this.options, {
                        variables: t != null ? t : this.options.variables
                    }));
                    this.currentMutation.addObserver(this);
                    return this.currentMutation.execute()
                };
                n.updateResult = function e() {
                    var t = this.currentMutation ? this.currentMutation.state : Object(s["b"])();
                    this.currentResult = Object(r["a"])({}, t, Object(a["d"])(t.status), {
                        mutate: this.mutate,
                        reset: this.reset
                    })
                };
                n.notify = function e(t) {
                    var n = this;
                    o["a"].batch((function() {
                        if (n.mutateOptions) {
                            if (t.onSuccess) {
                                n.mutateOptions.onSuccess == null ? void 0 : n.mutateOptions.onSuccess(n.currentResult.data, n.currentResult.variables, n.currentResult.context);
                                n.mutateOptions.onSettled == null ? void 0 : n.mutateOptions.onSettled(n.currentResult.data, null, n.currentResult.variables, n.currentResult.context)
                            } else if (t.onError) {
                                n.mutateOptions.onError == null ? void 0 : n.mutateOptions.onError(n.currentResult.error, n.currentResult.variables, n.currentResult.context);
                                n.mutateOptions.onSettled == null ? void 0 : n.mutateOptions.onSettled(undefined, n.currentResult.error, n.currentResult.variables, n.currentResult.context)
                            }
                        }
                        if (t.listeners) {
                            n.listeners.forEach((function(e) {
                                e(n.currentResult)
                            }))
                        }
                    }))
                };
                return t
            }(u["a"])
        },
        "./node_modules/react-query/es/core/notifyManager.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n("./node_modules/react-query/es/core/utils.js");
            var i = function() {
                function e() {
                    this.queue = [];
                    this.transactions = 0;
                    this.notifyFn = function(e) {
                        e()
                    };
                    this.batchNotifyFn = function(e) {
                        e()
                    }
                }
                var t = e.prototype;
                t.batch = function e(t) {
                    this.transactions++;
                    var n = t();
                    this.transactions--;
                    if (!this.transactions) {
                        this.flush()
                    }
                    return n
                };
                t.schedule = function e(t) {
                    var n = this;
                    if (this.transactions) {
                        this.queue.push(t)
                    } else {
                        Object(r["o"])((function() {
                            n.notifyFn(t)
                        }))
                    }
                };
                t.batchCalls = function e(t) {
                    var n = this;
                    return function() {
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) {
                            r[i] = arguments[i]
                        }
                        n.schedule((function() {
                            t.apply(void 0, r)
                        }))
                    }
                };
                t.flush = function e() {
                    var t = this;
                    var n = this.queue;
                    this.queue = [];
                    if (n.length) {
                        Object(r["o"])((function() {
                            t.batchNotifyFn((function() {
                                n.forEach((function(e) {
                                    t.notifyFn(e)
                                }))
                            }))
                        }))
                    }
                };
                t.setNotifyFunction = function e(t) {
                    this.notifyFn = t
                };
                t.setBatchNotifyFunction = function e(t) {
                    this.batchNotifyFn = t
                };
                return e
            }();
            var s = new i
        },
        "./node_modules/react-query/es/core/onlineManager.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
            var i = n("./node_modules/react-query/es/core/subscribable.js");
            var s = n("./node_modules/react-query/es/core/utils.js");
            var o = function(e) {
                Object(r["a"])(t, e);

                function t() {
                    return e.apply(this, arguments) || this
                }
                var n = t.prototype;
                n.onSubscribe = function e() {
                    if (!this.removeEventListener) {
                        this.setDefaultEventListener()
                    }
                };
                n.setEventListener = function e(t) {
                    var n = this;
                    if (this.removeEventListener) {
                        this.removeEventListener()
                    }
                    this.removeEventListener = t((function(e) {
                        if (typeof e === "boolean") {
                            n.setOnline(e)
                        } else {
                            n.onOnline()
                        }
                    }))
                };
                n.setOnline = function e(t) {
                    this.online = t;
                    if (t) {
                        this.onOnline()
                    }
                };
                n.onOnline = function e() {
                    this.listeners.forEach((function(e) {
                        e()
                    }))
                };
                n.isOnline = function e() {
                    if (typeof this.online === "boolean") {
                        return this.online
                    }
                    return navigator.onLine === undefined || navigator.onLine
                };
                n.setDefaultEventListener = function e() {
                    var t;
                    if (!s["f"] && ((t = window) == null ? void 0 : t.addEventListener)) {
                        this.setEventListener((function(e) {
                            window.addEventListener("online", e, false);
                            window.addEventListener("offline", e, false);
                            return function() {
                                window.removeEventListener("online", e);
                                window.removeEventListener("offline", e)
                            }
                        }))
                    }
                };
                return t
            }(i["a"]);
            var u = new o
        },
        "./node_modules/react-query/es/core/queryCache.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
            var i = n("./node_modules/react-query/es/core/utils.js");
            var s = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var o = n("./node_modules/react-query/es/core/notifyManager.js");
            var u = n("./node_modules/react-query/es/core/logger.js");
            var a = n("./node_modules/react-query/es/core/retryer.js");
            var c = function() {
                function e(e) {
                    this.defaultOptions = e.defaultOptions;
                    this.setOptions(e.options);
                    this.observers = [];
                    this.cache = e.cache;
                    this.queryKey = e.queryKey;
                    this.queryHash = e.queryHash;
                    this.initialState = e.state || this.getDefaultState(this.options);
                    this.state = this.initialState;
                    this.scheduleGc()
                }
                var t = e.prototype;
                t.setOptions = function e(t) {
                    var n;
                    this.options = Object(s["a"])({}, this.defaultOptions, t);
                    this.cacheTime = Math.max(this.cacheTime || 0, (n = this.options.cacheTime) != null ? n : 5 * 60 * 1e3)
                };
                t.setDefaultOptions = function e(t) {
                    this.defaultOptions = t
                };
                t.scheduleGc = function e() {
                    var t = this;
                    this.clearGcTimeout();
                    if (Object(i["g"])(this.cacheTime)) {
                        this.gcTimeout = setTimeout((function() {
                            t.optionalRemove()
                        }), this.cacheTime)
                    }
                };
                t.clearGcTimeout = function e() {
                    clearTimeout(this.gcTimeout);
                    this.gcTimeout = undefined
                };
                t.optionalRemove = function e() {
                    if (!this.observers.length && !this.state.isFetching) {
                        this.cache.remove(this)
                    }
                };
                t.setData = function e(t, n) {
                    var r, s;
                    var o = this.state.data;
                    var u = Object(i["b"])(t, o);
                    if ((r = (s = this.options).isDataEqual) == null ? void 0 : r.call(s, o, u)) {
                        u = o
                    } else if (this.options.structuralSharing !== false) {
                        u = Object(i["n"])(o, u)
                    }
                    this.dispatch({
                        data: u,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt
                    });
                    return u
                };
                t.setState = function e(t) {
                    this.dispatch({
                        type: "setState",
                        state: t
                    })
                };
                t.cancel = function e(t) {
                    var n;
                    var r = this.promise;
                    (n = this.retryer) == null ? void 0 : n.cancel(t);
                    return r ? r.then(i["i"]).catch(i["i"]) : Promise.resolve()
                };
                t.destroy = function e() {
                    this.clearGcTimeout();
                    this.cancel({
                        silent: true
                    })
                };
                t.reset = function e() {
                    this.destroy();
                    this.setState(this.initialState)
                };
                t.isActive = function e() {
                    return this.observers.some((function(e) {
                        return e.options.enabled !== false
                    }))
                };
                t.isFetching = function e() {
                    return this.state.isFetching
                };
                t.isStale = function e() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((function(e) {
                        return e.getCurrentResult().isStale
                    }))
                };
                t.isStaleByTime = function e(t) {
                    if (t === void 0) {
                        t = 0
                    }
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Object(i["r"])(this.state.dataUpdatedAt, t)
                };
                t.onFocus = function e() {
                    var t;
                    var n = this.observers.find((function(e) {
                        return e.willFetchOnWindowFocus()
                    }));
                    if (n) {
                        n.refetch()
                    }(t = this.retryer) == null ? void 0 : t.continue()
                };
                t.onOnline = function e() {
                    var t;
                    var n = this.observers.find((function(e) {
                        return e.willFetchOnReconnect()
                    }));
                    if (n) {
                        n.refetch()
                    }(t = this.retryer) == null ? void 0 : t.continue()
                };
                t.addObserver = function e(t) {
                    if (this.observers.indexOf(t) === -1) {
                        this.observers.push(t);
                        this.clearGcTimeout();
                        this.cache.notify(this)
                    }
                };
                t.removeObserver = function e(t) {
                    if (this.observers.indexOf(t) !== -1) {
                        this.observers = this.observers.filter((function(e) {
                            return e !== t
                        }));
                        if (!this.observers.length) {
                            if (this.retryer) {
                                if (this.retryer.isTransportCancelable) {
                                    this.retryer.cancel()
                                } else {
                                    this.retryer.cancelRetry()
                                }
                            }
                            if (this.cacheTime) {
                                this.scheduleGc()
                            } else {
                                this.cache.remove(this)
                            }
                        }
                        this.cache.notify(this)
                    }
                };
                t.invalidate = function e() {
                    if (!this.state.isInvalidated) {
                        this.dispatch({
                            type: "invalidate"
                        })
                    }
                };
                t.fetch = function e(t, n) {
                    var r = this,
                        s, o;
                    if (this.state.isFetching)
                        if (this.state.dataUpdatedAt && (n == null ? void 0 : n.cancelRefetch)) {
                            this.cancel({
                                silent: true
                            })
                        } else if (this.promise) {
                        return this.promise
                    }
                    if (t) {
                        this.setOptions(t)
                    }
                    if (!this.options.queryFn) {
                        var c = this.observers.find((function(e) {
                            return e.options.queryFn
                        }));
                        if (c) {
                            this.setOptions(c.options)
                        }
                    }
                    var l = Object(i["a"])(this.queryKey);
                    var f = {
                        queryKey: l,
                        pageParam: undefined
                    };
                    var d = function e() {
                        return r.options.queryFn ? r.options.queryFn(f) : Promise.reject("Missing queryFn")
                    };
                    var h = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: l,
                        state: this.state,
                        fetchFn: d
                    };
                    if ((s = this.options.behavior) == null ? void 0 : s.onFetch) {
                        var v;
                        (v = this.options.behavior) == null ? void 0 : v.onFetch(h)
                    }
                    if (!this.state.isFetching || this.state.fetchMeta !== ((o = h.fetchOptions) == null ? void 0 : o.meta)) {
                        var p;
                        this.dispatch({
                            type: "fetch",
                            meta: (p = h.fetchOptions) == null ? void 0 : p.meta
                        })
                    }
                    this.retryer = new a["a"]({
                        fn: h.fetchFn,
                        onFail: function e() {
                            r.dispatch({
                                type: "failed"
                            })
                        },
                        onPause: function e() {
                            r.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: function e() {
                            r.dispatch({
                                type: "continue"
                            })
                        },
                        retry: h.options.retry,
                        retryDelay: h.options.retryDelay
                    });
                    this.promise = this.retryer.promise.then((function(e) {
                        return r.setData(e)
                    })).catch((function(e) {
                        if (!(Object(a["c"])(e) && e.silent)) {
                            r.dispatch({
                                type: "error",
                                error: e
                            })
                        }
                        if (!Object(a["c"])(e)) {
                            if (r.cache.config.onError) {
                                r.cache.config.onError(e, r)
                            }
                            Object(u["a"])().error(e)
                        }
                        if (r.cacheTime === 0) {
                            r.optionalRemove()
                        }
                        throw e
                    })).then((function(e) {
                        if (r.cacheTime === 0) {
                            r.optionalRemove()
                        }
                        return e
                    }));
                    return this.promise
                };
                t.dispatch = function e(t) {
                    var n = this;
                    this.state = this.reducer(this.state, t);
                    o["a"].batch((function() {
                        n.observers.forEach((function(e) {
                            e.onQueryUpdate(t)
                        }));
                        n.cache.notify(n)
                    }))
                };
                t.getDefaultState = function e(t) {
                    var n = typeof t.initialData === "function" ? t.initialData() : t.initialData;
                    var r = typeof t.initialData !== "undefined";
                    var i = r ? typeof t.initialDataUpdatedAt === "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                    var s = typeof n !== "undefined";
                    return {
                        data: n,
                        dataUpdateCount: 0,
                        dataUpdatedAt: s ? i != null ? i : Date.now() : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchMeta: null,
                        isFetching: false,
                        isInvalidated: false,
                        isPaused: false,
                        status: s ? "success" : "idle"
                    }
                };
                t.reducer = function e(t, n) {
                    var r, i;
                    switch (n.type) {
                        case "failed":
                            return Object(s["a"])({}, t, {
                                fetchFailureCount: t.fetchFailureCount + 1
                            });
                        case "pause":
                            return Object(s["a"])({}, t, {
                                isPaused: true
                            });
                        case "continue":
                            return Object(s["a"])({}, t, {
                                isPaused: false
                            });
                        case "fetch":
                            return Object(s["a"])({}, t, {
                                fetchFailureCount: 0,
                                fetchMeta: (r = n.meta) != null ? r : null,
                                isFetching: true,
                                isPaused: false,
                                status: !t.dataUpdatedAt ? "loading" : t.status
                            });
                        case "success":
                            return Object(s["a"])({}, t, {
                                data: n.data,
                                dataUpdateCount: t.dataUpdateCount + 1,
                                dataUpdatedAt: (i = n.dataUpdatedAt) != null ? i : Date.now(),
                                error: null,
                                fetchFailureCount: 0,
                                isFetching: false,
                                isInvalidated: false,
                                isPaused: false,
                                status: "success"
                            });
                        case "error":
                            var o = n.error;
                            if (Object(a["c"])(o) && o.revert) {
                                var u;
                                if (!t.dataUpdatedAt && !t.errorUpdatedAt) {
                                    u = "idle"
                                } else if (t.dataUpdatedAt > t.errorUpdatedAt) {
                                    u = "success"
                                } else {
                                    u = "error"
                                }
                                return Object(s["a"])({}, t, {
                                    fetchFailureCount: 0,
                                    isFetching: false,
                                    isPaused: false,
                                    status: u
                                })
                            }
                            return Object(s["a"])({}, t, {
                                error: o,
                                errorUpdateCount: t.errorUpdateCount + 1,
                                errorUpdatedAt: Date.now(),
                                fetchFailureCount: t.fetchFailureCount + 1,
                                isFetching: false,
                                isPaused: false,
                                status: "error"
                            });
                        case "invalidate":
                            return Object(s["a"])({}, t, {
                                isInvalidated: true
                            });
                        case "setState":
                            return Object(s["a"])({}, t, n.state);
                        default:
                            return t
                    }
                };
                return e
            }();
            var l = n("./node_modules/react-query/es/core/subscribable.js");
            n.d(t, "a", (function() {
                return f
            }));
            var f = function(e) {
                Object(r["a"])(t, e);

                function t(t) {
                    var n;
                    n = e.call(this) || this;
                    n.config = t || {};
                    n.queries = [];
                    n.queriesMap = {};
                    return n
                }
                var n = t.prototype;
                n.build = function e(t, n, r) {
                    var s;
                    var o = Object(i["c"])(n);
                    var u = n.queryKey;
                    var a = (s = n.queryHash) != null ? s : o(u);
                    var l = this.get(a);
                    if (!l) {
                        l = new c({
                            cache: this,
                            queryKey: u,
                            queryHash: a,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(u)
                        });
                        this.add(l)
                    }
                    return l
                };
                n.add = function e(t) {
                    if (!this.queriesMap[t.queryHash]) {
                        this.queriesMap[t.queryHash] = t;
                        this.queries.push(t);
                        this.notify(t)
                    }
                };
                n.remove = function e(t) {
                    var n = this.queriesMap[t.queryHash];
                    if (n) {
                        t.destroy();
                        this.queries = this.queries.filter((function(e) {
                            return e !== t
                        }));
                        if (n === t) {
                            delete this.queriesMap[t.queryHash]
                        }
                        this.notify(t)
                    }
                };
                n.clear = function e() {
                    var t = this;
                    o["a"].batch((function() {
                        t.queries.forEach((function(e) {
                            t.remove(e)
                        }))
                    }))
                };
                n.get = function e(t) {
                    return this.queriesMap[t]
                };
                n.getAll = function e() {
                    return this.queries
                };
                n.find = function e(t, n) {
                    var r = Object(i["j"])(t, n),
                        s = r[0];
                    return this.queries.find((function(e) {
                        return Object(i["h"])(s, e)
                    }))
                };
                n.findAll = function e(t, n) {
                    var r = Object(i["j"])(t, n),
                        s = r[0];
                    return s ? this.queries.filter((function(e) {
                        return Object(i["h"])(s, e)
                    })) : this.queries
                };
                n.notify = function e(t) {
                    var n = this;
                    o["a"].batch((function() {
                        n.listeners.forEach((function(e) {
                            e(t)
                        }))
                    }))
                };
                n.onFocus = function e() {
                    var t = this;
                    o["a"].batch((function() {
                        t.queries.forEach((function(e) {
                            e.onFocus()
                        }))
                    }))
                };
                n.onOnline = function e() {
                    var t = this;
                    o["a"].batch((function() {
                        t.queries.forEach((function(e) {
                            e.onOnline()
                        }))
                    }))
                };
                return t
            }(l["a"])
        },
        "./node_modules/react-query/es/core/queryClient.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var i = n("./node_modules/react-query/es/core/utils.js");
            var s = n("./node_modules/react-query/es/core/queryCache.js");
            var o = n("./node_modules/react-query/es/core/mutationCache.js");
            var u = n("./node_modules/react-query/es/core/focusManager.js");
            var a = n("./node_modules/react-query/es/core/onlineManager.js");
            var c = n("./node_modules/react-query/es/core/notifyManager.js");
            var l = n("./node_modules/react-query/es/core/retryer.js");

            function f() {
                return {
                    onFetch: function e(t) {
                        t.fetchFn = function() {
                            var e, n, r, i;
                            var s = (e = t.fetchOptions) == null ? void 0 : (n = e.meta) == null ? void 0 : n.fetchMore;
                            var o = s == null ? void 0 : s.pageParam;
                            var u = (s == null ? void 0 : s.direction) === "forward";
                            var a = (s == null ? void 0 : s.direction) === "backward";
                            var c = ((r = t.state.data) == null ? void 0 : r.pages) || [];
                            var f = ((i = t.state.data) == null ? void 0 : i.pageParams) || [];
                            var v = f;
                            var p = t.options.queryFn || function() {
                                return Promise.reject("Missing queryFn")
                            };
                            var y = function e(n, r, i, s) {
                                if (typeof i === "undefined" && !r && n.length) {
                                    return Promise.resolve(n)
                                }
                                var o = {
                                    queryKey: t.queryKey,
                                    pageParam: i
                                };
                                var u;
                                var a = p(o);
                                if (a.cancel) {
                                    u = a.cancel
                                }
                                var c = Promise.resolve(a).then((function(e) {
                                    v = s ? [i].concat(v) : [].concat(v, [i]);
                                    return s ? [e].concat(n) : [].concat(n, [e])
                                }));
                                if (u) {
                                    var l = c;
                                    l.cancel = u
                                }
                                return c
                            };
                            var m;
                            if (!c.length) {
                                m = y([])
                            } else if (u) {
                                var b = typeof o !== "undefined";
                                var w = b ? o : d(t.options, c);
                                m = y(c, b, w)
                            } else if (a) {
                                var g = typeof o !== "undefined";
                                var O = g ? o : h(t.options, c);
                                m = y(c, g, O, true)
                            } else {
                                (function() {
                                    v = [];
                                    var e = typeof t.options.getNextPageParam === "undefined";
                                    m = y([], e, f[0]);
                                    var n = function n(r) {
                                        m = m.then((function(n) {
                                            var i = e ? f[r] : d(t.options, n);
                                            return y(n, e, i)
                                        }))
                                    };
                                    for (var r = 1; r < c.length; r++) {
                                        n(r)
                                    }
                                })()
                            }
                            var j = m.then((function(e) {
                                return {
                                    pages: e,
                                    pageParams: v
                                }
                            }));
                            if (Object(l["b"])(m)) {
                                var C = j;
                                C.cancel = m.cancel
                            }
                            return j
                        }
                    }
                }
            }

            function d(e, t) {
                return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function h(e, t) {
                return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t)
            }

            function v(e, t) {
                if (e.getNextPageParam && Array.isArray(t)) {
                    var n = d(e, t);
                    return typeof n !== "undefined" && n !== null && n !== false
                }
            }

            function p(e, t) {
                if (e.getPreviousPageParam && Array.isArray(t)) {
                    var n = h(e, t);
                    return typeof n !== "undefined" && n !== null && n !== false
                }
            }
            n.d(t, "a", (function() {
                return y
            }));
            var y = function() {
                function e(e) {
                    if (e === void 0) {
                        e = {}
                    }
                    this.queryCache = e.queryCache || new s["a"];
                    this.mutationCache = e.mutationCache || new o["a"];
                    this.defaultOptions = e.defaultOptions || {};
                    this.queryDefaults = [];
                    this.mutationDefaults = []
                }
                var t = e.prototype;
                t.mount = function e() {
                    var t = this;
                    this.unsubscribeFocus = u["a"].subscribe((function() {
                        if (u["a"].isFocused() && a["a"].isOnline()) {
                            t.mutationCache.onFocus();
                            t.queryCache.onFocus()
                        }
                    }));
                    this.unsubscribeOnline = a["a"].subscribe((function() {
                        if (u["a"].isFocused() && a["a"].isOnline()) {
                            t.mutationCache.onOnline();
                            t.queryCache.onOnline()
                        }
                    }))
                };
                t.unmount = function e() {
                    var t, n;
                    (t = this.unsubscribeFocus) == null ? void 0 : t.call(this);
                    (n = this.unsubscribeOnline) == null ? void 0 : n.call(this)
                };
                t.isFetching = function e(t, n) {
                    var r = Object(i["j"])(t, n),
                        s = r[0];
                    s.fetching = true;
                    return this.queryCache.findAll(s).length
                };
                t.getQueryData = function e(t, n) {
                    var r;
                    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data
                };
                t.setQueryData = function e(t, n, r) {
                    var s = Object(i["l"])(t);
                    var o = this.defaultQueryOptions(s);
                    return this.queryCache.build(this, o).setData(n, r)
                };
                t.getQueryState = function e(t, n) {
                    var r;
                    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state
                };
                t.removeQueries = function e(t, n) {
                    var r = Object(i["j"])(t, n),
                        s = r[0];
                    var o = this.queryCache;
                    c["a"].batch((function() {
                        o.findAll(s).forEach((function(e) {
                            o.remove(e)
                        }))
                    }))
                };
                t.resetQueries = function e(t, n, s) {
                    var o = this;
                    var u = Object(i["j"])(t, n, s),
                        a = u[0],
                        l = u[1];
                    var f = this.queryCache;
                    var d = Object(r["a"])({}, a, {
                        active: true
                    });
                    return c["a"].batch((function() {
                        f.findAll(a).forEach((function(e) {
                            e.reset()
                        }));
                        return o.refetchQueries(d, l)
                    }))
                };
                t.cancelQueries = function e(t, n, r) {
                    var s = this;
                    var o = Object(i["j"])(t, n, r),
                        u = o[0],
                        a = o[1],
                        l = a === void 0 ? {} : a;
                    if (typeof l.revert === "undefined") {
                        l.revert = true
                    }
                    var f = c["a"].batch((function() {
                        return s.queryCache.findAll(u).map((function(e) {
                            return e.cancel(l)
                        }))
                    }));
                    return Promise.all(f).then(i["i"]).catch(i["i"])
                };
                t.invalidateQueries = function e(t, n, s) {
                    var o, u, a = this;
                    var l = Object(i["j"])(t, n, s),
                        f = l[0],
                        d = l[1];
                    var h = Object(r["a"])({}, f, {
                        active: (o = f.refetchActive) != null ? o : true,
                        inactive: (u = f.refetchInactive) != null ? u : false
                    });
                    return c["a"].batch((function() {
                        a.queryCache.findAll(f).forEach((function(e) {
                            e.invalidate()
                        }));
                        return a.refetchQueries(h, d)
                    }))
                };
                t.refetchQueries = function e(t, n, r) {
                    var s = this;
                    var o = Object(i["j"])(t, n, r),
                        u = o[0],
                        a = o[1];
                    var l = c["a"].batch((function() {
                        return s.queryCache.findAll(u).map((function(e) {
                            return e.fetch()
                        }))
                    }));
                    var f = Promise.all(l).then(i["i"]);
                    if (!(a == null ? void 0 : a.throwOnError)) {
                        f = f.catch(i["i"])
                    }
                    return f
                };
                t.fetchQuery = function e(t, n, r) {
                    var s = Object(i["l"])(t, n, r);
                    var o = this.defaultQueryOptions(s);
                    if (typeof o.retry === "undefined") {
                        o.retry = false
                    }
                    var u = this.queryCache.build(this, o);
                    return u.isStaleByTime(o.staleTime) ? u.fetch(o) : Promise.resolve(u.state.data)
                };
                t.prefetchQuery = function e(t, n, r) {
                    return this.fetchQuery(t, n, r).then(i["i"]).catch(i["i"])
                };
                t.fetchInfiniteQuery = function e(t, n, r) {
                    var s = Object(i["l"])(t, n, r);
                    s.behavior = f();
                    return this.fetchQuery(s)
                };
                t.prefetchInfiniteQuery = function e(t, n, r) {
                    return this.fetchInfiniteQuery(t, n, r).then(i["i"]).catch(i["i"])
                };
                t.cancelMutations = function e() {
                    var t = this;
                    var n = c["a"].batch((function() {
                        return t.mutationCache.getAll().map((function(e) {
                            return e.cancel()
                        }))
                    }));
                    return Promise.all(n).then(i["i"]).catch(i["i"])
                };
                t.resumePausedMutations = function e() {
                    return this.getMutationCache().resumePausedMutations()
                };
                t.executeMutation = function e(t) {
                    return this.mutationCache.build(this, t).execute()
                };
                t.getQueryCache = function e() {
                    return this.queryCache
                };
                t.getMutationCache = function e() {
                    return this.mutationCache
                };
                t.getDefaultOptions = function e() {
                    return this.defaultOptions
                };
                t.setDefaultOptions = function e(t) {
                    this.defaultOptions = t
                };
                t.setQueryDefaults = function e(t, n) {
                    var r = this.queryDefaults.find((function(e) {
                        return Object(i["e"])(t) === Object(i["e"])(e.queryKey)
                    }));
                    if (r) {
                        r.defaultOptions = n
                    } else {
                        this.queryDefaults.push({
                            queryKey: t,
                            defaultOptions: n
                        })
                    }
                };
                t.getQueryDefaults = function e(t) {
                    var n;
                    return t ? (n = this.queryDefaults.find((function(e) {
                        return Object(i["m"])(t, e.queryKey)
                    }))) == null ? void 0 : n.defaultOptions : undefined
                };
                t.setMutationDefaults = function e(t, n) {
                    var r = this.mutationDefaults.find((function(e) {
                        return Object(i["e"])(t) === Object(i["e"])(e.mutationKey)
                    }));
                    if (r) {
                        r.defaultOptions = n
                    } else {
                        this.mutationDefaults.push({
                            mutationKey: t,
                            defaultOptions: n
                        })
                    }
                };
                t.getMutationDefaults = function e(t) {
                    var n;
                    return t ? (n = this.mutationDefaults.find((function(e) {
                        return Object(i["m"])(t, e.mutationKey)
                    }))) == null ? void 0 : n.defaultOptions : undefined
                };
                t.defaultQueryOptions = function e(t) {
                    if (t == null ? void 0 : t._defaulted) {
                        return t
                    }
                    return Object(r["a"])({}, this.defaultOptions.queries, this.getQueryDefaults(t == null ? void 0 : t.queryKey), t, {
                        _defaulted: true
                    })
                };
                t.defaultQueryObserverOptions = function e(t) {
                    return this.defaultQueryOptions(t)
                };
                t.defaultMutationOptions = function e(t) {
                    if (t == null ? void 0 : t._defaulted) {
                        return t
                    }
                    return Object(r["a"])({}, this.defaultOptions.mutations, this.getMutationDefaults(t == null ? void 0 : t.mutationKey), t, {
                        _defaulted: true
                    })
                };
                t.clear = function e() {
                    this.queryCache.clear();
                    this.mutationCache.clear()
                };
                return e
            }()
        },
        "./node_modules/react-query/es/core/queryObserver.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var i = n("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
            var s = n("./node_modules/react-query/es/core/utils.js");
            var o = n("./node_modules/react-query/es/core/notifyManager.js");
            var u = n("./node_modules/react-query/es/core/focusManager.js");
            var a = n("./node_modules/react-query/es/core/subscribable.js");
            var c = function(e) {
                Object(i["a"])(t, e);

                function t(t, n) {
                    var r;
                    r = e.call(this) || this;
                    r.client = t;
                    r.options = n;
                    r.initialDataUpdateCount = 0;
                    r.initialErrorUpdateCount = 0;
                    r.trackedProps = [];
                    r.bindMethods();
                    r.setOptions(n);
                    return r
                }
                var n = t.prototype;
                n.bindMethods = function e() {
                    this.remove = this.remove.bind(this);
                    this.refetch = this.refetch.bind(this)
                };
                n.onSubscribe = function e() {
                    if (this.listeners.length === 1) {
                        this.updateQuery();
                        this.currentQuery.addObserver(this);
                        if (this.willFetchOnMount()) {
                            this.executeFetch()
                        }
                        this.updateTimers()
                    }
                };
                n.onUnsubscribe = function e() {
                    if (!this.listeners.length) {
                        this.destroy()
                    }
                };
                n.willLoadOnMount = function e() {
                    return this.options.enabled !== false && !this.currentQuery.state.dataUpdatedAt && !(this.currentQuery.state.status === "error" && this.options.retryOnMount === false)
                };
                n.willRefetchOnMount = function e() {
                    return this.options.enabled !== false && this.currentQuery.state.dataUpdatedAt > 0 && (this.options.refetchOnMount === "always" || this.options.refetchOnMount !== false && this.isStale())
                };
                n.willFetchOnMount = function e() {
                    return this.willLoadOnMount() || this.willRefetchOnMount()
                };
                n.willFetchOnReconnect = function e() {
                    return this.options.enabled !== false && (this.options.refetchOnReconnect === "always" || this.options.refetchOnReconnect !== false && this.isStale())
                };
                n.willFetchOnWindowFocus = function e() {
                    return this.options.enabled !== false && (this.options.refetchOnWindowFocus === "always" || this.options.refetchOnWindowFocus !== false && this.isStale())
                };
                n.willFetchOptionally = function e() {
                    return this.options.enabled !== false && this.isStale()
                };
                n.isStale = function e() {
                    return this.currentQuery.isStaleByTime(this.options.staleTime)
                };
                n.destroy = function e() {
                    this.listeners = [];
                    this.clearTimers();
                    this.currentQuery.removeObserver(this)
                };
                n.setOptions = function e(t) {
                    var n = this.options;
                    var r = this.currentQuery;
                    this.options = this.client.defaultQueryObserverOptions(t);
                    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
                        throw new Error("Expected enabled to be a boolean")
                    }
                    if (!this.options.queryKey) {
                        this.options.queryKey = n.queryKey
                    }
                    this.updateQuery();
                    if (!this.listeners.length) {
                        return
                    }
                    if (this.currentQuery !== r) {
                        this.optionalFetch();
                        this.updateTimers();
                        return
                    }
                    if (this.options.enabled !== false && n.enabled === false) {
                        this.optionalFetch()
                    }
                    if (this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) {
                        this.updateStaleTimeout()
                    }
                    if (this.options.enabled !== n.enabled || this.options.refetchInterval !== n.refetchInterval) {
                        this.updateRefetchInterval()
                    }
                };
                n.getCurrentResult = function e() {
                    return this.currentResult
                };
                n.getTrackedCurrentResult = function e() {
                    return this.trackedCurrentResult
                };
                n.getNextResult = function e(t) {
                    var n = this;
                    return new Promise((function(e, r) {
                        var i = n.subscribe((function(n) {
                            if (!n.isFetching) {
                                i();
                                if (n.isError && (t == null ? void 0 : t.throwOnError)) {
                                    r(n.error)
                                } else {
                                    e(n)
                                }
                            }
                        }))
                    }))
                };
                n.getCurrentQuery = function e() {
                    return this.currentQuery
                };
                n.remove = function e() {
                    this.client.getQueryCache().remove(this.currentQuery)
                };
                n.refetch = function e(t) {
                    return this.fetch(t)
                };
                n.fetch = function e(t) {
                    var n = this;
                    return this.executeFetch(t).then((function() {
                        n.updateResult();
                        return n.currentResult
                    }))
                };
                n.optionalFetch = function e() {
                    if (this.willFetchOptionally()) {
                        this.executeFetch()
                    }
                };
                n.executeFetch = function e(t) {
                    this.updateQuery();
                    var n = this.currentQuery.fetch(this.options, t);
                    if (!(t == null ? void 0 : t.throwOnError)) {
                        n = n.catch(s["i"])
                    }
                    return n
                };
                n.updateStaleTimeout = function e() {
                    var t = this;
                    this.clearStaleTimeout();
                    if (s["f"] || this.currentResult.isStale || !Object(s["g"])(this.options.staleTime)) {
                        return
                    }
                    var n = Object(s["r"])(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    var r = n + 1;
                    this.staleTimeoutId = setTimeout((function() {
                        if (!t.currentResult.isStale) {
                            var e = t.currentResult;
                            t.updateResult();
                            t.notify({
                                listeners: t.shouldNotifyListeners(e, t.currentResult),
                                cache: true
                            })
                        }
                    }), r)
                };
                n.updateRefetchInterval = function e() {
                    var t = this;
                    this.clearRefetchInterval();
                    if (s["f"] || this.options.enabled === false || !Object(s["g"])(this.options.refetchInterval)) {
                        return
                    }
                    this.refetchIntervalId = setInterval((function() {
                        if (t.options.refetchIntervalInBackground || u["a"].isFocused()) {
                            t.executeFetch()
                        }
                    }), this.options.refetchInterval)
                };
                n.updateTimers = function e() {
                    this.updateStaleTimeout();
                    this.updateRefetchInterval()
                };
                n.clearTimers = function e() {
                    this.clearStaleTimeout();
                    this.clearRefetchInterval()
                };
                n.clearStaleTimeout = function e() {
                    clearTimeout(this.staleTimeoutId);
                    this.staleTimeoutId = undefined
                };
                n.clearRefetchInterval = function e() {
                    clearInterval(this.refetchIntervalId);
                    this.refetchIntervalId = undefined
                };
                n.getNewResult = function e(t) {
                    var n;
                    var i = this.currentQuery.state;
                    var o = i.isFetching,
                        u = i.status;
                    var a = false;
                    var c = false;
                    var l;
                    var f = i.dataUpdatedAt;
                    if (t) {
                        o = true;
                        if (!f) {
                            u = "loading"
                        }
                    }
                    if (this.options.keepPreviousData && !i.dataUpdateCount && ((n = this.previousQueryResult) == null ? void 0 : n.isSuccess) && u !== "error") {
                        l = this.previousQueryResult.data;
                        f = this.previousQueryResult.dataUpdatedAt;
                        u = this.previousQueryResult.status;
                        a = true
                    } else if (this.options.select && typeof i.data !== "undefined") {
                        var d;
                        if (this.currentResult && i.data === ((d = this.currentResultState) == null ? void 0 : d.data)) {
                            l = this.currentResult.data
                        } else {
                            l = this.options.select(i.data);
                            if (this.options.structuralSharing !== false) {
                                var h;
                                l = Object(s["n"])((h = this.currentResult) == null ? void 0 : h.data, l)
                            }
                        }
                    } else {
                        l = i.data
                    }
                    if (typeof this.options.placeholderData !== "undefined" && typeof l === "undefined" && u === "loading") {
                        var v = typeof this.options.placeholderData === "function" ? this.options.placeholderData() : this.options.placeholderData;
                        if (typeof v !== "undefined") {
                            u = "success";
                            l = v;
                            c = true
                        }
                    }
                    var p = Object(r["a"])({}, Object(s["d"])(u), {
                        data: l,
                        dataUpdatedAt: f,
                        error: i.error,
                        errorUpdatedAt: i.errorUpdatedAt,
                        failureCount: i.fetchFailureCount,
                        isFetched: i.dataUpdateCount > 0 || i.errorUpdateCount > 0,
                        isFetchedAfterMount: i.dataUpdateCount > this.initialDataUpdateCount || i.errorUpdateCount > this.initialErrorUpdateCount,
                        isFetching: o,
                        isLoadingError: u === "error" && i.dataUpdatedAt === 0,
                        isPlaceholderData: c,
                        isPreviousData: a,
                        isRefetchError: u === "error" && i.dataUpdatedAt !== 0,
                        isStale: this.isStale(),
                        refetch: this.refetch,
                        remove: this.remove
                    });
                    return p
                };
                n.shouldNotifyListeners = function e(t, n) {
                    var r = this;
                    var i = this.options,
                        s = i.notifyOnChangeProps,
                        o = i.notifyOnChangePropsExclusions;
                    if (t === n) {
                        return false
                    }
                    if (!s && !o) {
                        return true
                    }
                    var u = Object.keys(n);
                    var a = s === "tracked" ? this.trackedProps : s;
                    var c = function e(i) {
                        var c = u[i];
                        var l = t[c] !== n[c];
                        var f = a == null ? void 0 : a.some((function(e) {
                            return e === c
                        }));
                        var d = o == null ? void 0 : o.some((function(e) {
                            return e === c
                        }));
                        if (l) {
                            if (o && d) {
                                return "continue"
                            }
                            if (!s || f || s === "tracked" && r.trackedProps.length === 0) {
                                return {
                                    v: true
                                }
                            }
                        }
                    };
                    for (var l = 0; l < u.length; l++) {
                        var f = c(l);
                        if (f === "continue") continue;
                        if (typeof f === "object") return f.v
                    }
                    return false
                };
                n.updateResult = function e(t) {
                    var n = this;
                    var r = this.getNewResult(t);
                    this.currentResultState = this.currentQuery.state;
                    if (!Object(s["p"])(r, this.currentResult)) {
                        this.currentResult = r;
                        if (this.options.notifyOnChangeProps === "tracked") {
                            var i = function e(t) {
                                if (!n.trackedProps.includes(t)) {
                                    n.trackedProps.push(t)
                                }
                            };
                            this.trackedCurrentResult = {};
                            Object.keys(r).forEach((function(e) {
                                Object.defineProperty(n.trackedCurrentResult, e, {
                                    configurable: false,
                                    enumerable: true,
                                    get: function t() {
                                        i(e);
                                        return r[e]
                                    }
                                })
                            }))
                        }
                    }
                };
                n.updateQuery = function e() {
                    var t = this.currentQuery;
                    var n = this.client.getQueryCache().build(this.client, this.options);
                    if (n === t) {
                        return
                    }
                    this.previousQueryResult = this.currentResult;
                    this.currentQuery = n;
                    this.initialDataUpdateCount = n.state.dataUpdateCount;
                    this.initialErrorUpdateCount = n.state.errorUpdateCount;
                    var r = t ? this.willFetchOptionally() : this.willFetchOnMount();
                    this.updateResult(r);
                    if (!this.hasListeners()) {
                        return
                    }
                    t == null ? void 0 : t.removeObserver(this);
                    this.currentQuery.addObserver(this);
                    if (this.shouldNotifyListeners(this.previousQueryResult, this.currentResult)) {
                        this.notify({
                            listeners: true
                        })
                    }
                };
                n.onQueryUpdate = function e(t) {
                    var n = this.currentResult;
                    this.updateResult();
                    var r = this.currentResult;
                    this.updateTimers();
                    if (n === r) {
                        return
                    }
                    var i = {};
                    if (t.type === "success") {
                        i.onSuccess = true
                    } else if (t.type === "error") {
                        i.onError = true
                    }
                    if (this.shouldNotifyListeners(n, r)) {
                        i.listeners = true
                    }
                    this.notify(i)
                };
                n.notify = function e(t) {
                    var n = this;
                    o["a"].batch((function() {
                        if (t.onSuccess) {
                            n.options.onSuccess == null ? void 0 : n.options.onSuccess(n.currentResult.data);
                            n.options.onSettled == null ? void 0 : n.options.onSettled(n.currentResult.data, null)
                        } else if (t.onError) {
                            n.options.onError == null ? void 0 : n.options.onError(n.currentResult.error);
                            n.options.onSettled == null ? void 0 : n.options.onSettled(undefined, n.currentResult.error)
                        }
                        if (t.listeners) {
                            n.listeners.forEach((function(e) {
                                e(n.currentResult)
                            }))
                        }
                        if (t.cache) {
                            n.client.getQueryCache().notify(n.currentQuery)
                        }
                    }))
                };
                return t
            }(a["a"])
        },
        "./node_modules/react-query/es/core/retryer.js": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            }));
            n.d(t, "c", (function() {
                return c
            }));
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("./node_modules/react-query/es/core/focusManager.js");
            var i = n("./node_modules/react-query/es/core/onlineManager.js");
            var s = n("./node_modules/react-query/es/core/utils.js");

            function o(e) {
                return Math.min(1e3 * Math.pow(2, e), 3e4)
            }

            function u(e) {
                return typeof(e == null ? void 0 : e.cancel) === "function"
            }
            var a = function e(t) {
                this.revert = t == null ? void 0 : t.revert;
                this.silent = t == null ? void 0 : t.silent
            };

            function c(e) {
                return e instanceof a
            }
            var l = function e(t) {
                var n = this;
                var c = false;
                var l;
                var f;
                var d;
                var h;
                this.cancel = function(e) {
                    return l == null ? void 0 : l(e)
                };
                this.cancelRetry = function() {
                    c = true
                };
                this.continue = function() {
                    return f == null ? void 0 : f()
                };
                this.failureCount = 0;
                this.isPaused = false;
                this.isResolved = false;
                this.isTransportCancelable = false;
                this.promise = new Promise((function(e, t) {
                    d = e;
                    h = t
                }));
                var v = function e(t) {
                    n.isResolved = true;
                    f == null ? void 0 : f();
                    d(t)
                };
                var p = function e(t) {
                    n.isResolved = true;
                    f == null ? void 0 : f();
                    h(t)
                };
                var y = function e() {
                    return new Promise((function(e) {
                        f = e;
                        n.isPaused = true;
                        t.onPause == null ? void 0 : t.onPause()
                    })).then((function() {
                        f = undefined;
                        n.isPaused = false;
                        t.onContinue == null ? void 0 : t.onContinue()
                    }))
                };
                var m = function e() {
                    if (n.isResolved) {
                        return
                    }
                    var f;
                    try {
                        f = t.fn()
                    } catch (e) {
                        f = Promise.reject(e)
                    }
                    l = function e(t) {
                        p(new a(t));
                        if (u(f)) {
                            try {
                                f.cancel()
                            } catch (e) {}
                        }
                    };
                    n.isTransportCancelable = u(f);
                    Promise.resolve(f).then(v).catch((function(u) {
                        var a, l;
                        if (n.isResolved) {
                            return
                        }
                        var f = (a = t.retry) != null ? a : 3;
                        var d = (l = t.retryDelay) != null ? l : o;
                        var h = Object(s["b"])(d, n.failureCount) || 0;
                        var v = f === true || typeof f === "number" && n.failureCount < f || typeof f === "function" && f(n.failureCount, u);
                        if (c || !v) {
                            p(u);
                            return
                        }
                        n.failureCount++;
                        t.onFail == null ? void 0 : t.onFail(n.failureCount, u);
                        Object(s["q"])(h).then((function() {
                            if (!r["a"].isFocused() || !i["a"].isOnline()) {
                                return y()
                            }
                        })).then((function() {
                            if (c) {
                                p(u)
                            } else {
                                e()
                            }
                        }))
                    }))
                };
                m()
            }
        },
        "./node_modules/react-query/es/core/subscribable.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function e() {
                    this.listeners = []
                }
                var t = e.prototype;
                t.subscribe = function e(t) {
                    var n = this;
                    var r = t || function() {
                        return undefined
                    };
                    this.listeners.push(r);
                    this.onSubscribe();
                    return function() {
                        n.listeners = n.listeners.filter((function(e) {
                            return e !== r
                        }));
                        n.onUnsubscribe()
                    }
                };
                t.hasListeners = function e() {
                    return this.listeners.length > 0
                };
                t.onSubscribe = function e() {};
                t.onUnsubscribe = function e() {};
                return e
            }()
        },
        "./node_modules/react-query/es/core/types.js": function(e, t) {},
        "./node_modules/react-query/es/core/utils.js": function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return i
            }));
            n.d(t, "i", (function() {
                return s
            }));
            n.d(t, "b", (function() {
                return o
            }));
            n.d(t, "g", (function() {
                return u
            }));
            n.d(t, "a", (function() {
                return a
            }));
            n.d(t, "r", (function() {
                return f
            }));
            n.d(t, "l", (function() {
                return d
            }));
            n.d(t, "k", (function() {
                return h
            }));
            n.d(t, "j", (function() {
                return v
            }));
            n.d(t, "h", (function() {
                return p
            }));
            n.d(t, "c", (function() {
                return y
            }));
            n.d(t, "e", (function() {
                return m
            }));
            n.d(t, "m", (function() {
                return w
            }));
            n.d(t, "n", (function() {
                return O
            }));
            n.d(t, "p", (function() {
                return j
            }));
            n.d(t, "q", (function() {
                return x
            }));
            n.d(t, "d", (function() {
                return E
            }));
            n.d(t, "o", (function() {
                return F
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var i = typeof window === "undefined";

            function s() {
                return undefined
            }

            function o(e, t) {
                return typeof e === "function" ? e(t) : e
            }

            function u(e) {
                return typeof e === "number" && e >= 0 && e !== Infinity
            }

            function a(e) {
                return Array.isArray(e) ? e : [e]
            }

            function c(e, t) {
                return e.filter((function(e) {
                    return t.indexOf(e) === -1
                }))
            }

            function l(e, t, n) {
                var r = e.slice(0);
                r[t] = n;
                return r
            }

            function f(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function d(e, t, n) {
                if (!q(e)) {
                    return e
                }
                if (typeof t === "function") {
                    return Object(r["a"])({}, n, {
                        queryKey: e,
                        queryFn: t
                    })
                }
                return Object(r["a"])({}, t, {
                    queryKey: e
                })
            }

            function h(e, t, n) {
                if (q(e)) {
                    if (typeof t === "function") {
                        return Object(r["a"])({}, n, {
                            mutationKey: e,
                            mutationFn: t
                        })
                    }
                    return Object(r["a"])({}, t, {
                        mutationKey: e
                    })
                }
                if (typeof e === "function") {
                    return Object(r["a"])({}, t, {
                        mutationFn: e
                    })
                }
                return Object(r["a"])({}, e)
            }

            function v(e, t, n) {
                return q(e) ? [Object(r["a"])({}, t, {
                    queryKey: e
                }), n] : [e || {}, t]
            }

            function p(e, t) {
                var n = e.active,
                    r = e.exact,
                    i = e.fetching,
                    s = e.inactive,
                    o = e.predicate,
                    u = e.queryKey,
                    a = e.stale;
                if (q(u)) {
                    if (r) {
                        var c = y(t.options);
                        if (t.queryHash !== c(u)) {
                            return false
                        }
                    } else if (!w(t.queryKey, u)) {
                        return false
                    }
                }
                var l;
                if (s === false || n && !s) {
                    l = true
                } else if (n === false || s && !n) {
                    l = false
                }
                if (typeof l === "boolean" && t.isActive() !== l) {
                    return false
                }
                if (typeof a === "boolean" && t.isStale() !== a) {
                    return false
                }
                if (typeof i === "boolean" && t.isFetching() !== i) {
                    return false
                }
                if (o && !o(t)) {
                    return false
                }
                return true
            }

            function y(e) {
                return (e == null ? void 0 : e.queryKeyHashFn) || m
            }

            function m(e) {
                return b(e)
            }

            function b(e) {
                return JSON.stringify(e, (function(e, t) {
                    return C(t) ? Object.keys(t).sort().reduce((function(e, n) {
                        e[n] = t[n];
                        return e
                    }), {}) : t
                }))
            }

            function w(e, t) {
                return g(a(e), a(t))
            }

            function g(e, t) {
                if (e === t) {
                    return true
                }
                if (typeof e !== typeof t) {
                    return false
                }
                if (e && t && typeof e === "object" && typeof t === "object") {
                    return !Object.keys(t).some((function(n) {
                        return !g(e[n], t[n])
                    }))
                }
                return false
            }

            function O(e, t) {
                if (e === t) {
                    return e
                }
                var n = Array.isArray(e) && Array.isArray(t);
                if (n || C(e) && C(t)) {
                    var r = n ? e.length : Object.keys(e).length;
                    var i = n ? t : Object.keys(t);
                    var s = i.length;
                    var o = n ? [] : {};
                    var u = 0;
                    for (var a = 0; a < s; a++) {
                        var c = n ? a : i[a];
                        o[c] = O(e[c], t[c]);
                        if (o[c] === e[c]) {
                            u++
                        }
                    }
                    return r === s && u === r ? e : o
                }
                return t
            }

            function j(e, t) {
                if (e && !t || t && !e) {
                    return false
                }
                for (var n in e) {
                    if (e[n] !== t[n]) {
                        return false
                    }
                }
                return true
            }

            function C(e) {
                if (!R(e)) {
                    return false
                }
                var t = e.constructor;
                if (typeof t === "undefined") {
                    return true
                }
                var n = t.prototype;
                if (!R(n)) {
                    return false
                }
                if (!n.hasOwnProperty("isPrototypeOf")) {
                    return false
                }
                return true
            }

            function R(e) {
                return Object.prototype.toString.call(e) === "[object Object]"
            }

            function q(e) {
                return typeof e === "string" || Array.isArray(e)
            }

            function S(e) {
                return e instanceof Error
            }

            function x(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }

            function E(e) {
                return {
                    status: e,
                    isLoading: e === "loading",
                    isSuccess: e === "success",
                    isError: e === "error",
                    isIdle: e === "idle"
                }
            }

            function F(e) {
                Promise.resolve().then(e).catch((function(e) {
                    return setTimeout((function() {
                        throw e
                    }))
                }))
            }
        },
        "./node_modules/react-query/es/index.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react-query/es/core/index.js");
            if (n.o(r, "QueryClient")) n.d(t, "QueryClient", (function() {
                return r["QueryClient"]
            }));
            if (n.o(r, "QueryClientProvider")) n.d(t, "QueryClientProvider", (function() {
                return r["QueryClientProvider"]
            }));
            if (n.o(r, "useMutation")) n.d(t, "useMutation", (function() {
                return r["useMutation"]
            }));
            if (n.o(r, "useQuery")) n.d(t, "useQuery", (function() {
                return r["useQuery"]
            }));
            var i = n("./node_modules/react-query/es/react/index.js");
            if (n.o(i, "QueryClient")) n.d(t, "QueryClient", (function() {
                return i["QueryClient"]
            }));
            if (n.o(i, "QueryClientProvider")) n.d(t, "QueryClientProvider", (function() {
                return i["QueryClientProvider"]
            }));
            if (n.o(i, "useMutation")) n.d(t, "useMutation", (function() {
                return i["useMutation"]
            }));
            if (n.o(i, "useQuery")) n.d(t, "useQuery", (function() {
                return i["useQuery"]
            }))
        },
        "./node_modules/react-query/es/react/QueryClientProvider.js": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            }));
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("./node_modules/react/index.js");
            var i = n.n(r);
            var s = function() {
                var e = i.a.createContext(undefined);
                if (typeof window !== "undefined") {
                    window.ReactQueryClientContext = e
                }
                return e
            }();

            function o() {
                var e;
                return typeof window !== "undefined" ? (e = window.ReactQueryClientContext) != null ? e : s : s
            }
            var u = function e() {
                var t = i.a.useContext(o());
                if (!t) {
                    throw new Error("No QueryClient set, use QueryClientProvider to set one")
                }
                return t
            };
            var a = function e(t) {
                var n = t.client,
                    r = t.children;
                i.a.useEffect((function() {
                    n.mount();
                    return function() {
                        n.unmount()
                    }
                }), [n]);
                var s = o();
                return i.a.createElement(s.Provider, {
                    value: n
                }, r)
            }
        },
        "./node_modules/react-query/es/react/QueryErrorResetBoundary.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("./node_modules/react/index.js");
            var i = n.n(r);

            function s() {
                var e = false;
                return {
                    clearReset: function t() {
                        e = false
                    },
                    reset: function t() {
                        e = true
                    },
                    isReset: function t() {
                        return e
                    }
                }
            }
            var o = i.a.createContext(s());
            var u = function e() {
                return i.a.useContext(o)
            };
            var a = function e(t) {
                var n = t.children;
                var r = i.a.useMemo((function() {
                    return s()
                }), []);
                return i.a.createElement(o.Provider, {
                    value: r
                }, typeof n === "function" ? n(r) : n)
            }
        },
        "./node_modules/react-query/es/react/index.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react-query/es/react/setBatchUpdatesFn.js");
            var i = n("./node_modules/react-query/es/react/setLogger.js");
            var s = n("./node_modules/react-query/es/react/QueryClientProvider.js");
            n.d(t, "QueryClientProvider", (function() {
                return s["a"]
            }));
            var o = n("./node_modules/react-query/es/react/useMutation.js");
            n.d(t, "useMutation", (function() {
                return o["a"]
            }));
            var u = n("./node_modules/react-query/es/react/useQuery.js");
            n.d(t, "useQuery", (function() {
                return u["a"]
            }));
            var a = n("./node_modules/react-query/es/react/types.js");
            var c = n.n(a);
            if (n.o(a, "QueryClient")) n.d(t, "QueryClient", (function() {
                return a["QueryClient"]
            }))
        },
        "./node_modules/react-query/es/react/setBatchUpdatesFn.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react-query/es/core/notifyManager.js");
            var i = n("./node_modules/react-dom/index.js");
            var s = n.n(i);
            var o = s.a.unstable_batchedUpdates;
            r["a"].setBatchNotifyFunction(o)
        },
        "./node_modules/react-query/es/react/setLogger.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react-query/es/core/logger.js");
            var i = console;
            if (i) {
                Object(r["b"])(i)
            }
        },
        "./node_modules/react-query/es/react/types.js": function(e, t) {},
        "./node_modules/react-query/es/react/useMutation.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js");
            var i = n("./node_modules/react/index.js");
            var s = n.n(i);
            var o = n("./node_modules/react-query/es/core/notifyManager.js");
            var u = n("./node_modules/react-query/es/core/utils.js");
            var a = n("./node_modules/react-query/es/core/mutationObserver.js");
            var c = n("./node_modules/react-query/es/react/QueryClientProvider.js");

            function l(e, t, n) {
                var i = Object(u["k"])(e, t, n);
                var l = Object(c["b"])();
                var f = s.a.useRef();
                var d = f.current || new a["a"](l, i);
                f.current = d;
                if (d.hasListeners()) {
                    d.setOptions(i)
                }
                var h = s.a.useState((function() {
                        return d.getCurrentResult()
                    })),
                    v = h[0],
                    p = h[1];
                s.a.useEffect((function() {
                    return d.subscribe(o["a"].batchCalls((function(e) {
                        if (d.hasListeners()) {
                            p(e)
                        }
                    })))
                }), [d]);
                var y = s.a.useCallback((function(e, t) {
                    d.mutate(e, t).catch(u["i"])
                }), [d]);
                if (v.error && d.options.useErrorBoundary) {
                    throw v.error
                }
                return Object(r["a"])({}, v, {
                    mutate: y,
                    mutateAsync: v.mutate
                })
            }
        },
        "./node_modules/react-query/es/react/useQuery.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react-query/es/core/queryObserver.js");
            var i = n("./node_modules/react-query/es/core/utils.js");
            var s = n("./node_modules/react/index.js");
            var o = n.n(s);
            var u = n("./node_modules/react-query/es/core/notifyManager.js");
            var a = n("./node_modules/react-query/es/react/QueryErrorResetBoundary.js");
            var c = n("./node_modules/react-query/es/react/QueryClientProvider.js");

            function l(e, t) {
                var n = Object(c["b"])();
                var r = Object(a["a"])();
                var i = n.defaultQueryObserverOptions(e);
                if (i.onError) {
                    i.onError = u["a"].batchCalls(i.onError)
                }
                if (i.onSuccess) {
                    i.onSuccess = u["a"].batchCalls(i.onSuccess)
                }
                if (i.onSettled) {
                    i.onSettled = u["a"].batchCalls(i.onSettled)
                }
                if (i.suspense) {
                    if (typeof i.staleTime !== "number") {
                        i.staleTime = 1e3
                    }
                    if (!r.isReset()) {
                        i.retryOnMount = false
                    }
                }
                var s = o.a.useRef();
                var l = s.current || new t(n, i);
                s.current = l;
                if (l.hasListeners()) {
                    l.setOptions(i)
                }
                var f = l.getCurrentResult();
                var d = o.a.useState(f),
                    h = d[1];
                o.a.useEffect((function() {
                    r.clearReset();
                    return l.subscribe(u["a"].batchCalls(h))
                }), [l, r]);
                if (l.options.suspense || l.options.useErrorBoundary) {
                    if (l.options.suspense && f.isLoading) {
                        r.clearReset();
                        var v = l.subscribe();
                        throw l.refetch().finally(v)
                    }
                    if (f.isError) {
                        throw f.error
                    }
                }
                return l.options.notifyOnChangeProps === "tracked" ? l.getTrackedCurrentResult() : f
            }
            n.d(t, "a", (function() {
                return f
            }));

            function f(e, t, n) {
                var s = Object(i["l"])(e, t, n);
                return l(s, r["a"])
            }
        },
        "./node_modules/ua-parser-js/src/ua-parser.js": function(e, t, n) {
            var r;
            (function(i, s) {
                "use strict";
                var o = "0.7.24",
                    u = "",
                    a = "?",
                    c = "function",
                    l = "undefined",
                    f = "object",
                    d = "string",
                    h = "major",
                    v = "model",
                    p = "name",
                    y = "type",
                    m = "vendor",
                    b = "version",
                    w = "architecture",
                    g = "console",
                    O = "mobile",
                    j = "tablet",
                    C = "smarttv",
                    R = "wearable",
                    q = "embedded";
                var S = {
                    extend: function(e, t) {
                        var n = {};
                        for (var r in e) {
                            if (t[r] && t[r].length % 2 === 0) {
                                n[r] = t[r].concat(e[r])
                            } else {
                                n[r] = e[r]
                            }
                        }
                        return n
                    },
                    has: function(e, t) {
                        if (typeof e === "string") {
                            return t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                        } else {
                            return false
                        }
                    },
                    lowerize: function(e) {
                        return e.toLowerCase()
                    },
                    major: function(e) {
                        return typeof e === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : s
                    },
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                };
                var x = {
                    rgx: function(e, t) {
                        var n = 0,
                            r, i, o, u, a, l;
                        while (n < t.length && !a) {
                            var d = t[n],
                                h = t[n + 1];
                            r = i = 0;
                            while (r < d.length && !a) {
                                a = d[r++].exec(e);
                                if (!!a) {
                                    for (o = 0; o < h.length; o++) {
                                        l = a[++i];
                                        u = h[o];
                                        if (typeof u === f && u.length > 0) {
                                            if (u.length == 2) {
                                                if (typeof u[1] == c) {
                                                    this[u[0]] = u[1].call(this, l)
                                                } else {
                                                    this[u[0]] = u[1]
                                                }
                                            } else if (u.length == 3) {
                                                if (typeof u[1] === c && !(u[1].exec && u[1].test)) {
                                                    this[u[0]] = l ? u[1].call(this, l, u[2]) : s
                                                } else {
                                                    this[u[0]] = l ? l.replace(u[1], u[2]) : s
                                                }
                                            } else if (u.length == 4) {
                                                this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : s
                                            }
                                        } else {
                                            this[u] = l ? l : s
                                        }
                                    }
                                }
                            }
                            n += 2
                        }
                    },
                    str: function(e, t) {
                        for (var n in t) {
                            if (typeof t[n] === f && t[n].length > 0) {
                                for (var r = 0; r < t[n].length; r++) {
                                    if (S.has(t[n][r], e)) {
                                        return n === a ? s : n
                                    }
                                }
                            } else if (S.has(t[n], e)) {
                                return n === a ? s : n
                            }
                        }
                        return e
                    }
                };
                var E = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                };
                var F = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [p, b],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [p, "Opera Mini"], b
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [p, "Opera"], b
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                        [p, b],
                        [/(konqueror)\/([\w\.]+)/i],
                        [
                            [p, "Konqueror"], b
                        ],
                        [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
                        [
                            [p, "IE"], b
                        ],
                        [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                        [
                            [p, "Edge"], b
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [p, "Yandex"], b
                        ],
                        [/(Avast)\/([\w\.]+)/i],
                        [
                            [p, "Avast Secure Browser"], b
                        ],
                        [/(AVG)\/([\w\.]+)/i],
                        [
                            [p, "AVG Secure Browser"], b
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [p, "Puffin"], b
                        ],
                        [/(focus)\/([\w\.]+)/i],
                        [
                            [p, "Firefox Focus"], b
                        ],
                        [/(opt)\/([\w\.]+)/i],
                        [
                            [p, "Opera Touch"], b
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [p, "UCBrowser"], b
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [p, /_/g, " "], b
                        ],
                        [/(windowswechat qbcore)\/([\w\.]+)/i],
                        [
                            [p, "WeChat(Win) Desktop"], b
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [p, "WeChat"], b
                        ],
                        [/(brave)\/([\w\.]+)/i],
                        [
                            [p, "Brave"], b
                        ],
                        [/(whale)\/([\w\.]+)/i],
                        [
                            [p, "Whale"], b
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [p, b],
                        [/(QQ)\/([\d\.]+)/i],
                        [p, b],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [p, b],
                        [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                        [p, b],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [p, b],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [p],
                        [/(LBBROWSER)/i],
                        [p],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [b, [p, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [b, [p, "Facebook"]],
                        [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                        [
                            [p, "Facebook"]
                        ],
                        [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                        [p, b],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [b, [p, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [p, /(.+)/, "$1 WebView"], b
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [p, /(.+(?:g|us))(.+)/, "$1 $2"], b
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [b, [p, "Android Browser"]],
                        [/(coc_coc_browser)\/([\w\.]+)/i],
                        [
                            [p, "Coc Coc"], b
                        ],
                        [/(sailfishbrowser)\/([\w\.]+)/i],
                        [
                            [p, "Sailfish Browser"], b
                        ],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [p, b],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [p, "Dolphin"], b
                        ],
                        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                        [
                            [p, "360 Browser"]
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [p, "Chrome"], b
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [p, "Opera Coast"], b
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [b, [p, "Firefox"]],
                        [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                        [b, [p, "Mobile Safari"]],
                        [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                        [b, p],
                        [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [p, "GSA"], b
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [p, [b, x.str, E.browser.oldsafari.version]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [p, b],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [p, "Netscape"], b
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [p, b]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [w, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [w, S.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [w, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [w, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [w, /ower/, "", S.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [w, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [w, S.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                        [v, m, [y, j]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [v, [m, "Apple"],
                            [y, j]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [v, "Apple TV"],
                            [m, "Apple"],
                            [y, C]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [m, v, [y, j]],
                        [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
                        [v, [m, "Amazon"],
                            [y, j]
                        ],
                        [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                        [
                            [v, x.str, E.device.amazon.model],
                            [m, "Amazon"],
                            [y, O]
                        ],
                        [/android.+aft([\w])(\sbuild\/|\))/i],
                        [v, [m, "Amazon"],
                            [y, C]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [v, m, [y, O]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [v, [m, "Apple"],
                            [y, O]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [m, v, [y, O]],
                        [/\(bb10;\s(\w+)/i],
                        [v, [m, "BlackBerry"],
                            [y, O]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                        [v, [m, "Asus"],
                            [y, j]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [m, "Sony"],
                            [v, "Xperia Tablet"],
                            [y, j]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [v, [m, "Sony"],
                            [y, O]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [m, v, [y, g]],
                        [/android.+;\s(shield)\sbuild/i],
                        [v, [m, "Nvidia"],
                            [y, g]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [v, [m, "Sony"],
                            [y, g]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [m, x.str, E.device.sprint.vendor],
                            [v, x.str, E.device.sprint.model],
                            [y, O]
                        ],
                        [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [m, [v, /_/g, " "],
                            [y, O]
                        ],
                        [/(nexus\s9)/i],
                        [v, [m, "HTC"],
                            [y, j]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],
                        [v, [m, "Huawei"],
                            [y, O]
                        ],
                        [/android.+(bah2?-a?[lw]\d{2})/i],
                        [v, [m, "Huawei"],
                            [y, j]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [m, v, [y, O]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [v, [m, "Microsoft"],
                            [y, g]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [v, /\./g, " "],
                            [m, "Microsoft"],
                            [y, O]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [v, [m, "Motorola"],
                            [y, O]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [v, [m, "Motorola"],
                            [y, j]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [m, S.trim],
                            [v, S.trim],
                            [y, C]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [v, /^/, "SmartTV"],
                            [m, "Samsung"],
                            [y, C]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [v, [m, "Sharp"],
                            [y, C]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [m, "Samsung"], v, [y, j]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [m, [y, C], v],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [m, "Samsung"], v, [y, O]
                        ],
                        [/sie-(\w*)/i],
                        [v, [m, "Siemens"],
                            [y, O]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [m, "Nokia"], v, [y, O]
                        ],
                        [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [v, [m, "Acer"],
                            [y, j]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [v, [m, "LG"],
                            [y, j]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [m, "LG"], v, [y, j]
                        ],
                        [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
                        [
                            [m, "LG"], v, [y, C]
                        ],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [v, [m, "LG"],
                            [y, O]
                        ],
                        [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                        [m, v, [y, j]],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [v, [m, "Lenovo"],
                            [y, j]
                        ],
                        [/(lenovo)[_\s-]?([\w-]+)/i],
                        [m, v, [y, O]],
                        [/linux;.+((jolla));/i],
                        [m, v, [y, O]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [m, v, [y, R]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [m, v, [y, O]],
                        [/crkey/i],
                        [
                            [v, "Chromecast"],
                            [m, "Google"],
                            [y, C]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [v, [m, "Google"],
                            [y, R]
                        ],
                        [/android.+;\s(pixel c)[\s)]/i],
                        [v, [m, "Google"],
                            [y, j]
                        ],
                        [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
                        [v, [m, "Google"],
                            [y, O]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                        [
                            [v, /_/g, " "],
                            [m, "Xiaomi"],
                            [y, O]
                        ],
                        [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
                        [
                            [v, /_/g, " "],
                            [m, "Xiaomi"],
                            [y, j]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [v, [m, "Meizu"],
                            [y, O]
                        ],
                        [/(mz)-([\w-]{2,})/i],
                        [
                            [m, "Meizu"], v, [y, O]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                        [v, [m, "OnePlus"],
                            [y, O]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [v, [m, "RCA"],
                            [y, j]
                        ],
                        [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
                        [v, [m, "Dell"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [v, [m, "Verizon"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],
                        [
                            [m, "Barnes & Noble"], v, [y, j]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [v, [m, "NuVision"],
                            [y, j]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [v, [m, "ZTE"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [v, [m, "Swiss"],
                            [y, O]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [v, [m, "Swiss"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [v, [m, "Zeki"],
                            [y, j]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [m, "Dragon Touch"], v, [y, j]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [v, [m, "Insignia"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [v, [m, "NextBook"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [m, "Voice"], v, [y, O]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [m, "LvTel"], v, [y, O]
                        ],
                        [/android.+;\s(PH-1)\s/i],
                        [v, [m, "Essential"],
                            [y, O]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [v, [m, "Envizen"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [m, v, [y, j]],
                        [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
                        [v, [m, "MachSpeed"],
                            [y, j]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [m, v, [y, j]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [v, [m, "Rotor"],
                            [y, j]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [m, v, [y, j]],
                        [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                        [v, [y, O]],
                        [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                        [v, [y, j]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [y, S.lowerize], m, v
                        ],
                        [/[\s\/\(](smart-?tv)[;\)]/i],
                        [
                            [y, C]
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [v, [m, "Generic"]],
                        [/(phone)/i],
                        [
                            [y, O]
                        ]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [b, [p, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [b, [p, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [p, b],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [b, p]
                    ],
                    os: [
                        [/(xbox);\s+xbox\s([^\);]+)/i, /microsoft\s(windows)\s(vista|xp)/i],
                        [p, b],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [p, [b, x.str, E.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [p, "Windows"],
                            [b, x.str, E.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [p, "BlackBerry"], b
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                        [p, b],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [p, "Symbian"], b
                        ],
                        [/\((series40);/i],
                        [p],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [p, "Firefox OS"], b
                        ],
                        [/crkey\/([\d\.]+)/i],
                        [b, [p, "Chromecast"]],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [p, b],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [p, "Chromium OS"], b
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [p, "Solaris"], b
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [p, b],
                        [/(haiku)\s(\w+)/i],
                        [p, b],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [b, /_/g, "."],
                            [p, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [p, "Mac OS"],
                            [b, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [p, b]
                    ]
                };
                var Q = function(e, t) {
                    if (typeof e === "object") {
                        t = e;
                        e = s
                    }
                    if (!(this instanceof Q)) {
                        return new Q(e, t).getResult()
                    }
                    var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : u);
                    var r = t ? S.extend(F, t) : F;
                    this.getBrowser = function() {
                        var e = {
                            name: s,
                            version: s
                        };
                        x.rgx.call(e, n, r.browser);
                        e.major = S.major(e.version);
                        return e
                    };
                    this.getCPU = function() {
                        var e = {
                            architecture: s
                        };
                        x.rgx.call(e, n, r.cpu);
                        return e
                    };
                    this.getDevice = function() {
                        var e = {
                            vendor: s,
                            model: s,
                            type: s
                        };
                        x.rgx.call(e, n, r.device);
                        return e
                    };
                    this.getEngine = function() {
                        var e = {
                            name: s,
                            version: s
                        };
                        x.rgx.call(e, n, r.engine);
                        return e
                    };
                    this.getOS = function() {
                        var e = {
                            name: s,
                            version: s
                        };
                        x.rgx.call(e, n, r.os);
                        return e
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    };
                    this.getUA = function() {
                        return n
                    };
                    this.setUA = function(e) {
                        n = e;
                        return this
                    };
                    return this
                };
                Q.VERSION = o;
                Q.BROWSER = {
                    NAME: p,
                    MAJOR: h,
                    VERSION: b
                };
                Q.CPU = {
                    ARCHITECTURE: w
                };
                Q.DEVICE = {
                    MODEL: v,
                    VENDOR: m,
                    TYPE: y,
                    CONSOLE: g,
                    MOBILE: O,
                    SMARTTV: C,
                    TABLET: j,
                    WEARABLE: R,
                    EMBEDDED: q
                };
                Q.ENGINE = {
                    NAME: p,
                    VERSION: b
                };
                Q.OS = {
                    NAME: p,
                    VERSION: b
                };
                if (typeof t !== l) {
                    if (typeof e !== l && e.exports) {
                        t = e.exports = Q
                    }
                    t.UAParser = Q
                } else {
                    if (true) {
                        !(r = function() {
                            return Q
                        }.call(t, n, t, e), r !== s && (e.exports = r))
                    } else {}
                }
                var _ = i && (i.jQuery || i.Zepto);
                if (_ && !_.ua) {
                    var P = new Q;
                    _.ua = P.getResult();
                    _.ua.get = function() {
                        return P.getUA()
                    };
                    _.ua.set = function(e) {
                        P.setUA(e);
                        var t = P.getResult();
                        for (var n in t) {
                            _.ua[n] = t[n]
                        }
                    }
                }
            })(typeof window === "object" ? window : this)
        },
        "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/react/index.js");

            function i(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            var s = "function" === typeof Object.is ? Object.is : i,
                o = r.useState,
                u = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function l(e, t) {
                var n = t(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    s = r[1];
                a((function() {
                    i.value = n;
                    i.getSnapshot = t;
                    f(i) && s({
                        inst: i
                    })
                }), [e, n, t]);
                u((function() {
                    f(i) && s({
                        inst: i
                    });
                    return e((function() {
                        f(i) && s({
                            inst: i
                        })
                    }))
                }), [e]);
                c(n);
                return n
            }

            function f(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !s(e, n)
                } catch (e) {
                    return !0
                }
            }

            function d(e, t) {
                return t()
            }
            var h = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? d : l;
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : h
        },
        "./node_modules/use-sync-external-store/shim/index.js": function(e, t, n) {
            "use strict";
            if (true) {
                e.exports = n("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")
            } else {}
        }
    }
]);
//# sourceMappingURL=vendors~common-desktop-udlite-app~common-mobile-udlite-app~common-ufb-desktop-udlite-app~common-ufb-~d3dbf287.323328f1377e7ac20b80.js.map