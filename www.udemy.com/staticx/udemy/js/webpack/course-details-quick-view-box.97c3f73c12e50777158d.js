/*! For license information please see course-details-quick-view-box.97c3f73c12e50777158d.js.LICENSE.txt */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["course-details-quick-view-box"], {
        "./node_modules/@tanstack/react-query/build/lib/useQuery.esm.js": function(e, t, s) {
            "use strict";
            const r = typeof window === "undefined" || "Deno" in window;

            function o() {
                return undefined
            }

            function n(e, t) {
                return typeof e === "function" ? e(t) : e
            }

            function i(e) {
                return typeof e === "number" && e >= 0 && e !== Infinity
            }

            function a(e, t) {
                return e.filter((e => t.indexOf(e) === -1))
            }

            function c(e, t, s) {
                const r = e.slice(0);
                r[t] = s;
                return r
            }

            function u(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function l(e, t, s) {
                if (!E(e)) {
                    return e
                }
                if (typeof t === "function") {
                    return { ...s,
                        queryKey: e,
                        queryFn: t
                    }
                }
                return { ...t,
                    queryKey: e
                }
            }

            function d(e, t, s) {
                if (E(e)) {
                    if (typeof t === "function") {
                        return { ...s,
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

            function p(e, t, s) {
                return E(e) ? [{ ...t,
                    queryKey: e
                }, s] : [e || {}, t]
            }

            function h(e, t, s) {
                return E(e) ? [{ ...t,
                    mutationKey: e
                }, s] : [e || {}, t]
            }

            function m(e, t) {
                const {
                    type: s = "all",
                    exact: r,
                    fetchStatus: o,
                    predicate: n,
                    queryKey: i,
                    stale: a
                } = e;
                if (E(i)) {
                    if (r) {
                        if (t.queryHash !== b(i, t.options)) {
                            return false
                        }
                    } else if (!g(t.queryKey, i)) {
                        return false
                    }
                }
                if (s !== "all") {
                    const e = t.isActive();
                    if (s === "active" && !e) {
                        return false
                    }
                    if (s === "inactive" && e) {
                        return false
                    }
                }
                if (typeof a === "boolean" && t.isStale() !== a) {
                    return false
                }
                if (typeof o !== "undefined" && o !== t.state.fetchStatus) {
                    return false
                }
                if (n && !n(t)) {
                    return false
                }
                return true
            }

            function f(e, t) {
                const {
                    exact: s,
                    fetching: r,
                    predicate: o,
                    mutationKey: n
                } = e;
                if (E(n)) {
                    if (!t.options.mutationKey) {
                        return false
                    }
                    if (s) {
                        if (y(t.options.mutationKey) !== y(n)) {
                            return false
                        }
                    } else if (!g(t.options.mutationKey, n)) {
                        return false
                    }
                }
                if (typeof r === "boolean" && t.state.status === "loading" !== r) {
                    return false
                }
                if (o && !o(t)) {
                    return false
                }
                return true
            }

            function b(e, t) {
                const s = (t == null ? void 0 : t.queryKeyHashFn) || y;
                return s(e)
            }

            function y(e) {
                return JSON.stringify(e, ((e, t) => C(t) ? Object.keys(t).sort().reduce(((e, s) => {
                    e[s] = t[s];
                    return e
                }), {}) : t))
            }

            function g(e, t) {
                return v(e, t)
            }

            function v(e, t) {
                if (e === t) {
                    return true
                }
                if (typeof e !== typeof t) {
                    return false
                }
                if (e && t && typeof e === "object" && typeof t === "object") {
                    return !Object.keys(t).some((s => !v(e[s], t[s])))
                }
                return false
            }

            function j(e, t) {
                if (e === t) {
                    return e
                }
                const s = w(e) && w(t);
                if (s || C(e) && C(t)) {
                    const r = s ? e.length : Object.keys(e).length;
                    const o = s ? t : Object.keys(t);
                    const n = o.length;
                    const i = s ? [] : {};
                    let a = 0;
                    for (let r = 0; r < n; r++) {
                        const n = s ? r : o[r];
                        i[n] = j(e[n], t[n]);
                        if (i[n] === e[n]) {
                            a++
                        }
                    }
                    return r === n && a === r ? e : i
                }
                return t
            }

            function _(e, t) {
                if (e && !t || t && !e) {
                    return false
                }
                for (const s in e) {
                    if (e[s] !== t[s]) {
                        return false
                    }
                }
                return true
            }

            function w(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function C(e) {
                if (!O(e)) {
                    return false
                }
                const t = e.constructor;
                if (typeof t === "undefined") {
                    return true
                }
                const s = t.prototype;
                if (!O(s)) {
                    return false
                }
                if (!s.hasOwnProperty("isPrototypeOf")) {
                    return false
                }
                return true
            }

            function O(e) {
                return Object.prototype.toString.call(e) === "[object Object]"
            }

            function E(e) {
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

            function P(e) {
                x(0).then(e)
            }

            function T() {
                if (typeof AbortController === "function") {
                    return new AbortController
                }
                return
            }

            function I(e, t, s) {
                if (s.isDataEqual != null && s.isDataEqual(e, t)) {
                    return e
                } else if (typeof s.structuralSharing === "function") {
                    return s.structuralSharing(e, t)
                } else if (s.structuralSharing !== false) {
                    return j(e, t)
                }
                return t
            }

            function k() {
                let e = [];
                let t = 0;
                let s = e => {
                    e()
                };
                let r = e => {
                    e()
                };
                const o = e => {
                    let s;
                    t++;
                    try {
                        s = e()
                    } finally {
                        t--;
                        if (!t) {
                            a()
                        }
                    }
                    return s
                };
                const n = r => {
                    if (t) {
                        e.push(r)
                    } else {
                        P((() => {
                            s(r)
                        }))
                    }
                };
                const i = e => (...t) => {
                    n((() => {
                        e(...t)
                    }))
                };
                const a = () => {
                    const t = e;
                    e = [];
                    if (t.length) {
                        P((() => {
                            r((() => {
                                t.forEach((e => {
                                    s(e)
                                }))
                            }))
                        }))
                    }
                };
                const c = e => {
                    s = e
                };
                const u = e => {
                    r = e
                };
                return {
                    batch: o,
                    batchCalls: i,
                    schedule: n,
                    setNotifyFunction: c,
                    setBatchNotifyFunction: u
                }
            }
            const D = k();
            class R {
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
            class A extends R {
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
            const L = new A;
            class N extends R {
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
            const M = new N;

            function U(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function B(e) {
                return (e != null ? e : "online") === "online" ? M.isOnline() : true
            }
            class F {
                constructor(e) {
                    this.revert = e == null ? void 0 : e.revert;
                    this.silent = e == null ? void 0 : e.silent
                }
            }

            function q(e) {
                return e instanceof F
            }

            function H(e) {
                let t = false;
                let s = 0;
                let r = false;
                let o;
                let n;
                let i;
                const a = new Promise(((e, t) => {
                    n = e;
                    i = t
                }));
                const c = t => {
                    if (!r) {
                        h(new F(t));
                        e.abort == null ? void 0 : e.abort()
                    }
                };
                const u = () => {
                    t = true
                };
                const l = () => {
                    t = false
                };
                const d = () => !L.isFocused() || e.networkMode !== "always" && !M.isOnline();
                const p = t => {
                    if (!r) {
                        r = true;
                        e.onSuccess == null ? void 0 : e.onSuccess(t);
                        o == null ? void 0 : o();
                        n(t)
                    }
                };
                const h = t => {
                    if (!r) {
                        r = true;
                        e.onError == null ? void 0 : e.onError(t);
                        o == null ? void 0 : o();
                        i(t)
                    }
                };
                const m = () => new Promise((t => {
                    o = e => {
                        const s = r || !d();
                        if (s) {
                            t(e)
                        }
                        return s
                    };
                    e.onPause == null ? void 0 : e.onPause()
                })).then((() => {
                    o = undefined;
                    if (!r) {
                        e.onContinue == null ? void 0 : e.onContinue()
                    }
                }));
                const f = () => {
                    if (r) {
                        return
                    }
                    let o;
                    try {
                        o = e.fn()
                    } catch (e) {
                        o = Promise.reject(e)
                    }
                    Promise.resolve(o).then(p).catch((o => {
                        var n, i;
                        if (r) {
                            return
                        }
                        const a = (n = e.retry) != null ? n : 3;
                        const c = (i = e.retryDelay) != null ? i : U;
                        const u = typeof c === "function" ? c(s, o) : c;
                        const l = a === true || typeof a === "number" && s < a || typeof a === "function" && a(s, o);
                        if (t || !l) {
                            h(o);
                            return
                        }
                        s++;
                        e.onFail == null ? void 0 : e.onFail(s, o);
                        x(u).then((() => {
                            if (d()) {
                                return m()
                            }
                            return
                        })).then((() => {
                            if (t) {
                                h(o)
                            } else {
                                f()
                            }
                        }))
                    }))
                };
                if (B(e.networkMode)) {
                    f()
                } else {
                    m().then(f)
                }
                return {
                    promise: a,
                    cancel: c,
                    continue: () => {
                        const e = o == null ? void 0 : o();
                        return e ? a : Promise.resolve()
                    },
                    cancelRetry: u,
                    continueRetry: l
                }
            }
            class W extends R {
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
                        if (V(this.currentQuery, this.options)) {
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
                    return K(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return K(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = [];
                    this.clearStaleTimeout();
                    this.clearRefetchInterval();
                    this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    const s = this.options;
                    const r = this.currentQuery;
                    this.options = this.client.defaultQueryOptions(e);
                    if (false) {}
                    if (!_(s, this.options)) {
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
                        this.options.queryKey = s.queryKey
                    }
                    this.updateQuery();
                    const o = this.hasListeners();
                    if (o && Q(this.currentQuery, r, this.options, s)) {
                        this.executeFetch()
                    }
                    this.updateResult(t);
                    if (o && (this.currentQuery !== r || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime)) {
                        this.updateStaleTimeout()
                    }
                    const n = this.computeRefetchInterval();
                    if (o && (this.currentQuery !== r || this.options.enabled !== s.enabled || n !== this.currentRefetchInterval)) {
                        this.updateRefetchInterval(n)
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
                    Object.keys(e).forEach((s => {
                        Object.defineProperty(t, s, {
                            configurable: false,
                            enumerable: true,
                            get: () => {
                                this.trackedProps.add(s);
                                return e[s]
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
                    const s = this.client.getQueryCache().build(this.client, t);
                    s.isFetchingOptimistic = true;
                    return s.fetch().then((() => this.createResult(s, t)))
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
                        t = t.catch(o)
                    }
                    return t
                }
                updateStaleTimeout() {
                    this.clearStaleTimeout();
                    if (r || this.currentResult.isStale || !i(this.options.staleTime)) {
                        return
                    }
                    const e = u(this.currentResult.dataUpdatedAt, this.options.staleTime);
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
                    if (r || this.options.enabled === false || !i(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
                        return
                    }
                    this.refetchIntervalId = setInterval((() => {
                        if (this.options.refetchIntervalInBackground || L.isFocused()) {
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
                    const s = this.currentQuery;
                    const r = this.options;
                    const o = this.currentResult;
                    const n = this.currentResultState;
                    const i = this.currentResultOptions;
                    const a = e !== s;
                    const c = a ? e.state : this.currentQueryInitialState;
                    const u = a ? this.currentResult : this.previousQueryResult;
                    const {
                        state: l
                    } = e;
                    let {
                        dataUpdatedAt: d,
                        error: p,
                        errorUpdatedAt: h,
                        fetchStatus: m,
                        status: f
                    } = l;
                    let b = false;
                    let y = false;
                    let g;
                    if (t._optimisticResults) {
                        const o = this.hasListeners();
                        const n = !o && V(e, t);
                        const i = o && Q(e, s, t, r);
                        if (n || i) {
                            m = B(e.options.networkMode) ? "fetching" : "paused";
                            if (!d) {
                                f = "loading"
                            }
                        }
                        if (t._optimisticResults === "isRestoring") {
                            m = "idle"
                        }
                    }
                    if (t.keepPreviousData && !l.dataUpdatedAt && u != null && u.isSuccess && f !== "error") {
                        g = u.data;
                        d = u.dataUpdatedAt;
                        f = u.status;
                        b = true
                    } else if (t.select && typeof l.data !== "undefined") {
                        if (o && l.data === (n == null ? void 0 : n.data) && t.select === this.selectFn) {
                            g = this.selectResult
                        } else {
                            try {
                                this.selectFn = t.select;
                                g = t.select(l.data);
                                g = I(o == null ? void 0 : o.data, g, t);
                                this.selectResult = g;
                                this.selectError = null
                            } catch (e) {
                                if (false) {}
                                this.selectError = e
                            }
                        }
                    } else {
                        g = l.data
                    }
                    if (typeof t.placeholderData !== "undefined" && typeof g === "undefined" && f === "loading") {
                        let e;
                        if (o != null && o.isPlaceholderData && t.placeholderData === (i == null ? void 0 : i.placeholderData)) {
                            e = o.data
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
                            f = "success";
                            g = I(o == null ? void 0 : o.data, e, t);
                            y = true
                        }
                    }
                    if (this.selectError) {
                        p = this.selectError;
                        g = this.selectResult;
                        h = Date.now();
                        f = "error"
                    }
                    const v = m === "fetching";
                    const j = f === "loading";
                    const _ = f === "error";
                    const w = {
                        status: f,
                        fetchStatus: m,
                        isLoading: j,
                        isSuccess: f === "success",
                        isError: _,
                        isInitialLoading: j && v,
                        data: g,
                        dataUpdatedAt: d,
                        error: p,
                        errorUpdatedAt: h,
                        failureCount: l.fetchFailureCount,
                        failureReason: l.fetchFailureReason,
                        errorUpdateCount: l.errorUpdateCount,
                        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
                        isFetchedAfterMount: l.dataUpdateCount > c.dataUpdateCount || l.errorUpdateCount > c.errorUpdateCount,
                        isFetching: v,
                        isRefetching: v && !j,
                        isLoadingError: _ && l.dataUpdatedAt === 0,
                        isPaused: m === "paused",
                        isPlaceholderData: y,
                        isPreviousData: b,
                        isRefetchError: _ && l.dataUpdatedAt !== 0,
                        isStale: G(e, t),
                        refetch: this.refetch,
                        remove: this.remove
                    };
                    return w
                }
                updateResult(e) {
                    const t = this.currentResult;
                    const s = this.createResult(this.currentQuery, this.options);
                    this.currentResultState = this.currentQuery.state;
                    this.currentResultOptions = this.options;
                    if (_(s, t)) {
                        return
                    }
                    this.currentResult = s;
                    const r = {
                        cache: true
                    };
                    const o = () => {
                        if (!t) {
                            return true
                        }
                        const {
                            notifyOnChangeProps: e
                        } = this.options;
                        if (e === "all" || !e && !this.trackedProps.size) {
                            return true
                        }
                        const s = new Set(e != null ? e : this.trackedProps);
                        if (this.options.useErrorBoundary) {
                            s.add("error")
                        }
                        return Object.keys(this.currentResult).some((e => {
                            const r = e;
                            const o = this.currentResult[r] !== t[r];
                            return o && s.has(r)
                        }))
                    };
                    if ((e == null ? void 0 : e.listeners) !== false && o()) {
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
                    } else if (e.type === "error" && !q(e.error)) {
                        t.onError = true
                    }
                    this.updateResult(t);
                    if (this.hasListeners()) {
                        this.updateTimers()
                    }
                }
                notify(e) {
                    D.batch((() => {
                        if (e.onSuccess) {
                            var t, s, r, o;
                            (t = (s = this.options).onSuccess) == null ? void 0 : t.call(s, this.currentResult.data);
                            (r = (o = this.options).onSettled) == null ? void 0 : r.call(o, this.currentResult.data, null)
                        } else if (e.onError) {
                            var n, i, a, c;
                            (n = (i = this.options).onError) == null ? void 0 : n.call(i, this.currentResult.error);
                            (a = (c = this.options).onSettled) == null ? void 0 : a.call(c, undefined, this.currentResult.error)
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

            function V(e, t) {
                return z(e, t) || e.state.dataUpdatedAt > 0 && K(e, t, t.refetchOnMount)
            }

            function K(e, t, s) {
                if (t.enabled !== false) {
                    const r = typeof s === "function" ? s(e) : s;
                    return r === "always" || r !== false && G(e, t)
                }
                return false
            }

            function Q(e, t, s, r) {
                return s.enabled !== false && (e !== t || r.enabled === false) && (!s.suspense || e.state.status !== "error") && G(e, s)
            }

            function G(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
            var $ = s("./node_modules/react/index.js");
            var Y = s("./node_modules/use-sync-external-store/shim/index.js");
            "use client";
            const J = Y["useSyncExternalStore"];
            "use client";

            function X() {
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
            const Z = $["createContext"](X());
            const ee = () => $["useContext"](Z);
            const te = ({
                children: e
            }) => {
                const [t] = $["useState"]((() => X()));
                return $["createElement"](Z.Provider, {
                    value: t
                }, typeof e === "function" ? e(t) : e)
            };
            "use client";
            const se = $["createContext"](undefined);
            const re = $["createContext"](false);

            function oe(e, t) {
                if (e) {
                    return e
                }
                if (t && typeof window !== "undefined") {
                    if (!window.ReactQueryClientContext) {
                        window.ReactQueryClientContext = se
                    }
                    return window.ReactQueryClientContext
                }
                return se
            }
            const ne = ({
                context: e
            } = {}) => {
                const t = $["useContext"](oe(e, $["useContext"](re)));
                if (!t) {
                    throw new Error("No QueryClient set, use QueryClientProvider to set one")
                }
                return t
            };
            const ie = ({
                client: e,
                children: t,
                context: s,
                contextSharing: r = false
            }) => {
                $["useEffect"]((() => {
                    e.mount();
                    return () => {
                        e.unmount()
                    }
                }), [e]);
                if (false) {}
                const o = oe(s, r);
                return $["createElement"](re.Provider, {
                    value: !s && r
                }, $["createElement"](o.Provider, {
                    value: e
                }, t))
            };
            "use client";
            const ae = $["createContext"](false);
            const ce = () => $["useContext"](ae);
            const ue = ae.Provider;

            function le(e, t) {
                if (typeof e === "function") {
                    return e(...t)
                }
                return !!e
            }
            "use client";
            const de = (e, t) => {
                if (e.suspense || e.useErrorBoundary) {
                    if (!t.isReset()) {
                        e.retryOnMount = false
                    }
                }
            };
            const pe = e => {
                $["useEffect"]((() => {
                    e.clearReset()
                }), [e])
            };
            const he = ({
                result: e,
                errorResetBoundary: t,
                useErrorBoundary: s,
                query: r
            }) => e.isError && !t.isReset() && !e.isFetching && le(s, [e.error, r]);
            const me = e => {
                if (e.suspense) {
                    if (typeof e.staleTime !== "number") {
                        e.staleTime = 1e3
                    }
                }
            };
            const fe = (e, t) => e.isLoading && e.isFetching && !t;
            const be = (e, t, s) => (e == null ? void 0 : e.suspense) && fe(t, s);
            const ye = (e, t, s) => t.fetchOptimistic(e).then((({
                data: t
            }) => {
                e.onSuccess == null ? void 0 : e.onSuccess(t);
                e.onSettled == null ? void 0 : e.onSettled(t, null)
            })).catch((t => {
                s.clearReset();
                e.onError == null ? void 0 : e.onError(t);
                e.onSettled == null ? void 0 : e.onSettled(undefined, t)
            }));
            "use client";

            function ge(e, t) {
                const s = ne({
                    context: e.context
                });
                const r = ce();
                const o = ee();
                const n = s.defaultQueryOptions(e);
                n._optimisticResults = r ? "isRestoring" : "optimistic";
                if (n.onError) {
                    n.onError = D.batchCalls(n.onError)
                }
                if (n.onSuccess) {
                    n.onSuccess = D.batchCalls(n.onSuccess)
                }
                if (n.onSettled) {
                    n.onSettled = D.batchCalls(n.onSettled)
                }
                me(n);
                de(n, o);
                pe(o);
                const [i] = $["useState"]((() => new t(s, n)));
                const a = i.getOptimisticResult(n);
                J($["useCallback"]((e => r ? () => undefined : i.subscribe(D.batchCalls(e))), [i, r]), (() => i.getCurrentResult()), (() => i.getCurrentResult()));
                $["useEffect"]((() => {
                    i.setOptions(n, {
                        listeners: false
                    })
                }), [n, i]);
                if (be(n, a, r)) {
                    throw ye(n, i, o)
                }
                if (he({
                        result: a,
                        errorResetBoundary: o,
                        useErrorBoundary: n.useErrorBoundary,
                        query: i.getCurrentQuery()
                    })) {
                    throw a.error
                }
                return !n.notifyOnChangeProps ? i.trackResult(a) : a
            }
            s.d(t, "a", (function() {
                return ve
            }));
            "use client";

            function ve(e, t, s) {
                const r = l(e, t, s);
                return ge(r, W)
            }
        },
        "./node_modules/@udemy/braze/dist/esm/index.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/graphql/dist/esm/index.js");
            var o = s("./node_modules/@udemy/sentry/dist/esm/index.js");
            var n = s("./node_modules/@udemy/shared-utils/dist/esm/data/get-config-data.js");
            var i = s("./node_modules/@udemy/shared-utils/dist/esm/data/get-request-data.js");
            var a = s("./node_modules/@udemy/shared-utils/dist/esm/env/ud-me.js");
            var c = s("./node_modules/@udemy/shared-utils/dist/esm/env/ud-user-agnostic-tracking-params.js");
            var u = s("./node_modules/@udemy/shared-utils/dist/esm/env/server-or-client.js");
            var l = s("./node_modules/@udemy/ud-api/dist/esm/index.js");
            let d;
            const p = new Promise((e => {
                d = e
            }));
            async function h() {
                return new Promise((e => {
                    if (typeof window !== "undefined") {
                        s.e(2).then(s.t.bind(null, "./node_modules/@braze/web-sdk/appboy.min.js", 7)).then((t => {
                            e(t)
                        }))
                    }
                }))
            }
            async function m() {
                return h().then((async e => {
                    window.appboy = e;
                    const t = Object(n["a"])();
                    const s = Object(i["a"])();
                    const r = t.env === "PROD" ? "5cefca91-d218-4b04-8bdd-c8876ec1908d" : "4aa844ae-1f20-4f99-aeb9-3307f28c861d";
                    const p = e.initialize(r, {
                        baseUrl: "sdk.iad-03.braze.com",
                        safariWebsitePushId: t.env === "PROD" ? "web.com.udemy.prod" : "web.com.udemy",
                        allowUserSuppliedJavascript: true,
                        contentSecurityNonce: window.nonceValue,
                        enableSdkAuthentication: true,
                        devicePropertyAllowlist: ["browser", "browserVersion", "os", "resolution", "timeZone", "userAgent"]
                    });
                    if (p === undefined || p === false) {
                        l["c"].increment("braze.web_sdk.initialized", {
                            outcome: "fail"
                        });
                        Object(o["a"])(new Error("Braze SDK failed to initialize"));
                        return false
                    } else {
                        l["c"].increment("braze.web_sdk.initialized", {
                            outcome: "success"
                        });
                        d(e)
                    }
                    e.openSession();
                    const h = Object(a["a"])();
                    if (h !== null && h !== void 0 && h.is_authenticated) {
                        const t = await y();
                        e.changeUser(h.id, t);
                        e.subscribeToSdkAuthenticationFailures((async t => {
                            l["c"].increment("braze.web_sdk.authentication_failed", {
                                code: t.errorCode
                            });
                            if (t.userId === h.id.toString()) {
                                const t = await y();
                                if (t) {
                                    e.setSdkAuthenticationSignature(t)
                                } else {
                                    Object(o["a"])(new Error("Braze authentication error: no token provided"))
                                }
                            }
                        }))
                    } else {
                        const r = e.getUser();
                        r === null || r === void 0 ? void 0 : r.setCountry(t.marketplace_country.id);
                        r === null || r === void 0 ? void 0 : r.setLanguage(s.language)
                    }
                    if (Object(c["a"])().page_key === "discovery_subcategory" && e.isPushSupported() && !e.isPushBlocked() && e.isPushPermissionGranted()) {
                        f(e)
                    }
                    if (u["a"].global.location.href.match(/http(s)?:\/\/.*\/course\/.*/gm)) {
                        b(e)
                    }
                    return e
                }))
            }

            function f(e) {
                var t;
                const s = document.querySelector(".ud-component--category--category");
                const r = JSON.parse((t = s === null || s === void 0 ? void 0 : s.getAttribute("data-component-props")) !== null && t !== void 0 ? t : "{}");
                if (r.pageObject) {
                    const t = r.pageObject.id;
                    e.logCustomEvent("Viewed subcategory page", {
                        subcategory_id: t
                    })
                }
            }
            async function b(e) {
                const t = document.body.getAttribute("data-clp-course-id");
                if (t) {
                    let s = {};
                    try {
                        const e = await r["b"].fetcher({
                            featureCodes: ["web_push_optin_display"]
                        })();
                        const t = e.featureVariantAssignmentsByCodeAndAttributes;
                        t.forEach((e => {
                            if (e.featureCode === "web_push_optin_display") {
                                s = e.configuration
                            }
                        }))
                    } catch (e) {}
                    e.logCustomEvent("Viewed CLP", {
                        course_id: t,
                        experiment: s.showModal
                    });
                    e.subscribeToInAppMessage((t => {
                        let s = true;
                        if (t instanceof e.InAppMessage) {
                            const r = t.extras["msg-id"];
                            if (r === "push-primer") {
                                if (!e.isPushSupported() || e.isPushBlocked()) {
                                    s = false
                                }
                            }
                        }
                        if (s) {
                            e.display.showInAppMessage(t)
                        }
                    }))
                }
            }
            async function y() {
                try {
                    const e = await l["b"].get("/braze/auth/");
                    return e.data.jwt
                } catch (e) {
                    Object(o["a"])(e)
                }
            }
            async function g(e) {
                return new Promise((t => {
                    p.then((s => {
                        e(s);
                        t(s)
                    }))
                }))
            }
            s.d(t, "a", (function() {
                return m
            }));
            s.d(t, "b", (function() {
                return g
            }))
        },
        "./node_modules/@udemy/cart/dist/esm/index.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/classnames/index.js");
            var o = s.n(r);
            var n = s("./node_modules/mobx/lib/mobx.module.js");
            var i = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var a = s("./node_modules/react/index.js");
            var c = s.n(a);
            var u = s("./node_modules/@udemy/braze/dist/esm/index.js");
            var l = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/tracker.js");
            var d = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var p = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var h = s("./node_modules/@udemy/sentry/dist/esm/index.js");
            var m = s("./node_modules/@udemy/shared-utils/dist/esm/env/server-or-client.js");
            var f = s("./node_modules/@udemy/shopping/dist/esm/index.js");
            var b = s("./node_modules/@udemy/ud-data/dist/esm/index.js");
            var y = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/event-common.js");
            const g = {
                COURSE: "course",
                SUBSCRIPTION: "subscription"
            };
            let v = function(e) {
                e["UDLITE"] = "udlite";
                return e
            }({});
            class j extends y["a"] {
                constructor(e) {
                    let {
                        buyables: t
                    } = e;
                    super("AddToCartEvent");
                    this.buyables = void 0;
                    this.buyables = t
                }
            }
            class _ extends y["a"] {
                constructor(e) {
                    let {
                        buyables: t,
                        action: s,
                        uiRegion: r
                    } = e;
                    super("CartErrorDisplayEvent");
                    this.buyables = void 0;
                    this.action = void 0;
                    this.uiRegion = void 0;
                    this.buyables = t;
                    this.action = s;
                    this.uiRegion = r
                }
            }
            class w extends y["a"] {
                constructor() {
                    super("RefundNoticeTermsClickEvent")
                }
            }
            class C extends y["a"] {
                constructor(e, t, s) {
                    super("CartMessageImpressionEvent");
                    this.componentVersion = e;
                    this.title = t;
                    this.subTitle = s
                }
            }
            class O extends y["a"] {
                constructor(e) {
                    super("CartSliderMenuImpressionEvent");
                    this.componentVersion = e
                }
            }
            class E extends y["a"] {
                constructor(e) {
                    super("CartCheckoutClickEvent");
                    this.componentVersion = e
                }
            }
            class S extends y["a"] {
                constructor(e, t, s) {
                    super("CartNotificationImpressionEvent");
                    this.message = e;
                    this.reason = t;
                    this.componentVersion = s
                }
            }
            class x extends y["a"] {
                constructor(e, t) {
                    super("ShoppingListImpressionEvent");
                    this.componentVersion = e;
                    this.shoppingListType = t
                }
            }
            const P = e => ({
                get failAddToCart() {
                    return e("We couldn't add this item.")
                },
                get cartUnavailableShort() {
                    return e("Unavailable")
                },
                get cartUnavailable() {
                    return e("Sorry, the shopping cart is temporarily unavailable.")
                },
                get stillWorking() {
                    return e("Still working on it...")
                }
            });
            const T = {
                addToCartSlow: 5e3
            };
            const I = {
                cartPage: "/cart/",
                checkoutPage: "/cart/checkout/",
                keepShopping: "/",
                wishlistPage: "/home/my-courses/wishlist/"
            };
            const k = {
                errors: P,
                timing: T,
                urls: I
            };

            function D() {}
            const R = e => {
                let {
                    notification: t,
                    notificationStyle: s
                } = e;
                return c.a.createElement(c.a.Fragment, null, t && c.a.createElement("span", {
                    className: s
                }, t))
            };
            const A = e => {
                let {
                    buttonContent: t,
                    isAdding: s,
                    isReady: r,
                    loader: o
                } = e;
                return c.a.createElement(c.a.Fragment, null, !r || s && o, !s && t)
            };
            const L = e => {
                let {
                    addToCartContext: t,
                    addToCartSuccessModal: s,
                    allowAddToCartSuccessModal: r = true,
                    buttonClass: i = p["a"],
                    buttonStyleProps: a = {},
                    buyables: y = [],
                    cartButtonClassesAdd: g = "",
                    cartButtonClassesGoToCart: v = "",
                    cartButtonTextAdd: w,
                    cartButtonTextGoToCart: C,
                    disabled: O = false,
                    forceGoToCart: E = false,
                    forceSuccessModalOnMobile: S = false,
                    loader: x,
                    notificationStyle: P = "",
                    onAddRedirectUrl: T = k.urls.cartPage,
                    onRequestFinish: I = D,
                    onRequestStart: L = D,
                    shoppingClient: N,
                    showCartSuccessModal: M = D
                } = e;
                const U = Object(b["h"])();
                const {
                    gettext: B,
                    interpolate: F,
                    ngettext: q
                } = Object(d["h"])();
                const [H, W] = c.a.useState(false);
                const [z, V] = c.a.useState(null);
                const [K, Q] = c.a.useState("");

                function G() {
                    return !O && N.lists.cart.hasBuyables(y)
                }

                function $() {
                    if (G()) {
                        return
                    }
                    let e = true;
                    y.forEach((t => {
                        if (!t.frontendTrackingId && !t.tracking_id) {
                            e = false
                        }
                    }));
                    if (e) {
                        l["a"].publishEvent(new j({
                            buyables: y.map((e => ({
                                type: e.buyable_object_type,
                                id: e.id,
                                trackingId: e.frontendTrackingId || e.tracking_id
                            })))
                        }))
                    }
                }

                function Y() {
                    Object(u["b"])((e => {
                        const {
                            me: t
                        } = U;
                        if (t.is_authenticated) {
                            return
                        }
                        if (e.isPushPermissionGranted()) {
                            if (N.lists.cart.isEmpty) {
                                const t = y.map((e => e.id));
                                e.logCustomEvent("UserCartAbandonment", {
                                    courses_in_cart: t
                                })
                            }
                        }
                    }))
                }

                function J() {
                    m["a"].global.location.href = k.urls.cartPage
                }

                function X() {
                    const e = new URLSearchParams(m["a"].global.location.search);
                    const t = Object(f["b"])(e).get();
                    const s = t.filter((e => !N.discounts.codes.includes(e)));
                    return new Promise((e => {
                        N.applyDiscounts(s);
                        return e(true)
                    }))
                }

                function Z() {
                    W(false);
                    V(null);
                    return X()
                }

                function ee() {
                    W(false);
                    V(k.errors(B).failAddToCart);
                    l["a"].publishEvent(new _({
                        buyables: y.map((e => ({
                            type: e.buyable_object_type,
                            id: e.id,
                            trackingId: e.frontendTrackingId
                        }))),
                        action: "add",
                        uiRegion: "add_to_cart"
                    }));
                    I();
                    return Promise.reject(new Error("Add to cart failed."))
                }

                function te() {
                    if (G()) {
                        return C || B("Go to cart")
                    }
                    if (N.status.get() === f["c"].storage.status.unAvailable) {
                        return k.errors(B).cartUnavailableShort
                    }
                    return w || B("Add to cart")
                }

                function se() {
                    return G() ? v : g
                }

                function re() {
                    const {
                        request: e
                    } = U;
                    W(true);
                    L();
                    setTimeout(Object(n["e"])((() => {
                        if (H) {
                            V(k.errors(B).stillWorking)
                        }
                    })), k.timing.addToCartSlow);
                    return N.addToList("cart", y, t).then(Z, ee).then(Object(n["e"])((() => {
                        I();
                        if (e.isMobile) {
                            if (S) {
                                M()
                            } else {
                                m["a"].global.location.href = T
                            }
                        } else if (r) {
                            M()
                        } else {
                            Q(F(q("%(cartCount)s item added to cart.", "%(cartCount)s items added to cart.", y.length), {
                                cartCount: y.length
                            }, true));
                            if (E) {
                                m["a"].global.location.href = T
                            }
                        }
                    }))).catch((e => {
                        Object(h["a"])(e)
                    }))
                }

                function oe() {
                    $();
                    Y();
                    return G() ? J() : re()
                }
                const ne = N.status.get();
                const ie = !O && ne === f["c"].storage.status.ready;
                const ae = !ie || ne === f["c"].storage.status.unAvailable || H;
                const ce = c.a.createElement(A, {
                    isReady: ie,
                    isAdding: H,
                    buttonContent: te(),
                    loader: x
                });
                const ue = {
                    "data-testid": "add-to-cart-button",
                    className: o()("add-to-cart", se()),
                    disabled: ae,
                    onClick: oe,
                    style: {
                        width: "100%"
                    },
                    ...a
                };
                const le = c.a.createElement(i, ue, ce);
                return c.a.createElement("div", {
                    "data-purpose": "add-to-cart"
                }, le, s, c.a.createElement(R, {
                    notification: z,
                    notificationStyle: P
                }), c.a.createElement("div", {
                    role: "status",
                    className: "ud-sr-only",
                    "data-purpose": "screen-reader-message"
                }, K))
            };
            L.displayName = "GenericAddToCart";
            const N = Object(i["f"])(L);
            s.d(t, "a", (function() {
                return N
            }));
            s.d(t, "b", (function() {
                return k
            }))
        },
        "./node_modules/@udemy/graphql/dist/esm/index.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@tanstack/react-query/build/lib/useQuery.esm.js");
            var o = s("./node_modules/@udemy/graphql/node_modules/js-cookie/dist/js.cookie.js");
            var n = s.n(o);
            const i = () => {
                var e;
                const t = (e = n.a.get()) !== null && e !== void 0 ? e : {};
                if (t.ud_locale) {
                    const e = t.ud_locale.split("_").join("-");
                    return {
                        "Accept-Language": e
                    }
                }
            };
            const a = (e, t, s) => async () => {
                let r;
                if (s && "_signal" in s) {
                    r = s._signal;
                    delete s._signal
                }
                const o = await fetch("/api/2022-03/graphql/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...i(),
                        ...s !== null && s !== void 0 ? s : {}
                    },
                    body: JSON.stringify({
                        query: e,
                        variables: t
                    }),
                    signal: r
                });
                const n = await o.json();
                if (n.errors) {
                    const {
                        message: e
                    } = n.errors[0] || "Error..";
                    throw new Error(e)
                }
                return n.data
            };
            let c = function(e) {
                e["ClosedCaption"] = "CLOSED_CAPTION";
                e["Subtitle"] = "SUBTITLE";
                return e
            }({});
            let u = function(e) {
                e["Cplusplus"] = "CPLUSPLUS";
                e["CsvProcessingWithPython"] = "CSV_PROCESSING_WITH_PYTHON";
                e["CSharp"] = "C_SHARP";
                e["CSharp_11"] = "C_SHARP_11";
                e["Html"] = "HTML";
                e["JavascriptEs6"] = "JAVASCRIPT_ES6";
                e["Java_9"] = "JAVA_9";
                e["Java_11"] = "JAVA_11";
                e["Java_17"] = "JAVA_17";
                e["Php_5"] = "PHP_5";
                e["Php_7"] = "PHP_7";
                e["Python_3_5"] = "PYTHON_3_5";
                e["Python_3_8"] = "PYTHON_3_8";
                e["Python_3_10"] = "PYTHON_3_10";
                e["React_16"] = "REACT_16";
                e["Ruby"] = "RUBY";
                e["R_3_6"] = "R_3_6";
                e["Scipy_1_4NumpyPandasSympyAndScikitLearn_0_23"] = "SCIPY_1_4_NUMPY_PANDAS_SYMPY_AND_SCIKIT_LEARN_0_23";
                e["Sql"] = "SQL";
                e["Sqlite_3"] = "SQLITE_3";
                e["Swift_3"] = "SWIFT_3";
                e["Swift_5"] = "SWIFT_5";
                return e
            }({});
            let l = function(e) {
                e["Cpe"] = "CPE";
                return e
            }({});
            let d = function(e) {
                e["Rating"] = "RATING";
                e["Relevance"] = "RELEVANCE";
                e["Reviews"] = "REVIEWS";
                e["Time"] = "TIME";
                return e
            }({});
            let p = function(e) {
                e["Aud"] = "AUD";
                e["Brl"] = "BRL";
                e["Cad"] = "CAD";
                e["Dkk"] = "DKK";
                e["Eur"] = "EUR";
                e["Gbp"] = "GBP";
                e["Idr"] = "IDR";
                e["Ils"] = "ILS";
                e["Inr"] = "INR";
                e["Jpy"] = "JPY";
                e["Krw"] = "KRW";
                e["Mxn"] = "MXN";
                e["Nok"] = "NOK";
                e["Pln"] = "PLN";
                e["Rub"] = "RUB";
                e["Sgd"] = "SGD";
                e["Thb"] = "THB";
                e["Try"] = "TRY";
                e["Twd"] = "TWD";
                e["Usd"] = "USD";
                e["Vnd"] = "VND";
                e["Zar"] = "ZAR";
                return e
            }({});
            let h = function(e) {
                e["Day"] = "DAY";
                e["Month"] = "MONTH";
                e["Week"] = "WEEK";
                e["Year"] = "YEAR";
                return e
            }({});
            let m = function(e) {
                e["AllLevels"] = "ALL_LEVELS";
                e["Beginner"] = "BEGINNER";
                e["Expert"] = "EXPERT";
                e["Intermediate"] = "INTERMEDIATE";
                return e
            }({});
            let f = function(e) {
                e["Af"] = "AF";
                e["Ak"] = "AK";
                e["Am"] = "AM";
                e["Ar"] = "AR";
                e["As"] = "AS";
                e["Az"] = "AZ";
                e["Be"] = "BE";
                e["Bg"] = "BG";
                e["Bm"] = "BM";
                e["Bn"] = "BN";
                e["Bo"] = "BO";
                e["Br"] = "BR";
                e["Bs"] = "BS";
                e["Ca"] = "CA";
                e["Ce"] = "CE";
                e["Cs"] = "CS";
                e["Cu"] = "CU";
                e["Cy"] = "CY";
                e["Da"] = "DA";
                e["De"] = "DE";
                e["Dz"] = "DZ";
                e["Ee"] = "EE";
                e["El"] = "EL";
                e["En"] = "EN";
                e["Eo"] = "EO";
                e["Es"] = "ES";
                e["Et"] = "ET";
                e["Eu"] = "EU";
                e["Fa"] = "FA";
                e["Ff"] = "FF";
                e["Fi"] = "FI";
                e["Fo"] = "FO";
                e["Fr"] = "FR";
                e["Fy"] = "FY";
                e["Ga"] = "GA";
                e["Gd"] = "GD";
                e["Gl"] = "GL";
                e["Gu"] = "GU";
                e["Gv"] = "GV";
                e["Ha"] = "HA";
                e["He"] = "HE";
                e["Hi"] = "HI";
                e["Hr"] = "HR";
                e["Hu"] = "HU";
                e["Hy"] = "HY";
                e["Ia"] = "IA";
                e["Id"] = "ID";
                e["Ig"] = "IG";
                e["Ii"] = "II";
                e["Is"] = "IS";
                e["It"] = "IT";
                e["Ja"] = "JA";
                e["Jv"] = "JV";
                e["Ka"] = "KA";
                e["Ki"] = "KI";
                e["Kk"] = "KK";
                e["Kl"] = "KL";
                e["Km"] = "KM";
                e["Kn"] = "KN";
                e["Ko"] = "KO";
                e["Ks"] = "KS";
                e["Ku"] = "KU";
                e["Kw"] = "KW";
                e["Ky"] = "KY";
                e["Lb"] = "LB";
                e["Lg"] = "LG";
                e["Ln"] = "LN";
                e["Lo"] = "LO";
                e["Lt"] = "LT";
                e["Lu"] = "LU";
                e["Lv"] = "LV";
                e["Mg"] = "MG";
                e["Mi"] = "MI";
                e["Mk"] = "MK";
                e["Ml"] = "ML";
                e["Mn"] = "MN";
                e["Mr"] = "MR";
                e["Ms"] = "MS";
                e["Mt"] = "MT";
                e["My"] = "MY";
                e["Nb"] = "NB";
                e["Nd"] = "ND";
                e["Ne"] = "NE";
                e["Nl"] = "NL";
                e["Nn"] = "NN";
                e["No"] = "NO";
                e["Om"] = "OM";
                e["Or"] = "OR";
                e["Os"] = "OS";
                e["Pa"] = "PA";
                e["Pl"] = "PL";
                e["Ps"] = "PS";
                e["Pt"] = "PT";
                e["PtBr"] = "PT_BR";
                e["PtPt"] = "PT_PT";
                e["Qu"] = "QU";
                e["Rm"] = "RM";
                e["Rn"] = "RN";
                e["Ro"] = "RO";
                e["Ru"] = "RU";
                e["Rw"] = "RW";
                e["Sd"] = "SD";
                e["Se"] = "SE";
                e["Sg"] = "SG";
                e["Si"] = "SI";
                e["Sk"] = "SK";
                e["Sl"] = "SL";
                e["Sn"] = "SN";
                e["So"] = "SO";
                e["Sq"] = "SQ";
                e["Sr"] = "SR";
                e["Su"] = "SU";
                e["Sv"] = "SV";
                e["Sw"] = "SW";
                e["Ta"] = "TA";
                e["Te"] = "TE";
                e["Tg"] = "TG";
                e["Th"] = "TH";
                e["Ti"] = "TI";
                e["Tk"] = "TK";
                e["To"] = "TO";
                e["Tr"] = "TR";
                e["Tt"] = "TT";
                e["Ug"] = "UG";
                e["Uk"] = "UK";
                e["Ur"] = "UR";
                e["Uz"] = "UZ";
                e["Vi"] = "VI";
                e["Vo"] = "VO";
                e["Wo"] = "WO";
                e["Xh"] = "XH";
                e["Yi"] = "YI";
                e["Yo"] = "YO";
                e["Zh"] = "ZH";
                e["ZhCn"] = "ZH_CN";
                e["ZhTw"] = "ZH_TW";
                e["Zu"] = "ZU";
                return e
            }({});
            let b = function(e) {
                e["Consumersubscription"] = "CONSUMERSUBSCRIPTION";
                e["Enterprise"] = "ENTERPRISE";
                e["Team"] = "TEAM";
                e["Udemypro"] = "UDEMYPRO";
                return e
            }({});
            let y = function(e) {
                e["Active"] = "ACTIVE";
                e["Canceled"] = "CANCELED";
                e["Expired"] = "EXPIRED";
                e["Future"] = "FUTURE";
                e["Trial"] = "TRIAL";
                return e
            }({});
            let g = function(e) {
                e["Popular"] = "POPULAR";
                e["Trending"] = "TRENDING";
                return e
            }({});
            let v = function(e) {
                e["ExtraLong"] = "EXTRA_LONG";
                e["ExtraShort"] = "EXTRA_SHORT";
                e["Long"] = "LONG";
                e["Medium"] = "MEDIUM";
                e["Short"] = "SHORT";
                return e
            }({});
            const j = `\n    query FeatureVariantAssignments($featureCodes: [String!]!, $realtimeAttributes: [FeatureRequestAttributeInput!]) {\n  featureVariantAssignmentsByCodeAndAttributes(\n    featureCodes: $featureCodes\n    realtimeAttributes: $realtimeAttributes\n  ) {\n    featureCode\n    configuration\n    isInExperiment\n    experimentIds\n  }\n}\n    `;
            const _ = (e, t) => Object(r["a"])(["FeatureVariantAssignments", e], a(j, e), t);
            _.getKey = e => ["FeatureVariantAssignments", e];
            _.fetcher = (e, t) => a(j, e, t);
            var w = s("./node_modules/axios/index.js");
            var C = s.n(w);
            var O = s("./node_modules/@udemy/shared-utils/dist/esm/data/get-config-data.js");
            var E = s("./node_modules/@udemy/ud-api/dist/esm/index.js");

            function S(e, t) {
                return btoa(`${e}:${t}`)
            }

            function x(e) {
                return atob(e)
            }

            function P(e) {
                return parseInt(x(e).split(":")[1], 10)
            }
            async function T(e) {
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                const s = Object(O["a"])();
                try {
                    const r = await C.a.post(s.graphql_federation_endpoint, e, {
                        headers: {
                            "Content-Type": "application/json",
                            ...Object(E["a"])(),
                            ...t
                        }
                    });
                    const o = r.data || {};
                    if (o.errors) {
                        return Promise.reject({ ...o,
                            statusCode: r.status
                        })
                    }
                    return o
                } catch (e) {
                    const t = e;
                    const s = t.response || {};
                    return Promise.reject({ ...s.data,
                        statusCode: s.status
                    })
                }
            }
            s.d(t, "b", (function() {
                return _
            }));
            s.d(t, "a", (function() {
                return T
            }))
        },
        "./node_modules/@udemy/graphql/node_modules/js-cookie/dist/js.cookie.js": function(e, t, s) {
            (function(t, s) {
                true ? e.exports = s() : undefined
            })(this, (function() {
                "use strict";

                function e(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) {
                            e[r] = s[r]
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

                function s(t, r) {
                    function o(s, o, n) {
                        if (typeof document === "undefined") {
                            return
                        }
                        n = e({}, r, n);
                        if (typeof n.expires === "number") {
                            n.expires = new Date(Date.now() + n.expires * 864e5)
                        }
                        if (n.expires) {
                            n.expires = n.expires.toUTCString()
                        }
                        s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var i = "";
                        for (var a in n) {
                            if (!n[a]) {
                                continue
                            }
                            i += "; " + a;
                            if (n[a] === true) {
                                continue
                            }
                            i += "=" + n[a].split(";")[0]
                        }
                        return document.cookie = s + "=" + t.write(o, s) + i
                    }

                    function n(e) {
                        if (typeof document === "undefined" || arguments.length && !e) {
                            return
                        }
                        var s = document.cookie ? document.cookie.split("; ") : [];
                        var r = {};
                        for (var o = 0; o < s.length; o++) {
                            var n = s[o].split("=");
                            var i = n.slice(1).join("=");
                            try {
                                var a = decodeURIComponent(n[0]);
                                r[a] = t.read(i, a);
                                if (e === a) {
                                    break
                                }
                            } catch (e) {}
                        }
                        return e ? r[e] : r
                    }
                    return Object.create({
                        set: o,
                        get: n,
                        remove: function(t, s) {
                            o(t, "", e({}, s, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return s(this.converter, e({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return s(e({}, this.converter, t), this.attributes)
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
                var r = s(t, {
                    path: "/"
                });
                return r
            }))
        },
        "./node_modules/@udemy/icons/dist/expand-plus.ud-icon": function(e, t, s) {
            e.exports = s("./node_modules/@udemy/react-core-components/dist/esm/index.js")["createIcon"]("expand-plus")
        },
        "./node_modules/@udemy/icons/dist/play.ud-icon": function(e, t, s) {
            e.exports = s("./node_modules/@udemy/react-core-components/dist/esm/index.js")["createIcon"]("play")
        },
        "./node_modules/@udemy/icons/dist/wishlisted.ud-icon": function(e, t, s) {
            e.exports = s("./node_modules/@udemy/react-core-components/dist/esm/index.js")["createIcon"]("wishlisted")
        },
        "./node_modules/@udemy/sentry/dist/esm/index.js": function(e, t, s) {
            "use strict";

            function r() {
                if (typeof window === "undefined") {
                    return true
                } else {
                    return !!window.URLSearchParams
                }
            }

            function o() {
                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
                    t[s] = arguments[s]
                }
                return function(e) {
                    return t.reduce(((e, t) => {
                        if (!e) {
                            return null
                        }
                        return t(e)
                    }), e)
                }
            }
            const n = function(e) {
                return r() ? e : null
            };
            const i = function(e) {
                c(e).forEach((e => {
                    if (e.filename && !e.filename.endsWith(".js")) {
                        e.filename = "<not-a-js-file-see-@udemy-sentry>"
                    }
                }));
                return e
            };
            const a = function(e) {
                var t, s;
                const r = c(e);
                if (r.length > 0 && (t = r[r.length - 1]) !== null && t !== void 0 && (s = t.filename) !== null && s !== void 0 && s.includes("videojs")) {
                    if (e) {
                        e.fingerprint = ["videojs"]
                    }
                }
                return e
            };
            const c = function(e) {
                var t;
                const s = (e === null || e === void 0 ? void 0 : e.exception) && (e === null || e === void 0 ? void 0 : (t = e.exception) === null || t === void 0 ? void 0 : t.values) || [];
                if (s.length > 0) {
                    const e = s[0];
                    return e.stacktrace && e.stacktrace.frames || []
                }
                return []
            };

            function u(e) {
                return o(n, a, i)(e)
            }
            const l = [/^Blocked a frame with origin.*Protocols, domains, and ports must match/, "__gCrWeb.autofill.extractForms", "ResizeObserver loop limit exceeded", /window\.setupAdForm/, /_avast_submit/, /vid_mate_check/, /__show__deepen is not defined/, /NS_ERROR_NOT_INITIALIZED/, /Loading chunk [^ ]* failed/, /Previously handled exception: /, /['"]vdata\d+['"]/, /\$compile:tpload.*Failed to load template:.*display_type=popup.*HTTP status: (-1|403)/, 'can\'t redefine non-configurable property "userAgent"', "_isMatchingDomain is not defined", /^Failed to execute 'postMessage' on 'Window'.*could not be cloned/, /Unexpected token else/, "top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Request aborted", /^Network Error$/, new RegExp(".*timeout of .* exceeded.*"), "Cannot read property 'currentTime' of null", "Cannot read property 'play' of null", "null has no properties", "videojs"];
            class d {
                constructor() {
                    this.sentryInstance = void 0
                }
                setSentryInstance(e) {
                    this.sentryInstance = e
                }
                initializeSentry(e, t) {
                    if (!t.ignoreErrors) {
                        t.ignoreErrors = l
                    }
                    try {
                        e.init(t)
                    } catch (e) {
                        console.error(e)
                    }
                    this.setSentryInstance(e)
                }
                initializeSentryContext(e) {
                    const {
                        user_id: t,
                        ...s
                    } = e;
                    if (e.user_id) {
                        this.sentryInstance.setUser({
                            id: t
                        })
                    }
                    this.sentryInstance.setTags({ ...s
                    })
                }
                captureException(e) {
                    if (this.sentryInstance) {
                        console.error("Sentry.captureException called with:", e);
                        this.sentryInstance.captureException(e)
                    }
                }
            }
            const p = new d;
            const h = p.captureException.bind(p);
            s.d(t, "b", (function() {
                return p
            }));
            s.d(t, "a", (function() {
                return h
            }))
        },
        "./node_modules/@udemy/shared-utils/dist/esm/env/get-os-name.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            }));
            var r = s("./node_modules/@udemy/shared-utils/dist/esm/env/server-or-client.js");

            function o() {
                const e = r["a"].global.navigator.userAgent,
                    t = r["a"].global.navigator.platform,
                    s = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
                    o = ["Win32", "Win64", "Windows", "WinCE"],
                    n = ["iPhone", "iPad", "iPod", "iPhone Simulator", "iPad Simulator", "iPod Simulator"];
                let i = "other";
                if (s.indexOf(t) !== -1) {
                    i = "mac os"
                } else if (n.indexOf(t) !== -1) {
                    i = "ios"
                } else if (o.indexOf(t) !== -1) {
                    i = "windows"
                } else if (/Android/.test(e)) {
                    i = "android"
                } else if (/Linux/.test(t)) {
                    i = "linux"
                }
                return i
            }
        },
        "./node_modules/@udemy/shared-utils/dist/esm/env/is-mobile-app.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return a
            }));
            var r = s("./node_modules/@udemy/shared-utils/dist/esm/env/query-params.js");
            var o = s("./node_modules/@udemy/shared-utils/dist/esm/env/server-or-client.js");
            let n = null;

            function i() {
                n = null
            }

            function a() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    cache: true
                };
                let t = n;
                if (!t || !e.cache) {
                    t = Object(r["a"])(o["a"].global.location).display_type;
                    if (e.cache) {
                        n = t
                    }
                }
                return t === "mobile_app"
            }
        },
        "./node_modules/@udemy/shared-utils/dist/esm/env/query-params.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return n
            }));
            var r = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/index.js");
            var o = s.n(r);

            function n() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
                return o.a.parse(e.search, {
                    ignoreQueryPrefix: true
                })
            }

            function i(e, t) {
                if (typeof e === "boolean") {
                    return e
                }
                const s = {
                    0: false,
                    1: true,
                    false: false,
                    true: true,
                    on: true,
                    off: false,
                    enabled: true,
                    disabled: false
                };
                const r = (e || "").toLowerCase();
                if (s[r] === undefined) {
                    return t
                }
                return s[r]
            }

            function a(e, t, s) {
                if (t.indexOf(e) >= 0) {
                    return e
                }
                return s
            }

            function c(e, t) {
                const s = parseInt(e, 10);
                if (isNaN(s)) {
                    return t
                }
                return s
            }

            function u(e, t) {
                return e || t
            }
        },
        "./node_modules/@udemy/shared-utils/dist/esm/env/ud-performance.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            }));
            var r = s("./node_modules/@udemy/shared-utils/dist/esm/env/server-or-client.js");
            const o = () => {
                var e;
                return (e = r["a"].global.UD) === null || e === void 0 ? void 0 : e.performance
            }
        },
        "./node_modules/@udemy/shared-utils/dist/esm/forms/serialize-form.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));

            function r(e) {
                const t = {};
                o(e).forEach((e => {
                    let {
                        name: s,
                        value: r
                    } = e;
                    if (typeof t[s] === "undefined") {
                        t[s] = r
                    } else if (Array.isArray(t[s])) {
                        t[s].push(r)
                    } else {
                        t[s] = [t[s], r]
                    }
                }));
                return t
            }

            function o(e) {
                const t = /\r?\n/g,
                    s = /^(?:submit|button|image|reset|file)$/i,
                    r = /^(?:input|select|textarea|keygen)/i,
                    o = /^(?:checkbox|radio)$/i;
                return Array.from(e.elements).filter((e => e.name && !e.disabled && r.test(e.nodeName) && !s.test(e.type) && (e.checked || !o.test(e.type)))).map((e => {
                    const s = e.value;
                    if (s === null) {
                        return null
                    }
                    if (Array.isArray(s)) {
                        return s.map((s => ({
                            name: e.name,
                            value: s.replace(t, "\r\n")
                        })))
                    }
                    return {
                        name: e.name,
                        value: s.replace(t, "\r\n")
                    }
                }))
            }
        },
        "./node_modules/@udemy/shared-utils/dist/esm/webview/webview-bridge.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return n
            }));
            var r = s("./node_modules/@udemy/shared-utils/dist/esm/env/get-os-name.js");
            var o = s("./node_modules/@udemy/shared-utils/dist/esm/env/is-mobile-app.js");
            class n {
                constructor(e) {
                    this.argWindow = e;
                    if (typeof e !== "undefined") {
                        this.argWindow = e
                    } else if (typeof window !== "undefined") {
                        this.argWindow = window
                    }
                }
                getAndroidClient() {
                    var e, t;
                    if (i() && typeof((e = this.argWindow) === null || e === void 0 ? void 0 : (t = e.AndroidClient) === null || t === void 0 ? void 0 : t.postMessage) === "function") {
                        return this.argWindow.AndroidClient.postMessage.bind(this.argWindow.AndroidClient)
                    }
                    return null
                }
                getiOSClient() {
                    var e, t;
                    if (a() && typeof((e = this.argWindow) === null || e === void 0 ? void 0 : (t = e.webkit) === null || t === void 0 ? void 0 : t.messageHandlers.iOSClient.postMessage) === "function") {
                        return this.argWindow.webkit.messageHandlers.iOSClient.postMessage.bind(this.argWindow.webkit.messageHandlers.iOSClient)
                    }
                    return null
                }
                sendMessage(e) {
                    const t = this.getAndroidClient();
                    if (t) {
                        var s;
                        t(JSON.stringify(e));
                        if (e.sendLegacyAndroidMessage && (s = this.argWindow) !== null && s !== void 0 && s.AndroidClient) {
                            var r;
                            e.sendLegacyAndroidMessage((r = this.argWindow) === null || r === void 0 ? void 0 : r.AndroidClient)
                        }
                    } else {
                        const t = this.getiOSClient();
                        if (t) {
                            t(JSON.stringify(e))
                        }
                    }
                }
            }

            function i() {
                return Object(o["a"])() && Object(r["a"])() === "android"
            }

            function a() {
                return Object(o["a"])() && Object(r["a"])() === "ios"
            }
        },
        "./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js": function(e, t, s) {
            "use strict";
            var r = String.prototype.replace;
            var o = /%20/g;
            var n = {
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            };
            e.exports = {
                default: n.RFC3986,
                formatters: {
                    RFC1738: function(e) {
                        return r.call(e, o, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: n.RFC1738,
                RFC3986: n.RFC3986
            }
        },
        "./node_modules/@udemy/shared-utils/node_modules/qs/lib/index.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/stringify.js");
            var o = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/parse.js");
            var n = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js");
            e.exports = {
                formats: n,
                parse: o,
                stringify: r
            }
        },
        "./node_modules/@udemy/shared-utils/node_modules/qs/lib/parse.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/utils.js");
            var o = Object.prototype.hasOwnProperty;
            var n = Array.isArray;
            var i = {
                allowDots: false,
                allowPrototypes: false,
                allowSparse: false,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: false,
                comma: false,
                decoder: r.decode,
                delimiter: "&",
                depth: 5,
                ignoreQueryPrefix: false,
                interpretNumericEntities: false,
                parameterLimit: 1e3,
                parseArrays: true,
                plainObjects: false,
                strictNullHandling: false
            };
            var a = function(e) {
                return e.replace(/&#(\d+);/g, (function(e, t) {
                    return String.fromCharCode(parseInt(t, 10))
                }))
            };
            var c = function(e, t) {
                if (e && typeof e === "string" && t.comma && e.indexOf(",") > -1) {
                    return e.split(",")
                }
                return e
            };
            var u = "utf8=%26%2310003%3B";
            var l = "utf8=%E2%9C%93";
            var d = function e(t, s) {
                var d = {};
                var p = s.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
                var h = s.parameterLimit === Infinity ? undefined : s.parameterLimit;
                var m = p.split(s.delimiter, h);
                var f = -1;
                var b;
                var y = s.charset;
                if (s.charsetSentinel) {
                    for (b = 0; b < m.length; ++b) {
                        if (m[b].indexOf("utf8=") === 0) {
                            if (m[b] === l) {
                                y = "utf-8"
                            } else if (m[b] === u) {
                                y = "iso-8859-1"
                            }
                            f = b;
                            b = m.length
                        }
                    }
                }
                for (b = 0; b < m.length; ++b) {
                    if (b === f) {
                        continue
                    }
                    var g = m[b];
                    var v = g.indexOf("]=");
                    var j = v === -1 ? g.indexOf("=") : v + 1;
                    var _, w;
                    if (j === -1) {
                        _ = s.decoder(g, i.decoder, y, "key");
                        w = s.strictNullHandling ? null : ""
                    } else {
                        _ = s.decoder(g.slice(0, j), i.decoder, y, "key");
                        w = r.maybeMap(c(g.slice(j + 1), s), (function(e) {
                            return s.decoder(e, i.decoder, y, "value")
                        }))
                    }
                    if (w && s.interpretNumericEntities && y === "iso-8859-1") {
                        w = a(w)
                    }
                    if (g.indexOf("[]=") > -1) {
                        w = n(w) ? [w] : w
                    }
                    if (o.call(d, _)) {
                        d[_] = r.combine(d[_], w)
                    } else {
                        d[_] = w
                    }
                }
                return d
            };
            var p = function(e, t, s, r) {
                var o = r ? t : c(t, s);
                for (var n = e.length - 1; n >= 0; --n) {
                    var i;
                    var a = e[n];
                    if (a === "[]" && s.parseArrays) {
                        i = [].concat(o)
                    } else {
                        i = s.plainObjects ? Object.create(null) : {};
                        var u = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a;
                        var l = parseInt(u, 10);
                        if (!s.parseArrays && u === "") {
                            i = {
                                0: o
                            }
                        } else if (!isNaN(l) && a !== u && String(l) === u && l >= 0 && (s.parseArrays && l <= s.arrayLimit)) {
                            i = [];
                            i[l] = o
                        } else if (u !== "__proto__") {
                            i[u] = o
                        }
                    }
                    o = i
                }
                return o
            };
            var h = function e(t, s, r, n) {
                if (!t) {
                    return
                }
                var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t;
                var a = /(\[[^[\]]*])/;
                var c = /(\[[^[\]]*])/g;
                var u = r.depth > 0 && a.exec(i);
                var l = u ? i.slice(0, u.index) : i;
                var d = [];
                if (l) {
                    if (!r.plainObjects && o.call(Object.prototype, l)) {
                        if (!r.allowPrototypes) {
                            return
                        }
                    }
                    d.push(l)
                }
                var h = 0;
                while (r.depth > 0 && (u = c.exec(i)) !== null && h < r.depth) {
                    h += 1;
                    if (!r.plainObjects && o.call(Object.prototype, u[1].slice(1, -1))) {
                        if (!r.allowPrototypes) {
                            return
                        }
                    }
                    d.push(u[1])
                }
                if (u) {
                    d.push("[" + i.slice(u.index) + "]")
                }
                return p(d, s, r, n)
            };
            var m = function e(t) {
                if (!t) {
                    return i
                }
                if (t.decoder !== null && t.decoder !== undefined && typeof t.decoder !== "function") {
                    throw new TypeError("Decoder has to be a function.")
                }
                if (typeof t.charset !== "undefined" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") {
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
                }
                var s = typeof t.charset === "undefined" ? i.charset : t.charset;
                return {
                    allowDots: typeof t.allowDots === "undefined" ? i.allowDots : !!t.allowDots,
                    allowPrototypes: typeof t.allowPrototypes === "boolean" ? t.allowPrototypes : i.allowPrototypes,
                    allowSparse: typeof t.allowSparse === "boolean" ? t.allowSparse : i.allowSparse,
                    arrayLimit: typeof t.arrayLimit === "number" ? t.arrayLimit : i.arrayLimit,
                    charset: s,
                    charsetSentinel: typeof t.charsetSentinel === "boolean" ? t.charsetSentinel : i.charsetSentinel,
                    comma: typeof t.comma === "boolean" ? t.comma : i.comma,
                    decoder: typeof t.decoder === "function" ? t.decoder : i.decoder,
                    delimiter: typeof t.delimiter === "string" || r.isRegExp(t.delimiter) ? t.delimiter : i.delimiter,
                    depth: typeof t.depth === "number" || t.depth === false ? +t.depth : i.depth,
                    ignoreQueryPrefix: t.ignoreQueryPrefix === true,
                    interpretNumericEntities: typeof t.interpretNumericEntities === "boolean" ? t.interpretNumericEntities : i.interpretNumericEntities,
                    parameterLimit: typeof t.parameterLimit === "number" ? t.parameterLimit : i.parameterLimit,
                    parseArrays: t.parseArrays !== false,
                    plainObjects: typeof t.plainObjects === "boolean" ? t.plainObjects : i.plainObjects,
                    strictNullHandling: typeof t.strictNullHandling === "boolean" ? t.strictNullHandling : i.strictNullHandling
                }
            };
            e.exports = function(e, t) {
                var s = m(t);
                if (e === "" || e === null || typeof e === "undefined") {
                    return s.plainObjects ? Object.create(null) : {}
                }
                var o = typeof e === "string" ? d(e, s) : e;
                var n = s.plainObjects ? Object.create(null) : {};
                var i = Object.keys(o);
                for (var a = 0; a < i.length; ++a) {
                    var c = i[a];
                    var u = h(c, o[c], s, typeof e === "string");
                    n = r.merge(n, u, s)
                }
                if (s.allowSparse === true) {
                    return n
                }
                return r.compact(n)
            }
        },
        "./node_modules/@udemy/shared-utils/node_modules/qs/lib/stringify.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/side-channel/index.js");
            var o = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/utils.js");
            var n = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js");
            var i = Object.prototype.hasOwnProperty;
            var a = {
                brackets: function e(t) {
                    return t + "[]"
                },
                comma: "comma",
                indices: function e(t, s) {
                    return t + "[" + s + "]"
                },
                repeat: function e(t) {
                    return t
                }
            };
            var c = Array.isArray;
            var u = Array.prototype.push;
            var l = function(e, t) {
                u.apply(e, c(t) ? t : [t])
            };
            var d = Date.prototype.toISOString;
            var p = n["default"];
            var h = {
                addQueryPrefix: false,
                allowDots: false,
                charset: "utf-8",
                charsetSentinel: false,
                delimiter: "&",
                encode: true,
                encoder: o.encode,
                encodeValuesOnly: false,
                format: p,
                formatter: n.formatters[p],
                indices: false,
                serializeDate: function e(t) {
                    return d.call(t)
                },
                skipNulls: false,
                strictNullHandling: false
            };
            var m = function e(t) {
                return typeof t === "string" || typeof t === "number" || typeof t === "boolean" || typeof t === "symbol" || typeof t === "bigint"
            };
            var f = {};
            var b = function e(t, s, n, i, a, u, d, p, b, y, g, v, j, _, w, C) {
                var O = t;
                var E = C;
                var S = 0;
                var x = false;
                while ((E = E.get(f)) !== void undefined && !x) {
                    var P = E.get(t);
                    S += 1;
                    if (typeof P !== "undefined") {
                        if (P === S) {
                            throw new RangeError("Cyclic object value")
                        } else {
                            x = true
                        }
                    }
                    if (typeof E.get(f) === "undefined") {
                        S = 0
                    }
                }
                if (typeof p === "function") {
                    O = p(s, O)
                } else if (O instanceof Date) {
                    O = g(O)
                } else if (n === "comma" && c(O)) {
                    O = o.maybeMap(O, (function(e) {
                        if (e instanceof Date) {
                            return g(e)
                        }
                        return e
                    }))
                }
                if (O === null) {
                    if (a) {
                        return d && !_ ? d(s, h.encoder, w, "key", v) : s
                    }
                    O = ""
                }
                if (m(O) || o.isBuffer(O)) {
                    if (d) {
                        var T = _ ? s : d(s, h.encoder, w, "key", v);
                        return [j(T) + "=" + j(d(O, h.encoder, w, "value", v))]
                    }
                    return [j(s) + "=" + j(String(O))]
                }
                var I = [];
                if (typeof O === "undefined") {
                    return I
                }
                var k;
                if (n === "comma" && c(O)) {
                    if (_ && d) {
                        O = o.maybeMap(O, d)
                    }
                    k = [{
                        value: O.length > 0 ? O.join(",") || null : void undefined
                    }]
                } else if (c(p)) {
                    k = p
                } else {
                    var D = Object.keys(O);
                    k = b ? D.sort(b) : D
                }
                var R = i && c(O) && O.length === 1 ? s + "[]" : s;
                for (var A = 0; A < k.length; ++A) {
                    var L = k[A];
                    var N = typeof L === "object" && typeof L.value !== "undefined" ? L.value : O[L];
                    if (u && N === null) {
                        continue
                    }
                    var M = c(O) ? typeof n === "function" ? n(R, L) : R : R + (y ? "." + L : "[" + L + "]");
                    C.set(t, S);
                    var U = r();
                    U.set(f, C);
                    l(I, e(N, M, n, i, a, u, n === "comma" && _ && c(O) ? null : d, p, b, y, g, v, j, _, w, U))
                }
                return I
            };
            var y = function e(t) {
                if (!t) {
                    return h
                }
                if (t.encoder !== null && typeof t.encoder !== "undefined" && typeof t.encoder !== "function") {
                    throw new TypeError("Encoder has to be a function.")
                }
                var s = t.charset || h.charset;
                if (typeof t.charset !== "undefined" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") {
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
                }
                var r = n["default"];
                if (typeof t.format !== "undefined") {
                    if (!i.call(n.formatters, t.format)) {
                        throw new TypeError("Unknown format option provided.")
                    }
                    r = t.format
                }
                var o = n.formatters[r];
                var a = h.filter;
                if (typeof t.filter === "function" || c(t.filter)) {
                    a = t.filter
                }
                return {
                    addQueryPrefix: typeof t.addQueryPrefix === "boolean" ? t.addQueryPrefix : h.addQueryPrefix,
                    allowDots: typeof t.allowDots === "undefined" ? h.allowDots : !!t.allowDots,
                    charset: s,
                    charsetSentinel: typeof t.charsetSentinel === "boolean" ? t.charsetSentinel : h.charsetSentinel,
                    delimiter: typeof t.delimiter === "undefined" ? h.delimiter : t.delimiter,
                    encode: typeof t.encode === "boolean" ? t.encode : h.encode,
                    encoder: typeof t.encoder === "function" ? t.encoder : h.encoder,
                    encodeValuesOnly: typeof t.encodeValuesOnly === "boolean" ? t.encodeValuesOnly : h.encodeValuesOnly,
                    filter: a,
                    format: r,
                    formatter: o,
                    serializeDate: typeof t.serializeDate === "function" ? t.serializeDate : h.serializeDate,
                    skipNulls: typeof t.skipNulls === "boolean" ? t.skipNulls : h.skipNulls,
                    sort: typeof t.sort === "function" ? t.sort : null,
                    strictNullHandling: typeof t.strictNullHandling === "boolean" ? t.strictNullHandling : h.strictNullHandling
                }
            };
            e.exports = function(e, t) {
                var s = e;
                var o = y(t);
                var n;
                var i;
                if (typeof o.filter === "function") {
                    i = o.filter;
                    s = i("", s)
                } else if (c(o.filter)) {
                    i = o.filter;
                    n = i
                }
                var u = [];
                if (typeof s !== "object" || s === null) {
                    return ""
                }
                var d;
                if (t && t.arrayFormat in a) {
                    d = t.arrayFormat
                } else if (t && "indices" in t) {
                    d = t.indices ? "indices" : "repeat"
                } else {
                    d = "indices"
                }
                var p = a[d];
                if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip !== "boolean") {
                    throw new TypeError("`commaRoundTrip` must be a boolean, or absent")
                }
                var h = p === "comma" && t && t.commaRoundTrip;
                if (!n) {
                    n = Object.keys(s)
                }
                if (o.sort) {
                    n.sort(o.sort)
                }
                var m = r();
                for (var f = 0; f < n.length; ++f) {
                    var g = n[f];
                    if (o.skipNulls && s[g] === null) {
                        continue
                    }
                    l(u, b(s[g], g, p, h, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, m))
                }
                var v = u.join(o.delimiter);
                var j = o.addQueryPrefix === true ? "?" : "";
                if (o.charsetSentinel) {
                    if (o.charset === "iso-8859-1") {
                        j += "utf8=%26%2310003%3B&"
                    } else {
                        j += "utf8=%E2%9C%93&"
                    }
                }
                return v.length > 0 ? j + v : ""
            }
        },
        "./node_modules/@udemy/shared-utils/node_modules/qs/lib/utils.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/shared-utils/node_modules/qs/lib/formats.js");
            var o = Object.prototype.hasOwnProperty;
            var n = Array.isArray;
            var i = function() {
                var e = [];
                for (var t = 0; t < 256; ++t) {
                    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase())
                }
                return e
            }();
            var a = function e(t) {
                while (t.length > 1) {
                    var s = t.pop();
                    var r = s.obj[s.prop];
                    if (n(r)) {
                        var o = [];
                        for (var i = 0; i < r.length; ++i) {
                            if (typeof r[i] !== "undefined") {
                                o.push(r[i])
                            }
                        }
                        s.obj[s.prop] = o
                    }
                }
            };
            var c = function e(t, s) {
                var r = s && s.plainObjects ? Object.create(null) : {};
                for (var o = 0; o < t.length; ++o) {
                    if (typeof t[o] !== "undefined") {
                        r[o] = t[o]
                    }
                }
                return r
            };
            var u = function e(t, s, r) {
                if (!s) {
                    return t
                }
                if (typeof s !== "object") {
                    if (n(t)) {
                        t.push(s)
                    } else if (t && typeof t === "object") {
                        if (r && (r.plainObjects || r.allowPrototypes) || !o.call(Object.prototype, s)) {
                            t[s] = true
                        }
                    } else {
                        return [t, s]
                    }
                    return t
                }
                if (!t || typeof t !== "object") {
                    return [t].concat(s)
                }
                var i = t;
                if (n(t) && !n(s)) {
                    i = c(t, r)
                }
                if (n(t) && n(s)) {
                    s.forEach((function(s, n) {
                        if (o.call(t, n)) {
                            var i = t[n];
                            if (i && typeof i === "object" && s && typeof s === "object") {
                                t[n] = e(i, s, r)
                            } else {
                                t.push(s)
                            }
                        } else {
                            t[n] = s
                        }
                    }));
                    return t
                }
                return Object.keys(s).reduce((function(t, n) {
                    var i = s[n];
                    if (o.call(t, n)) {
                        t[n] = e(t[n], i, r)
                    } else {
                        t[n] = i
                    }
                    return t
                }), i)
            };
            var l = function e(t, s) {
                return Object.keys(s).reduce((function(e, t) {
                    e[t] = s[t];
                    return e
                }), t)
            };
            var d = function(e, t, s) {
                var r = e.replace(/\+/g, " ");
                if (s === "iso-8859-1") {
                    return r.replace(/%[0-9a-f]{2}/gi, unescape)
                }
                try {
                    return decodeURIComponent(r)
                } catch (e) {
                    return r
                }
            };
            var p = function e(t, s, o, n, a) {
                if (t.length === 0) {
                    return t
                }
                var c = t;
                if (typeof t === "symbol") {
                    c = Symbol.prototype.toString.call(t)
                } else if (typeof t !== "string") {
                    c = String(t)
                }
                if (o === "iso-8859-1") {
                    return escape(c).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }))
                }
                var u = "";
                for (var l = 0; l < c.length; ++l) {
                    var d = c.charCodeAt(l);
                    if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || a === r.RFC1738 && (d === 40 || d === 41)) {
                        u += c.charAt(l);
                        continue
                    }
                    if (d < 128) {
                        u = u + i[d];
                        continue
                    }
                    if (d < 2048) {
                        u = u + (i[192 | d >> 6] + i[128 | d & 63]);
                        continue
                    }
                    if (d < 55296 || d >= 57344) {
                        u = u + (i[224 | d >> 12] + i[128 | d >> 6 & 63] + i[128 | d & 63]);
                        continue
                    }
                    l += 1;
                    d = 65536 + ((d & 1023) << 10 | c.charCodeAt(l) & 1023);
                    u += i[240 | d >> 18] + i[128 | d >> 12 & 63] + i[128 | d >> 6 & 63] + i[128 | d & 63]
                }
                return u
            };
            var h = function e(t) {
                var s = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }];
                var r = [];
                for (var o = 0; o < s.length; ++o) {
                    var n = s[o];
                    var i = n.obj[n.prop];
                    var c = Object.keys(i);
                    for (var u = 0; u < c.length; ++u) {
                        var l = c[u];
                        var d = i[l];
                        if (typeof d === "object" && d !== null && r.indexOf(d) === -1) {
                            s.push({
                                obj: i,
                                prop: l
                            });
                            r.push(d)
                        }
                    }
                }
                a(s);
                return t
            };
            var m = function e(t) {
                return Object.prototype.toString.call(t) === "[object RegExp]"
            };
            var f = function e(t) {
                if (!t || typeof t !== "object") {
                    return false
                }
                return !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
            };
            var b = function e(t, s) {
                return [].concat(t, s)
            };
            var y = function e(t, s) {
                if (n(t)) {
                    var r = [];
                    for (var o = 0; o < t.length; o += 1) {
                        r.push(s(t[o]))
                    }
                    return r
                }
                return s(t)
            };
            e.exports = {
                arrayToObject: c,
                assign: l,
                combine: b,
                compact: h,
                decode: d,
                encode: p,
                isBuffer: f,
                isRegExp: m,
                maybeMap: y,
                merge: u
            }
        },
        "./node_modules/@udemy/shopping/dist/esm/index.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
            var o = s.n(r);
            var n = s("./node_modules/mobx/lib/mobx.module.js");
            var i = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/tracker.js");
            const a = {
                INVALID: "invalid",
                EXPIRED: "expired",
                SOLD_OUT: "sold_out",
                UNUSED: "unused",
                APPLIED: "applied",
                APPLIED_HIDDEN: "applied_hidden"
            };
            const c = "discountCode";
            const u = "couponCode";
            const l = {
                ADD: "add",
                REMOVE: "remove",
                MOVE: "move"
            };
            var d = s("./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
            var p = s.n(d);
            var h = s("./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
            const m = {
                errors: e => ({
                    default: e("An unknown error occurred."),
                    discount: {
                        invalid: {
                            singular: e("<b>%(code)s</b> is invalid, and has been removed."),
                            plural: e("<b>%(code)s</b> are invalid, and have been removed.")
                        },
                        expired: {
                            singular: e("<b>%(code)s</b> is expired, and has been removed."),
                            plural: e("<b>%(code)s</b> are expired, and have been removed.")
                        },
                        sold_out: {
                            singular: e("<b>%(code)s</b> is sold out, and has been removed."),
                            plural: e("<b>%(code)s</b> are sold out, and have been removed.")
                        }
                    },
                    discountCodeInputFormat: e("The coupon code entered is not valid for this course. Perhaps you used the wrong coupon code?"),
                    discountDuplicated: e("The coupon code entered has already been used.")
                }),
                patterns: {
                    validDiscountCode: /^([a-zA-Z0-9._-]){4,255}$/
                },
                shoppingListNamespaces: ["cartPage", "checkout", "dropdown"],
                shoppingListTypes: ["cart", "express", "saved_for_later", "wishlist"],
                storage: {
                    status: {
                        notReady: "notReady",
                        ready: "ready",
                        unAvailable: "unAvailable"
                    }
                },
                strings: e => ({
                    recommendations: {
                        alsoLike: e("You might also like"),
                        alsoViewed: e("Students Who Viewed This Course Also Viewed"),
                        addedToCartTitle: e("Because you added %(title)s"),
                        categoryBasedTitle: e("Bestsellers in %(title)s"),
                        multipleEnrollmentBasedTitle: e("Based on Your Enrollments"),
                        frequentlyBoughtTitle: e("Frequently Bought Together with %(title)s"),
                        labelTitle: e("Bestsellers in %(title)s"),
                        labelClusterTitle: e("Bestsellers in %(title)s"),
                        recentlyViewedTitle: e("Recently viewed"),
                        moreFromInstructor: e("More from this Instructor"),
                        singleEnrollmentBasedTitle: e("Because you enrolled in %(title)s"),
                        wishlistTitle: e("Wishlist")
                    },
                    exploreAction: {
                        cartSuccess: e("Go to Cart"),
                        purchaseSuccess: e("Discover More Courses"),
                        singlePurchase: e("Go to course")
                    }
                }),
                timing: {
                    notificationHide: 1e4
                },
                urls: {
                    cartAPI: "/shopping-carts/me/",
                    cartSuccess: "/cart/",
                    expressCheckoutAPI: "/shopping-carts/me/express/",
                    paymentSuccessErrorRedirect: "/home/my-courses/",
                    paymentSuccessPage(e) {
                        return `/cart/success/${e}/`
                    },
                    purchaseSuccess: "/"
                },
                urlParams: {
                    buyableObjectType: "boType",
                    buyableObjectId: "boId"
                }
            };
            const f = {
                DISPLAY: "display",
                INPUT: "input",
                OFF: "off",
                PENDING: "pending"
            };
            var b, y, g, v, j, _, w, C, O, E;
            let S = (b = class e {
                constructor(e) {
                    this.i18n = e;
                    p()(this, "currentMode", y, this);
                    p()(this, "inputCode", g, this);
                    p()(this, "submittedCode", v, this);
                    p()(this, "error", j, this);
                    p()(this, "currentCodes", _, this);
                    p()(this, "currentDiscounts", w, this);
                    p()(this, "hasAlreadyPurchased", C, this);
                    p()(this, "enterInputMode", O, this);
                    p()(this, "enterLoadingMode", E, this)
                }
                get isValidInputCode() {
                    return m.patterns.validDiscountCode.test(this.inputCode)
                }
                _updateBaseCouponInternalState(e) {
                    this.submittedCode = this.inputCode;
                    const t = m.errors(this.i18n.gettext);
                    this.error = t.discountCodeInputFormat;
                    this.currentMode = f.INPUT;
                    this.inputCode = "";
                    if (e) {
                        this.error = e.length ? e[0].details : ""
                    }
                }
                setCode(e) {
                    this.inputCode = e.trim().toUpperCase();
                    if (this.error) {
                        this.error = ""
                    }
                    if (this.submittedCode) {
                        this.submittedCode = ""
                    }
                }
                get allowSubmit() {
                    return this.currentMode === f.INPUT && !this.currentCodes.includes(this.inputCode)
                }
            }, y = o()(b.prototype, "currentMode", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return f.OFF
                }
            }), g = o()(b.prototype, "inputCode", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return ""
                }
            }), v = o()(b.prototype, "submittedCode", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return ""
                }
            }), j = o()(b.prototype, "error", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return ""
                }
            }), _ = o()(b.prototype, "currentCodes", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return []
                }
            }), w = o()(b.prototype, "currentDiscounts", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return new Map
                }
            }), C = o()(b.prototype, "hasAlreadyPurchased", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), O = o()(b.prototype, "enterInputMode", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return () => {
                        this.currentMode = f.INPUT
                    }
                }
            }), E = o()(b.prototype, "enterLoadingMode", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return () => {
                        this.currentMode = f.PENDING
                    }
                }
            }), o()(b.prototype, "isValidInputCode", [n["g"]], Object.getOwnPropertyDescriptor(b.prototype, "isValidInputCode"), b.prototype), o()(b.prototype, "_updateBaseCouponInternalState", [n["e"]], Object.getOwnPropertyDescriptor(b.prototype, "_updateBaseCouponInternalState"), b.prototype), o()(b.prototype, "setCode", [n["e"]], Object.getOwnPropertyDescriptor(b.prototype, "setCode"), b.prototype), o()(b.prototype, "allowSubmit", [n["g"]], Object.getOwnPropertyDescriptor(b.prototype, "allowSubmit"), b.prototype), b);
            var x = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/event-common.js");
            class P extends x["a"] {
                constructor(e, t, s) {
                    super("CouponApplyEvent");
                    this.buyables = e;
                    this.couponCode = t;
                    this.applicationMethod = s
                }
            }
            class T extends x["a"] {
                constructor(e, t) {
                    super("CouponRemoveEvent");
                    this.buyables = e;
                    this.couponCode = t
                }
            }
            var I;
            let k = (I = class e extends S {
                constructor(e, t) {
                    super(t);
                    this.shoppingClient = e
                }
                initialize() {
                    this._updateState()
                }
                _updateCurrentCodes() {
                    this.currentCodes = this.shoppingClient.discounts.attempts.filter((e => e.status === a.APPLIED)).map((e => e.code))
                }
                _updateCurrentDiscounts() {
                    this.shoppingClient.discounts.attempts.filter((e => e.status === a.APPLIED)).map((e => this.currentDiscounts.set(e.code, e.amount)))
                }
                updateDiscountState() {
                    this._updateCurrentCodes();
                    this._updateCurrentDiscounts()
                }
                _updateState() {
                    this.updateDiscountState();
                    const e = this.shoppingClient.discounts.attempts.filter((e => e.code === this.inputCode));
                    this._updateBaseCouponInternalState(e)
                }
                removeCouponCode(e) {
                    return () => {
                        this.enterLoadingMode();
                        this.shoppingClient.removeDiscounts([e]).then((() => {
                            this.updateDiscountState();
                            this.enterInputMode();
                            if (this.currentCodes.includes(this.submittedCode)) {
                                Object(n["w"])((() => {
                                    this.submittedCode = "";
                                    this.error = ""
                                }))
                            }
                            this._publishCouponRemoveEvent(e)
                        }))
                    }
                }
                applyInputCode() {
                    if (!this.isValidInputCode) {
                        this._updateBaseCouponInternalState();
                        return Promise.resolve()
                    }
                    this.enterLoadingMode();
                    return this.shoppingClient.applyDiscounts([this.inputCode]).then((() => {
                        this._publishCouponApplyEvent(this.inputCode);
                        this._updateState()
                    }))
                }
                _publishCouponApplyEvent(e) {
                    i["a"].publishEvent(new P(this._getBuyables(), e, "manual_entry"))
                }
                _publishCouponRemoveEvent(e) {
                    i["a"].publishEvent(new T(this._getBuyables(), e))
                }
                _getBuyables() {
                    return this.shoppingClient.lists.cart.items.map((e => ({
                        id: e.buyable.id,
                        type: e.buyable.buyable_object_type,
                        trackingId: e.buyable.frontendTrackingId
                    })))
                }
            }, o()(I.prototype, "_updateCurrentCodes", [n["e"]], Object.getOwnPropertyDescriptor(I.prototype, "_updateCurrentCodes"), I.prototype), o()(I.prototype, "_updateCurrentDiscounts", [n["e"]], Object.getOwnPropertyDescriptor(I.prototype, "_updateCurrentDiscounts"), I.prototype), I);
            var D = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            class R extends x["a"] {
                constructor(e) {
                    let {
                        context: t
                    } = e;
                    super("PriceImpressionEvent");
                    this.priceServeTrackingId = void 0;
                    this.buyableTrackingId = void 0;
                    this.context = void 0;
                    this.currency = void 0;
                    this.listPrice = void 0;
                    this.discountPrice = void 0;
                    this.displayedPrice = void 0;
                    this.priceType = void 0;
                    this.buyableType = void 0;
                    this.buyableId = void 0;
                    this.priceServeTrackingId = t.priceServeTrackingId;
                    this.buyableTrackingId = t.buyableTrackingId;
                    this.context = t.context;
                    this.currency = t.currency;
                    this.listPrice = t.listPrice;
                    this.discountPrice = t.discountPrice;
                    this.displayedPrice = t.displayedPrice;
                    this.priceType = t.priceType;
                    this.buyableType = t.buyableType;
                    this.buyableId = t.buyableId
                }
            }
            const A = async e => {
                if (e.trackingEventContext) {
                    var t;
                    const s = Object(D["e"])(e.listPrice, 0).toFixed(2);
                    const r = Object(D["e"])(e.discountPrice, 0).toFixed(2);
                    const o = !e.showListPriceOnly && (e.discountPriceString || r || "0") || e.listPriceString || s;
                    const n = {
                        priceServeTrackingId: e.trackingEventContext.priceServeTrackingId,
                        context: (t = e.funnelLogContextStore) === null || t === void 0 ? void 0 : t.context,
                        listPrice: s,
                        discountPrice: r,
                        displayedPrice: o,
                        buyableType: e.trackingEventContext.buyableType,
                        buyableId: e.trackingEventContext.buyableId,
                        priceType: e.trackingEventContext.priceType,
                        buyableTrackingId: e.trackingEventContext.buyableTrackingId
                    };
                    const a = new R({
                        context: n
                    });
                    i["a"].publishEvent(a)
                }
            };

            function L(e, t) {
                return e.reduce(((e, s) => e.concat(t(s))), [])
            }

            function N(e) {
                const t = e.toString();
                let s = t.length > 0 ? `${window.location.pathname}?${t}` : window.location.pathname;
                if (window.location.hash) {
                    s = `${s}${window.location.hash}`
                }
                window.history.replaceState({}, "", s)
            }

            function M(e) {
                const t = t => e.get(t) ? e.get(t).split(",") : [];
                return {
                    get: () => [...new Set(L([u, c], t))],
                    remove: () => {
                        e.delete(c);
                        e.delete(u);
                        N(e)
                    },
                    add: function() {
                        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        if (!t.length) {
                            return
                        }
                        e.set(u, t.join(","));
                        N(e)
                    }
                }
            }
            var U = s("./node_modules/@udemy/shared-utils/dist/esm/storage/ud-expiring-local-storage.js");
            var B = s("./node_modules/@udemy/shared-utils/dist/esm/webview/webview-bridge.js");
            var F = s("./node_modules/@udemy/shared-utils/dist/esm/env/is-mobile-app.js");
            var q;
            const H = new n["b"];
            let W = (q = class e {
                constructor(e) {
                    this.type = e;
                    this.pop = false;
                    this.lastMessage = n["s"].box(null);
                    Object(n["t"])(this, "onMessageInternal", (e => {
                        if (this.pop && e.newValue) {
                            Object(n["w"])((() => {
                                this.lastMessage.set(e.newValue)
                            }));
                            return
                        }
                        this.popLastMessage()
                    }))
                }
                get messages() {
                    var e;
                    if (!H.get(this.type)) {
                        return []
                    }
                    return (e = H.get(this.type)) !== null && e !== void 0 ? e : []
                }
                get onMessageInternal() {
                    const e = H.get(this.type);
                    if (!e) {
                        return null
                    }
                    this.pop = true;
                    return e[e.length - 1]
                }
                get onMessage() {
                    return this.lastMessage.get()
                }
                sendMessage(e) {
                    let t = [];
                    if (H.has(this.type)) {
                        t = H.get(this.type)
                    }
                    t.push(e);
                    H.set(this.type, t)
                }
                clear() {
                    this.lastMessage.set(null);
                    H.delete(this.type)
                }
                popLastMessage() {
                    let e = [];
                    if (H.has(this.type)) {
                        e = H.get(this.type)
                    }
                    e.pop();
                    H.set(this.type, e);
                    this.pop = false
                }
            }, o()(q.prototype, "messages", [n["g"]], Object.getOwnPropertyDescriptor(q.prototype, "messages"), q.prototype), o()(q.prototype, "onMessageInternal", [n["g"]], Object.getOwnPropertyDescriptor(q.prototype, "onMessageInternal"), q.prototype), o()(q.prototype, "onMessage", [n["g"]], Object.getOwnPropertyDescriptor(q.prototype, "onMessage"), q.prototype), o()(q.prototype, "sendMessage", [n["e"]], Object.getOwnPropertyDescriptor(q.prototype, "sendMessage"), q.prototype), o()(q.prototype, "clear", [n["e"]], Object.getOwnPropertyDescriptor(q.prototype, "clear"), q.prototype), o()(q.prototype, "popLastMessage", [n["e"]], Object.getOwnPropertyDescriptor(q.prototype, "popLastMessage"), q.prototype), q);

            function z(e) {
                return new W(e)
            }
            class V {
                constructor(e, t) {
                    this.buyables = void 0;
                    this.purchasePrice = void 0;
                    this.buyables = e;
                    this.purchasePrice = t
                }
                toJSON() {
                    return JSON.stringify({
                        buyables: this.buyables,
                        purchasePrice: this.purchasePrice
                    })
                }
            }
            class K {
                constructor(e, t) {
                    this.methodName = "onEnrolled";
                    this.payload = void 0;
                    this.payload = new V(e, t)
                }
                sendLegacyAndroidMessage(e) {
                    if (typeof e.onEnrolledAdditionalData === "function") {
                        e.onEnrolledAdditionalData(this.payload.toJSON())
                    } else if (typeof e.onEnrolled === "function") {
                        e.onEnrolled(JSON.stringify(this.payload.buyables))
                    }
                }
            }
            var Q;
            let G = (Q = class e {
                constructor(e) {
                    this.state = void 0;
                    this.state = Object(n["s"])({
                        attempts: e !== null && e !== void 0 ? e : n["s"].array()
                    })
                }
                get attempts() {
                    return this.state.attempts
                }
                get latest() {
                    return this.state.attempts[0]
                }
                get codes() {
                    return this.state.attempts.map((e => e.code))
                }
                get invalidCodes() {
                    return this.getCodesByStatus("invalid")
                }
                get expiredCodes() {
                    return this.getCodesByStatus("expired")
                }
                get soldOutCodes() {
                    return this.getCodesByStatus("sold_out")
                }
                clear() {
                    this.state.attempts.clear()
                }
                getCodesByStatus(e) {
                    return this.state.attempts.filter((t => t.status == e)).map((e => e.code))
                }
            }, o()(Q.prototype, "attempts", [n["g"]], Object.getOwnPropertyDescriptor(Q.prototype, "attempts"), Q.prototype), o()(Q.prototype, "latest", [n["g"]], Object.getOwnPropertyDescriptor(Q.prototype, "latest"), Q.prototype), o()(Q.prototype, "codes", [n["g"]], Object.getOwnPropertyDescriptor(Q.prototype, "codes"), Q.prototype), o()(Q.prototype, "invalidCodes", [n["g"]], Object.getOwnPropertyDescriptor(Q.prototype, "invalidCodes"), Q.prototype), o()(Q.prototype, "expiredCodes", [n["g"]], Object.getOwnPropertyDescriptor(Q.prototype, "expiredCodes"), Q.prototype), o()(Q.prototype, "soldOutCodes", [n["g"]], Object.getOwnPropertyDescriptor(Q.prototype, "soldOutCodes"), Q.prototype), o()(Q.prototype, "clear", [n["e"]], Object.getOwnPropertyDescriptor(Q.prototype, "clear"), Q.prototype), Q);
            var $, Y, J, X, Z;
            let ee = ($ = class e {
                constructor(e, t, s) {
                    this.state = void 0;
                    p()(this, "setItems", Y, this);
                    p()(this, "add", J, this);
                    p()(this, "remove", X, this);
                    p()(this, "clear", Z, this);
                    this.state = Object(n["s"])({
                        name: e,
                        addAttempts: n["s"].array(),
                        removeAttempts: n["s"].array(),
                        items: t !== null && t !== void 0 ? t : n["s"].array(),
                        unseenCount: n["s"].box(s !== null && s !== void 0 ? s : 0)
                    })
                }
                finishAttempt(e, t) {
                    return Object(n["e"])((() => {
                        const s = t.find((t => t.buyable.id === e.buyable.id));
                        if (s) {
                            t.remove(s)
                        }
                    }))
                }
                get name() {
                    return this.state.name
                }
                get unseenCount() {
                    return this.state.unseenCount.get()
                }
                set unseenCount(e) {
                    Object(n["w"])((() => {
                        this.state.unseenCount.set(e)
                    }))
                }
                get items() {
                    const e = e => {
                        const t = {};
                        e.forEach((e => {
                            const s = e.buyable.id;
                            t[s] = (t[s] || 0) + 1
                        }));
                        return t
                    };
                    const t = e(this.state.items);
                    const s = e(this.state.addAttempts);
                    const r = e(this.state.removeAttempts);
                    const o = new Set;
                    const n = [];
                    this.state.addAttempts.concat(this.state.items).forEach((e => {
                        const i = e.buyable.id;
                        if (!o.has(i)) {
                            o.add(i);
                            const a = (t[i] || 0) + (s[i] || 0) - (r[i] || 0);
                            if (a > 0) {
                                n.push(e)
                            }
                        }
                    }));
                    return n
                }
                get isEmpty() {
                    return this.items.length === 0
                }
                findItemByBuyable(e, t) {
                    return this.items.find((s => s.buyable && s.buyable.buyable_object_type === e && s.buyable.id === t)) || null
                }
                hasBuyable(e, t) {
                    return Boolean(this.findItemByBuyable(e, t))
                }
                hasBuyables(e) {
                    return e.length > 0 && e.every((e => this.hasBuyable(e.buyable_object_type, e.id)))
                }
                get hasPendingOperations() {
                    return this.state.addAttempts.length > 0 || this.state.removeAttempts.length > 0
                }
                get purchasePriceAmount() {
                    return te(this.items, "purchase_price")
                }
                get listPriceAmount() {
                    return te(this.items, "list_price")
                }
                get discountAmount() {
                    const e = this.items.filter((e => e.current_discount && e.current_discount.saving_price)).map((e => e.current_discount));
                    if (!e.length) {
                        return 0
                    }
                    return -te(e, "saving_price")
                }
                get discountPercentage() {
                    const e = this.listPriceAmount;
                    return e ? Math.round(100 * (1 - this.purchasePriceAmount / e)) : 0
                }
            }, o()($.prototype, "name", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "name"), $.prototype), o()($.prototype, "unseenCount", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "unseenCount"), $.prototype), o()($.prototype, "items", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "items"), $.prototype), Y = o()($.prototype, "setItems", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return e => {
                        this.state.items.clear();
                        this.state.items.replace(e)
                    }
                }
            }), o()($.prototype, "isEmpty", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "isEmpty"), $.prototype), o()($.prototype, "hasPendingOperations", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "hasPendingOperations"), $.prototype), J = o()($.prototype, "add", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return e => {
                        this.state.addAttempts.unshift(e);
                        return this.finishAttempt(e, this.state.addAttempts)
                    }
                }
            }), X = o()($.prototype, "remove", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return e => {
                        this.state.removeAttempts.push(e);
                        return this.finishAttempt(e, this.state.removeAttempts)
                    }
                }
            }), Z = o()($.prototype, "clear", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return () => {
                        this.state.items.clear();
                        this.state.addAttempts.clear();
                        this.state.removeAttempts.clear()
                    }
                }
            }), o()($.prototype, "purchasePriceAmount", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "purchasePriceAmount"), $.prototype), o()($.prototype, "listPriceAmount", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "listPriceAmount"), $.prototype), o()($.prototype, "discountAmount", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "discountAmount"), $.prototype), o()($.prototype, "discountPercentage", [n["g"]], Object.getOwnPropertyDescriptor($.prototype, "discountPercentage"), $.prototype), $);

            function te(e, t) {
                return e.reduce(((e, s) => {
                    var r;
                    return e + parseFloat(String((r = s[t]) === null || r === void 0 ? void 0 : r.amount))
                }), 0)
            }
            var se;

            function re(e) {
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "value";
                if (!e) {
                    throw new Error(`Attempting to access ${t} before is has been set`)
                }
                return e
            }
            const oe = "reload";
            let ne = (se = class e {
                constructor(e) {
                    this.storage = e;
                    this.NOTICE_REFRESH_EXPIRATION_DATE = new Date(Date.now() + 10 * 60 * 1e3);
                    this.noticesApiLocalStorage = Object(U["a"])("notices", "api", this.NOTICE_REFRESH_EXPIRATION_DATE);
                    this.webviewBridge = new B["a"];
                    this.removeDiscountPromise = null;
                    this.userId = void 0;
                    this.state = void 0;
                    this.couponStore = null;
                    this._i18n = void 0;
                    this._udLink = void 0;
                    this.state = {
                        credit: this.storage.credit,
                        discounts: new G(this.storage.discounts),
                        lists: {
                            cart: new ee("cart", this.storage.lists.cart),
                            wishlist: new ee("wishlist", e.lists.wishlist),
                            saved_for_later: new ee("saved_for_later", e.lists.saved_for_later),
                            express: new ee("express", e.lists.express),
                            checkout: new ee("checkout", n["s"].array())
                        }
                    };
                    try {
                        var t;
                        const e = window.sessionStorage.getItem("checkoutItems");
                        const s = (t = JSON.parse(e)) !== null && t !== void 0 ? t : [];
                        this.state.lists.checkout = new ee("checkout", s)
                    } catch (e) {
                        this.state.lists.checkout = new ee("checkout", n["s"].array())
                    }
                }
                initialize(e) {
                    this._i18n = e.i18n;
                    this._udLink = e.udLink;
                    this.storage.setIsFeatureEnabled(e.isShoppingCartFeatureEnabled)
                }
                get i18n() {
                    return re(this._i18n)
                }
                get udLink() {
                    return re(this._udLink)
                }
                get credit() {
                    return this.state.credit
                }
                get discounts() {
                    return this.state.discounts
                }
                get lists() {
                    return this.state.lists
                }
                get status() {
                    return this.storage.status
                }
                get availableCoupons() {
                    return this.storage.availableCoupons
                }
                get hasPendingOperations() {
                    return Object.keys(this.state.lists).some((e => this.state.lists[e].hasPendingOperations))
                }
                setUserId(e) {
                    this.userId = e;
                    this.storage.setUserId(e)
                }
                addToList(e, t) {
                    let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    const r = Object.values(t).map((e => ({
                        buyable: {
                            buyable_object_type: e.buyable_object_type,
                            id: e.id
                        }
                    })));
                    return this.storage.addItems(e, r, s).then((() => {
                        if (["cart", "wishlist"].includes(e)) {
                            this.noticesApiLocalStorage = Object(U["a"])("notices", "api");
                            this.noticesApiLocalStorage.delete(oe)
                        }
                    }))
                }
                cancelCheckout() {
                    z("notifications").sendMessage("checkoutCancel")
                }
                notify(e) {
                    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    const s = {
                        message: typeof e === "string" ? e : e.message,
                        options: t
                    };
                    z("notifications").sendMessage(s)
                }
                removeFromList(e, t) {
                    const s = () => {
                        this.state.lists[e].remove(t);
                        if (this.couponStore) {
                            this.couponStore.updateDiscountState()
                        }
                        if (["cart", "wishlist"].includes(e) && this.state.lists[e].isEmpty) {
                            this.noticesApiLocalStorage.set(oe, true)
                        }
                    };
                    return this.storage.removeItem(e, t).then((() => {
                        s();
                        return Promise.resolve(true)
                    })).catch((() => {
                        this.state.lists[e].add(t)();
                        s();
                        return Promise.reject(false)
                    }))
                }
                moveToList(e, t, s) {
                    const r = () => {
                        this.state.lists[t].add(s);
                        this.state.lists[e].remove(s);
                        if (this.couponStore) {
                            this.couponStore.updateDiscountState()
                        }
                    };
                    return this.storage.addItems(t, [s]).then((() => {
                        r();
                        return Promise.resolve(true)
                    })).catch((() => {
                        r();
                        return Promise.reject(false)
                    }))
                }
                fetch() {
                    return this.storage.fetch()
                }
                applyDiscounts(e) {
                    if (!e || !e.length) {
                        return Promise.resolve(true)
                    }
                    const t = e.map((e => e.toUpperCase()));
                    return this.storage.applyDiscounts(t)
                }
                removeDiscounts(e) {
                    if (!e || !e.length) {
                        return Promise.resolve(true)
                    }
                    return this.storage.removeDiscounts(e)
                }
                validateDiscounts() {
                    if (this.removeDiscountPromise) {
                        return this.removeDiscountPromise
                    }
                    const e = {};
                    const t = (t, s) => {
                        if (s.length > 0) {
                            e[t] = s
                        }
                    };
                    t("invalid", this.state.discounts.invalidCodes);
                    t("expired", this.state.discounts.expiredCodes);
                    t("sold_out", this.state.discounts.soldOutCodes);
                    Object.entries(e).forEach((e => {
                        let [t, s] = e;
                        const r = m.errors(this.i18n.gettext);
                        const o = t;
                        const n = r.discount[o][s.length > 1 ? "plural" : "singular"];
                        const i = this.i18n.interpolate(n, {
                            code: s.join(", ")
                        }, true);
                        this.notify(i, {
                            reason: t
                        })
                    }));
                    this.removeDiscountPromise = this.removeDiscounts([].concat(...Object.values(e)));
                    return this.removeDiscountPromise.then((e => {
                        this.removeDiscountPromise = null;
                        return e
                    }))
                }
                get isCheckoutAvailable() {
                    return Boolean(this.state.lists.checkout && !this.state.lists.checkout.isEmpty && this.userId)
                }
                freezeCheckoutList(e) {
                    this.state.lists.checkout.setItems([...this.state.lists[e].items]);
                    window.sessionStorage.setItem("checkoutItems", JSON.stringify(this.state.lists.checkout.items))
                }
                completeCheckout(e) {
                    const t = this.state.lists.checkout.items.map((e => e.buyable));
                    this.resetCheckoutList();
                    return this.storage.clearDiscounts().then((() => {
                        this.performTerminalAction(e, t)
                    }))
                }
                setExpressCheckoutListFromItem(e) {
                    this.resetCheckoutList();
                    const t = [{
                        buyable: {
                            id: e.buyableObjectId,
                            buyable_object_type: e.buyableObjectType
                        }
                    }];
                    const s = e.codes;
                    return this.storage.createExpressCheckoutSession(t, s).then((() => {
                        this.freezeCheckoutList("express");
                        return Promise.resolve(true)
                    }))
                }
                getCheckoutData() {
                    return new Promise((e => e({
                        isPaymentRequired: this.isCheckoutAvailable && this.state.lists.checkout.purchasePriceAmount - this.state.credit.amount > 0,
                        items: this.createCheckoutAttemptData(this.state.lists.checkout)
                    })))
                }
                getTotalDue() {
                    return Math.max(this.lists.checkout.purchasePriceAmount - this.credit.amount, 0)
                }
                resetCheckoutList() {
                    this.state.lists.checkout.clear();
                    window.sessionStorage.removeItem("checkoutItems")
                }
                performTerminalAction(e, t) {
                    if (Object(F["a"])()) {
                        this.webviewBridge.sendMessage(new K(t, e.purchasePrice.price.toString()))
                    } else {
                        const t = e.redirect_url ? e.redirect_url : this.udLink.to(m.urls.paymentSuccessPage(e.gatewayTransactionId));
                        window.location.href = t
                    }
                }
                createCheckoutAttemptData(e) {
                    const t = e.items.map((e => {
                        let t = undefined;
                        if (e.current_discount && e.current_discount.code) {
                            t = {
                                code: e.current_discount.code
                            }
                        }
                        const s = {
                            discountInfo: t,
                            purchasePrice: e.purchase_price
                        };
                        let r = e.buyable;
                        if (e.buyable.buyable_object_type === "license") {
                            s.licenseId = e.buyable.id;
                            r = e.buyable.course
                        } else if (e.buyable.buyable_object_type === "gift") {
                            s.giftId = e.buyable.id;
                            r = e.buyable.course
                        }
                        s.buyableType = r.buyable_object_type;
                        s.buyableId = r.id;
                        return s
                    }));
                    return {
                        items: t
                    }
                }
            }, o()(se.prototype, "credit", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "credit"), se.prototype), o()(se.prototype, "discounts", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "discounts"), se.prototype), o()(se.prototype, "lists", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "lists"), se.prototype), o()(se.prototype, "status", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "status"), se.prototype), o()(se.prototype, "availableCoupons", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "availableCoupons"), se.prototype), o()(se.prototype, "hasPendingOperations", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "hasPendingOperations"), se.prototype), o()(se.prototype, "setUserId", [n["e"]], Object.getOwnPropertyDescriptor(se.prototype, "setUserId"), se.prototype), o()(se.prototype, "isCheckoutAvailable", [n["g"]], Object.getOwnPropertyDescriptor(se.prototype, "isCheckoutAvailable"), se.prototype), o()(se.prototype, "getTotalDue", [n["e"]], Object.getOwnPropertyDescriptor(se.prototype, "getTotalDue"), se.prototype), se);
            var ie = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/helpers.js");
            var ae = s("./node_modules/@udemy/shared-utils/dist/esm/env/ud-performance.js");
            var ce = s("./node_modules/@udemy/ud-api/dist/esm/index.js");
            var ue, le, de, pe;
            let he = (ue = class e {
                constructor() {
                    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                    this.retryLimit = e;
                    p()(this, "commands", le, this);
                    p()(this, "add", de, this);
                    p()(this, "endCurrent", pe, this);
                    Object(n["f"])((() => {
                        if (this.currentCommand) {
                            this.currentCommand.run()
                        }
                    }))
                }
                get currentCommand() {
                    return this.commands.length > 0 ? this.commands[0] : null
                }
            }, le = o()(ue.prototype, "commands", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return []
                }
            }), o()(ue.prototype, "currentCommand", [n["g"]], Object.getOwnPropertyDescriptor(ue.prototype, "currentCommand"), ue.prototype), de = o()(ue.prototype, "add", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return (e, t) => {
                        const s = me(e, t, this.retryLimit, this.endCurrent);
                        this.commands.push(s);
                        return s.promise
                    }
                }
            }), pe = o()(ue.prototype, "endCurrent", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return () => {
                        this.commands.shift()
                    }
                }
            }), ue);

            function me(e, t, s, r) {
                const o = {
                    deferred: fe(),
                    command: Object(n["e"])(e),
                    resolver: t,
                    triesLeft: s,
                    onComplete: r
                };
                const i = {
                    promise: o.deferred.promise,
                    actions: {
                        resolve: e => {
                            o.onComplete();
                            o.deferred.resolve(e)
                        },
                        reject: e => {
                            o.onComplete();
                            o.deferred.reject(e)
                        },
                        retry: Object(n["e"])((e => {
                            o.triesLeft--;
                            if (o.triesLeft > 0) {
                                return i.run()
                            }
                            o.onComplete();
                            o.deferred.reject(e)
                        }))
                    },
                    run: Object(n["e"])((() => {
                        e().then(i.actions.resolve, (e => o.resolver(i, e)))
                    }))
                };
                return i
            }

            function fe() {
                const e = {};
                e.promise = new Promise(((t, s) => {
                    e.resolve = t;
                    e.reject = s
                }));
                return e
            }
            var be, ye, ge, ve;
            let je = (be = class e {
                constructor() {
                    var e, t = this;
                    this.defaultState = {
                        etag: null,
                        credit: {
                            amount: 0
                        },
                        discounts: n["s"].array(),
                        lists: {
                            cart: n["s"].array(),
                            express: n["s"].array(),
                            saved_for_later: n["s"].array(),
                            wishlist: n["s"].array()
                        },
                        unseenCounts: {
                            cart: 0,
                            express: 0,
                            saved_for_later: 0,
                            wishlist: 0
                        },
                        userId: null,
                        availableCoupons: []
                    };
                    this.now = new Date;
                    this.expirationDate = new Date(this.now.setDate(this.now.getDate() + 30));
                    this.storage = Object(U["a"])("shoppingCartStorage", "storage-1.0", this.expirationDate);
                    this.state = Object(n["s"])({ ...(e = this.storage.get("state")) !== null && e !== void 0 ? e : this.defaultState
                    });
                    this.queue = new he;
                    this.status = n["s"].box(m.storage.status.notReady);
                    p()(this, "isShoppingCartFeatureEnabled", ye, this);
                    this.fetch = () => {
                        if (!this.isShoppingCartFeatureEnabled || !this.state.userId && !this.state.etag) {
                            Object(n["w"])((() => {
                                this.status.set(m.storage.status.ready)
                            }));
                            return Promise.resolve(true)
                        }
                        const e = Object(ae["a"])();
                        e.start("_cartApi");
                        const t = new URLSearchParams(window.location.search);
                        return this.makeDeferredRequest({
                            method: "get",
                            url: m.urls.cartAPI,
                            params: Object.fromEntries(t)
                        }).then(Object(n["e"])((() => {
                            e.end("_cartApi");
                            this.status.set(m.storage.status.ready)
                        }))).catch(Object(n["e"])((() => {
                            this.status.set(m.storage.status.unAvailable)
                        })))
                    };
                    this.addItems = function(e, s) {
                        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                        const o = {
                            method: "post",
                            url: t.buildSessionUrl(e),
                            data: {
                                buyables: s.map((e => e.buyable)),
                                context: r
                            }
                        };
                        const n = e => ({
                            id: e.id,
                            buyable_object_type: e.buyable_object_type
                        });
                        const i = (t, s) => {
                            const r = s[e].map((e => n(e.buyable)));
                            const o = e => {
                                let {
                                    id: t,
                                    buyable_object_type: s
                                } = e;
                                return !!r.find((e => e.id === t && e.buyable_object_type === s))
                            };
                            t.data.buyables = t.data.buyables.filter((e => !o(n(e))));
                            return t.data.buyables.length === 0
                        };
                        return t.makeDeferredRequest(o, i)
                    };
                    this.removeItem = (e, t) => {
                        const s = t.buyable;
                        const r = {
                            method: "delete",
                            params: {
                                boId: s.id,
                                boType: s.buyable_object_type
                            },
                            url: this.buildSessionUrl(e)
                        };
                        const o = (t, s) => {
                            var r;
                            const o = ((r = s[e]) !== null && r !== void 0 ? r : []).map((e => e.buyable));
                            const n = t.params[m.urlParams.buyableObjectType];
                            const i = t.params[m.urlParams.buyableObjectId];
                            const a = o.find((e => e.buyable_object_type === n && e.id === i));
                            return !a
                        };
                        return this.makeDeferredRequest(r, o)
                    };
                    this.applyDiscounts = function() {
                        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        const s = (t, s) => {
                            const r = s.discount_attempts.map((e => e.code));
                            const o = e.every((e => r.includes(e)));
                            return Boolean(o)
                        };
                        return t.makeDeferredRequest({
                            method: "post",
                            data: {
                                codes: e
                            },
                            url: t.buildSessionUrl("discounts")
                        }, s)
                    };
                    this.removeDiscounts = e => this.makeDeferredRequest({
                        method: "delete",
                        params: {
                            codes: e.join(",")
                        },
                        url: this.buildSessionUrl("discounts")
                    });
                    this.clearDiscounts = () => this.makeRequest({
                        method: "delete",
                        url: this.buildSessionUrl("discounts")
                    });
                    this.createExpressCheckoutSession = (e, t) => {
                        const s = {
                            method: "post",
                            data: {
                                buyables: e.map((e => e.buyable))
                            },
                            url: m.urls.expressCheckoutAPI
                        };
                        if (t) {
                            s.data.codes = t
                        }
                        return this.makeRequest(s)
                    };
                    p()(this, "transformResponse", ge, this);
                    this.createShoppingError = e => {
                        var t, s, r;
                        return Promise.reject({
                            canBeResolved: ((t = e.response) === null || t === void 0 ? void 0 : t.status) === 412 || ((s = e.response) === null || s === void 0 ? void 0 : s.status) === 409,
                            httpResponse: e.response,
                            refetchedData: (r = e.response) === null || r === void 0 ? void 0 : r.data
                        })
                    };
                    this.updateHeaders = e => {
                        var t;
                        e.headers = e.headers || {};
                        if (((t = e.method) === null || t === void 0 ? void 0 : t.toLowerCase()) === "get") {
                            e.headers = { ...e.headers,
                                ...Object(ce["a"])()
                            };
                            e.params = { ...e.params,
                                sessionState: this.state.etag || ""
                            }
                        } else if (this.state.etag) {
                            e.headers["If-Match"] = this.state.etag
                        }
                    };
                    p()(this, "updateStateOnSuccess", ve, this);
                    setInterval((() => {
                        this.fetch()
                    }), 54e5)
                }
                get credit() {
                    return this.state.credit
                }
                get discounts() {
                    return this.state.discounts
                }
                get lists() {
                    return this.state.lists
                }
                get availableCoupons() {
                    return this.state.availableCoupons
                }
                setUserId(e) {
                    this.state.userId = e;
                    this.fetch()
                }
                setIsFeatureEnabled(e) {
                    this.isShoppingCartFeatureEnabled = e
                }
                makeDeferredRequest(e, t) {
                    const s = (s, r) => {
                        if (!r.canBeResolved) {
                            s.actions.reject(r);
                            return
                        }
                        const o = t === null || t === void 0 ? void 0 : t(e, r.refetchedData);
                        if (o) {
                            this.updateStateOnSuccess(r.refetchedData);
                            s.actions.resolve(true)
                        } else {
                            s.actions.retry(r)
                        }
                    };
                    return this.queue.add((() => this.makeRequest(e)), s)
                }
                makeRequest(e) {
                    this.updateHeaders(e);
                    return ce["b"].request(e).then(this.transformResponse).catch((e => {
                        this.transformResponse(e.response);
                        throw e
                    })).then(this.updateStateOnSuccess, this.createShoppingError)
                }
                buildSessionUrl(e) {
                    return `${m.urls.cartAPI}${e.replace(/_/g,"-")}/`
                }
            }, ye = o()(be.prototype, "isShoppingCartFeatureEnabled", [n["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return true
                }
            }), o()(be.prototype, "credit", [n["g"]], Object.getOwnPropertyDescriptor(be.prototype, "credit"), be.prototype), o()(be.prototype, "discounts", [n["g"]], Object.getOwnPropertyDescriptor(be.prototype, "discounts"), be.prototype), o()(be.prototype, "lists", [n["g"]], Object.getOwnPropertyDescriptor(be.prototype, "lists"), be.prototype), o()(be.prototype, "availableCoupons", [n["g"]], Object.getOwnPropertyDescriptor(be.prototype, "availableCoupons"), be.prototype), o()(be.prototype, "setUserId", [n["e"]], Object.getOwnPropertyDescriptor(be.prototype, "setUserId"), be.prototype), o()(be.prototype, "setIsFeatureEnabled", [n["e"]], Object.getOwnPropertyDescriptor(be.prototype, "setIsFeatureEnabled"), be.prototype), ge = o()(be.prototype, "transformResponse", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return e => {
                        if (e.headers && e.headers.etag !== this.state.etag) {
                            Object(n["w"])((() => {
                                this.state.etag = e.headers.etag
                            }))
                        }
                        return e
                    }
                }
            }), ve = o()(be.prototype, "updateStateOnSuccess", [n["e"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return e => {
                        var t;
                        if (!e || !e.data) {
                            return Promise.resolve(false)
                        }
                        this.state.discounts.clear();
                        this.state.discounts.replace(e.data.discount_attempts);
                        this.state.credit.amount = e.data.user.id ? e.data.user.credit.amount : 0;
                        this.state.availableCoupons = ((t = e.data.available_coupon_info) === null || t === void 0 ? void 0 : t.coupons) || [];
                        m.shoppingListTypes.forEach((t => {
                            this.state.lists[t].clear();
                            const s = e.data[t];
                            if (s) {
                                _e(s.map((e => e.buyable)))
                            }
                            this.state.lists[t].replace(e.data[t]);
                            this.state.unseenCounts[t] = e.data[`${t}_unseen_count`] || 0
                        }));
                        this.storage.set("state", Object(n["z"])(this.state));
                        return Promise.resolve(true)
                    }
                }
            }), be);

            function _e(e) {
                e.filter((e => !e.frontendTrackingId)).forEach((e => {
                    e.frontendTrackingId = Object(ie["b"])()
                }))
            }
            const we = new ne(new je);
            const Ce = [{
                type: "course",
                buildShoppingItems: e => [e]
            }, {
                type: "bundle",
                buildShoppingItems: e => {
                    const t = Object(n["z"])(e.buyable.courses);
                    const s = [];
                    t.forEach((e => {
                        const t = { ...e
                        };
                        t.buyable = e;
                        s.push(t)
                    }));
                    return s
                }
            }, {
                type: "gift",
                buildShoppingItems: e => {
                    const t = Object(n["z"])(e);
                    t.buyable = t.buyable.course;
                    return [t]
                }
            }, {
                type: "license",
                buildShoppingItems: e => {
                    const t = Object(n["z"])(e);
                    t.buyable = t.buyable.course;
                    return [t]
                }
            }];
            s.d(t, "e", (function() {
                return A
            }));
            s.d(t, "c", (function() {
                return m
            }));
            s.d(t, "b", (function() {
                return M
            }));
            s.d(t, "a", (function() {
                return we
            }));
            s.d(t, "d", (function() {
                return Ce
            }))
        },
        "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/react/index.js");

            function o(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            var n = "function" === typeof Object.is ? Object.is : o,
                i = r.useState,
                a = r.useEffect,
                c = r.useLayoutEffect,
                u = r.useDebugValue;

            function l(e, t) {
                var s = t(),
                    r = i({
                        inst: {
                            value: s,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    n = r[1];
                c((function() {
                    o.value = s;
                    o.getSnapshot = t;
                    d(o) && n({
                        inst: o
                    })
                }), [e, s, t]);
                a((function() {
                    d(o) && n({
                        inst: o
                    });
                    return e((function() {
                        d(o) && n({
                            inst: o
                        })
                    }))
                }), [e]);
                u(s);
                return s
            }

            function d(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var s = t();
                    return !n(e, s)
                } catch (e) {
                    return !0
                }
            }

            function p(e, t) {
                return t()
            }
            var h = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? p : l;
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : h
        },
        "./node_modules/use-sync-external-store/shim/index.js": function(e, t, s) {
            "use strict";
            if (true) {
                e.exports = s("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")
            } else {}
        },
        "./src/udemy/js/base-components/dialog/ajax-modal.less": function(e, t, s) {
            e.exports = {
                "ajax-error": "ajax-modal--ajax-error--xufYN"
            }
        },
        "./src/udemy/js/base-components/dialog/ajax-modal.react-component.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js");
            var o = s.n(r);
            var n = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var i = s("./node_modules/@udemy/react-dialog-components/dist/esm/modal/modal.react-component.js");
            var a = s("./node_modules/autobind-decorator/lib/esm/index.js");
            var c = s("./node_modules/classnames/index.js");
            var u = s.n(c);
            var l = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var d = s("./node_modules/prop-types/index.js");
            var p = s.n(d);
            var h = s("./node_modules/react/index.js");
            var m = s.n(h);
            var f = s("./node_modules/axios/index.js");
            var b = s.n(f);
            var y = s("./node_modules/mobx/lib/mobx.module.js");
            var g = s("./src/udemy/js/utils/get-config-data.js");
            var v = s("./src/udemy/js/utils/noop.js");
            var j = s("./src/udemy/js/utils/serialize-form.js");
            var _, w, C, O, E;
            let S = (_ = class e {
                constructor(e) {
                    babelHelpers.initializerDefineProperty(this, "_url", w, this);
                    babelHelpers.initializerDefineProperty(this, "content", C, this);
                    babelHelpers.initializerDefineProperty(this, "isLoading", O, this);
                    babelHelpers.initializerDefineProperty(this, "hasErrorContent", E, this);
                    this.setUrl(e)
                }
                setUrl(e) {
                    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (e !== this._url || t) {
                        this.content = "";
                        this._url = e
                    }
                }
                setContent(e) {
                    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.content = e;
                    this.hasErrorContent = t
                }
                async fetchContent() {
                    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    if (this.content) {
                        return Promise.resolve()
                    }
                    this.isLoading = true;
                    this.hasErrorContent = false;
                    this.content = "";
                    const t = [b.a.get(this._url, {
                        headers: {
                            Accept: "text/html",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        params: {
                            display_type: "popup"
                        }
                    })];
                    if (e) {
                        t.push(e(this._url).catch(v["a"]))
                    }
                    try {
                        const [e] = await Promise.all(t);
                        Object(y["w"])((() => {
                            this.content = e.data;
                            this.isLoading = false
                        }))
                    } catch (e) {
                        Object(y["w"])((() => {
                            if (e.response && e.response.data) {
                                this.content = e.response.data
                            } else {
                                this.content = e.message
                            }
                            this.hasErrorContent = true;
                            this.isLoading = false
                        }))
                    }
                }
                submitForm(e) {
                    const t = Object(j["a"])(e);
                    const s = [];
                    Object.entries(t).forEach((e => {
                        let [t, r] = e;
                        if (Array.isArray(r)) {
                            r.forEach((e => {
                                s.push(`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)
                            }))
                        } else {
                            s.push(`${encodeURIComponent(t)}=${encodeURIComponent(r)}`)
                        }
                    }));
                    return b.a.request({
                        baseURL: Object(g["a"])().url.to_root,
                        method: e.getAttribute("method") || "get",
                        url: e.getAttribute("action"),
                        data: s.join("&"),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                }
            }, w = babelHelpers.applyDecoratedDescriptor(_.prototype, "_url", [y["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return ""
                }
            }), C = babelHelpers.applyDecoratedDescriptor(_.prototype, "content", [y["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return ""
                }
            }), O = babelHelpers.applyDecoratedDescriptor(_.prototype, "isLoading", [y["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), E = babelHelpers.applyDecoratedDescriptor(_.prototype, "hasErrorContent", [y["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), babelHelpers.applyDecoratedDescriptor(_.prototype, "setUrl", [y["e"]], Object.getOwnPropertyDescriptor(_.prototype, "setUrl"), _.prototype), babelHelpers.applyDecoratedDescriptor(_.prototype, "setContent", [y["e"]], Object.getOwnPropertyDescriptor(_.prototype, "setContent"), _.prototype), babelHelpers.applyDecoratedDescriptor(_.prototype, "fetchContent", [y["e"]], Object.getOwnPropertyDescriptor(_.prototype, "fetchContent"), _.prototype), _);
            var x = s("./src/udemy/js/utils/escape/safely-set-inner-html.js");
            var P = s("./src/udemy/js/utils/server-or-client.ts");
            var T = s("./src/udemy/js/loaders/ud-app-loader.js");
            var I, k, D;
            let R = Object(l["f"])(I = (k = (D = class e extends h["Component"] {
                constructor(e, t) {
                    super(e, t);
                    this.modalBodyRef = m.a.createRef();
                    this.contentChanged = false
                }
                componentDidMount() {
                    this.bootstrapContents();
                    this.disposers = [Object(y["n"])(this.props.ajaxContentStore, "content", this.unloadOldContent)]
                }
                componentDidUpdate() {
                    if (this.contentChanged) {
                        this.bootstrapContents();
                        this.contentChanged = false
                    }
                }
                componentWillUnmount() {
                    this.disposers && this.disposers.forEach((e => e()));
                    this.unmountContents()
                }
                bootstrapContents() {
                    this.udAppUnloader = Object(T["a"])(this.modalBodyRef.current);
                    this.props.onBootstrapContents(this.modalBodyRef.current)
                }
                unmountContents() {
                    if (this.udAppUnloader) {
                        this.udAppUnloader();
                        this.udAppUnloader = null
                    }
                }
                unloadOldContent(e) {
                    const t = this.props.ajaxContentStore.content;
                    this.contentChanged = t !== e.newValue;
                    if (t && this.contentChanged) {
                        this.unmountContents()
                    }
                    return e
                }
                render() {
                    return m.a.createElement("div", Object.assign({
                        ref: this.modalBodyRef
                    }, Object(x["a"])({
                        descriptionOfCaller: "ajax-modal-body:content",
                        html: this.props.ajaxContentStore.content,
                        domPurifyConfig: {
                            ADD_ATTR: ["target"]
                        }
                    })))
                }
            }, D.propTypes = {
                ajaxContentStore: p.a.object.isRequired,
                onBootstrapContents: p.a.func.isRequired
            }, D), babelHelpers.applyDecoratedDescriptor(k.prototype, "unloadOldContent", [a["a"]], Object.getOwnPropertyDescriptor(k.prototype, "unloadOldContent"), k.prototype), k)) || I;
            var A = s("./src/udemy/js/base-components/dialog/ajax-modal.less");
            var L, N, M;
            const U = {
                "./ajax-modal.less": {
                    "ajax-error": "ajax-modal--ajax-error--xufYN"
                }
            };
            const B = e => {
                const {
                    title: t,
                    renderTitle: s,
                    ...r
                } = e;
                return r
            };
            let F = Object(l["f"])(L = (N = (M = class e extends h["Component"] {
                constructor(e) {
                    super(e);
                    this.store = new S(this.props.url)
                }
                componentDidMount() {
                    this.fetchContent(this.props.url, this.props.isOpen)
                }
                componentDidUpdate(e) {
                    if (e.isOpen !== this.props.isOpen) {
                        this.fetchContent(this.props.url, this.props.isOpen)
                    }
                }
                componentWillUnmount() {
                    if (this.contentNode) {
                        this.contentNode.removeEventListener("intercept-ajax-content", this.applyInterceptor);
                        this.contentNode.removeEventListener("close-ajax-modal", this.props.onClose);
                        this.contentNode = null
                    }
                }
                fetchContent(e, t) {
                    if (t) {
                        this.store.setUrl(e, this.props.skipCache);
                        this.store.fetchContent(this.props.preloader)
                    }
                }
                onBootstrapContents(e) {
                    this.contentNode = e;
                    this.applyInterceptor();
                    this.contentNode.removeEventListener("close-ajax-modal", this.props.onClose);
                    this.contentNode.addEventListener("close-ajax-modal", this.props.onClose)
                }
                applyInterceptor() {
                    if (this.props.shouldInterceptContent) {
                        this.contentNode.removeEventListener("intercept-ajax-content", this.applyInterceptor);
                        this.contentNode.addEventListener("intercept-ajax-content", this.applyInterceptor);
                        const e = this.contentNode.querySelectorAll("a:not([data-disable-loader])");
                        Array.from(e).forEach((e => {
                            e.removeEventListener("click", this.onClickLink);
                            e.addEventListener("click", this.onClickLink)
                        }));
                        const t = this.contentNode.querySelectorAll("form:not([data-disable-loader])");
                        Array.from(t).forEach((e => {
                            e.removeEventListener("submit", this.onSubmitForm);
                            e.addEventListener("submit", this.onSubmitForm)
                        }));
                        this.handleRunCommandElements(this.contentNode)
                    }
                }
                handleRunCommandElements(e) {
                    const t = Array.from(e.querySelectorAll(".run-command"));
                    t.forEach((e => {
                        if (e.classList.contains("close-popup")) {
                            this.props.onClose()
                        }
                        if (e.classList.contains("redirect")) {
                            P["a"].global.location.href = e.dataset.url
                        }
                        if (e.classList.contains("refresh-page")) {
                            P["a"].global.location.reload()
                        }
                    }));
                    return t.length > 0
                }
                onClickLink(e) {
                    const t = e.target;
                    const s = document.createElement("a");
                    s.href = t.href;
                    if (t.target === "_blank" || !t.href || !s.host) {
                        return true
                    }
                    e.preventDefault();
                    this.fetchContent(t.href, this.props.isOpen)
                }
                async onSubmitForm(e) {
                    e.preventDefault();
                    try {
                        const {
                            data: t
                        } = await this.store.submitForm(e.target);
                        if (t && t.returnUrl) {
                            P["a"].global.location.href = t.returnUrl
                        } else if (t && typeof t === "string") {
                            this.store.setContent(this.contentNode.innerHTML);
                            const e = document.createElement("div");
                            e.innerHTML = t;
                            if (!this.handleRunCommandElements(e)) {
                                this.store.setContent(t)
                            }
                        }
                    } catch (e) {
                        this.store.setContent(this.props.gettext("An unknown error occurred"), true)
                    }
                }
                renderTitle() {
                    return [this.props.labelledById, null]
                }
                render() {
                    const {
                        skipCache: e,
                        url: t,
                        labelledById: s,
                        className: r,
                        gettext: n,
                        ...a
                    } = this.props;
                    const c = !this.store.isLoading && !!this.store.content;
                    let l = null;
                    if (c && this.store.hasErrorContent) {
                        l = m.a.createElement("div", Object.assign({
                            id: s,
                            className: "ud-modal-title"
                        }, Object(x["a"])({
                            descriptionOfCaller: "ajax-modal:error-content",
                            html: this.store.content
                        })))
                    } else if (c) {
                        l = m.a.createElement(R, {
                            ajaxContentStore: this.store,
                            onBootstrapContents: this.onBootstrapContents
                        })
                    }
                    return m.a.createElement(i["a"], Object.assign({}, a, {
                        fullPage: c ? a.fullPage : false,
                        loading: !c,
                        title: "",
                        renderTitle: this.renderTitle,
                        className: (r ? r + " " : "") + o()(u()({
                            "ajax-error": this.store.hasErrorContent
                        }), U)
                    }), l)
                }
            }, M.propTypes = {
                isOpen: p.a.bool.isRequired,
                requireExplicitAction: p.a.bool,
                onClose: p.a.func,
                onOpen: p.a.func,
                fullPage: p.a.bool,
                loading: p.a.bool,
                className: p.a.string,
                getContainer: p.a.func,
                url: p.a.string.isRequired,
                labelledById: p.a.string.isRequired,
                preloader: p.a.func,
                shouldInterceptContent: p.a.bool,
                skipCache: p.a.bool,
                gettext: p.a.func
            }, M.defaultProps = { ...B(i["a"].defaultProps),
                preloader: null,
                shouldInterceptContent: false,
                skipCache: false
            }, M), babelHelpers.applyDecoratedDescriptor(N.prototype, "fetchContent", [a["a"]], Object.getOwnPropertyDescriptor(N.prototype, "fetchContent"), N.prototype), babelHelpers.applyDecoratedDescriptor(N.prototype, "onBootstrapContents", [a["a"]], Object.getOwnPropertyDescriptor(N.prototype, "onBootstrapContents"), N.prototype), babelHelpers.applyDecoratedDescriptor(N.prototype, "applyInterceptor", [a["a"]], Object.getOwnPropertyDescriptor(N.prototype, "applyInterceptor"), N.prototype), babelHelpers.applyDecoratedDescriptor(N.prototype, "onClickLink", [a["a"]], Object.getOwnPropertyDescriptor(N.prototype, "onClickLink"), N.prototype), babelHelpers.applyDecoratedDescriptor(N.prototype, "onSubmitForm", [a["a"]], Object.getOwnPropertyDescriptor(N.prototype, "onSubmitForm"), N.prototype), babelHelpers.applyDecoratedDescriptor(N.prototype, "renderTitle", [a["a"]], Object.getOwnPropertyDescriptor(N.prototype, "renderTitle"), N.prototype), N)) || L;
            var q = t["a"] = Object(n["i"])(F)
        },
        "./src/udemy/js/browse/components/course-card/course-details-quick-view-box.less": function(e, t, s) {
            e.exports = {
                "popover-wrapper": "course-details-quick-view-box--popover-wrapper--1YwFa",
                title: "course-details-quick-view-box--title--3-SDT",
                "badge-container": "course-details-quick-view-box--badge-container--2O3vc",
                badge: "course-details-quick-view-box--badge--1TPcO",
                "coding-exercises-badge": "course-details-quick-view-box--coding-exercises-badge--1LQ2x",
                updated: "course-details-quick-view-box--updated--2dBA_",
                stats: "course-details-quick-view-box--stats--164U1",
                instructor: "course-details-quick-view-box--instructor--G_G4Q",
                "instructor-main-content": "course-details-quick-view-box--instructor-main-content--GR-Cg",
                "instructor-title": "course-details-quick-view-box--instructor-title--Y5F9W",
                "instructor-headline": "course-details-quick-view-box--instructor-headline--2wc_N",
                headline: "course-details-quick-view-box--headline--3GLy1",
                objectives: "course-details-quick-view-box--objectives--101Pk",
                cta: "course-details-quick-view-box--cta--KPuA4",
                "add-to-cart": "course-details-quick-view-box--add-to-cart--2gpRN",
                wishlist: "course-details-quick-view-box--wishlist--1DehW",
                "learner-context-menu": "course-details-quick-view-box--learner-context-menu--MUtRi",
                "context-menu": "course-details-quick-view-box--context-menu--1tjtb",
                "course-stats": "course-details-quick-view-box--course-stats--3fen1",
                "popover-interaction-btn": "course-details-quick-view-box--popover-interaction-btn--1SvvT"
            }
        },
        "./src/udemy/js/browse/components/course-card/course-details-quick-view-box.react-component.js": function(e, t, s) {
            "use strict";
            s.r(t);
            s.d(t, "CourseDetailsQuickViewBoxContent", (function() {
                return q
            }));
            var r = s("./node_modules/@udemy/browse-course/dist/esm/index.js");
            var o = s("./node_modules/@udemy/design-system-utils/dist/esm/a11y/a11y.js");
            var n = s("./node_modules/@udemy/design-system-utils/dist/esm/keyboard/find-focusables.js");
            var i = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/tracker.js");
            var a = s("./node_modules/@udemy/event-tracking/dist/esm/lib/common-tracking.js");
            var c = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var u = s("./node_modules/@udemy/icons/dist/play.ud-icon");
            var l = s.n(u);
            var d = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var p = s("./node_modules/@udemy/react-popup-components/dist/esm/popover/popover.react-component.js");
            var h = s("./node_modules/@udemy/ud-data/dist/esm/index.js");
            var m = s("./node_modules/classnames/index.js");
            var f = s.n(m);
            var b = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var y = s("./node_modules/prop-types/index.js");
            var g = s.n(y);
            var v = s("./node_modules/react/index.js");
            var j = s.n(v);
            var _ = s("./src/udemy/js/base-components/price-text/async-course-static-price-text.react-component.js");
            var w = s("./src/udemy/js/base-components/price-text/constants.ts");
            var C = s("./src/udemy/js/browse/components/save-to-list/save-to-list-button-wrapper.react-component.tsx");
            var O = s("./src/udemy/js/browse/events.ts");
            var E = s("./src/udemy/js/browse/ui-regions.ts");
            var S = s("./src/udemy/js/cart/events.ts");
            var x = s("./src/udemy/js/course-landing-page/components/add-to-cart/add-to-cart.react-isocomponent.js");
            var P = s("./src/udemy/js/course-landing-page/components/wishlist/wishlist.mobx-store.js");
            var T = s("./src/udemy/js/course-landing-page/components/wishlist/wishlist.react-component.js");
            var I = s("./src/udemy/js/utils/funnel-tracking.js");
            var k = s("./src/udemy/js/browse/components/course-card/course-details-quick-view-box.less");
            var D = s.n(k);
            var R = s("./src/udemy/js/browse/components/course-card/course-objectives-quick-view-box.react-component.js");
            var A, L, N, M, U, B;
            let F = (A = Object(b["e"])((e => {
                let {
                    resourceContextMenu: t
                } = e;
                return {
                    resourceContextMenu: t
                }
            })), A(L = (N = class e extends j.a.Component {
                constructor(e) {
                    super(e);
                    this.trackEnrollNowClick = () => {
                        const e = this.props.onEnrollNowClickCallbackFunc;
                        const t = {
                            id: this.props.course.id,
                            type: S["b"].COURSE,
                            trackingId: this.props.course.frontendTrackingId || this.props.course.tracking_id
                        };
                        i["a"].publishEvent(new O["q"]({
                            buyable: t
                        }));
                        if (e) {
                            e()
                        }
                    };
                    this.trackCourseTitleClick = () => {
                        const e = this.props.onCourseTitleClickCallbackFunc;
                        Object(a["a"])({
                            courseId: this.props.course.id,
                            courseTrackingId: this.props.course.frontendTrackingId || this.props.course.tracking_id,
                            componentName: "quickViewBox"
                        });
                        if (e) {
                            e()
                        }
                    };
                    this.wishlistStore = new P["a"](this.props.course, window)
                }
                render() {
                    var e;
                    const {
                        Config: t,
                        request: s
                    } = this.props.udData;
                    const {
                        resourceContextMenu: o,
                        course: n,
                        className: i,
                        showPrice: a,
                        assessmentRecommendation: c,
                        gettext: u
                    } = this.props;
                    const p = n.is_user_subscribed || n.is_in_user_subscription;
                    const h = n.badges && n.badges.length && !n.is_in_user_subscription ? Object(r["j"])(n.badges[0].badge_family) : null;
                    const m = s.locale.replace("_", "-") || "en-US";
                    const b = n.last_update_date ? {
                        type: u("Updated"),
                        date: new Date(n.last_update_date).toLocaleDateString(m, {
                            month: "long",
                            year: "numeric"
                        })
                    } : {
                        type: u("Published"),
                        date: new Date(n.published_time).toLocaleDateString(m, {
                            month: "long",
                            year: "numeric"
                        })
                    };
                    const y = [];
                    if (n.has_closed_caption) {
                        y.push(u("Subtitles"))
                    }
                    if (n.has_508_closed_captions) {
                        y.push(u("CC"))
                    }
                    const g = j.a.createElement("div", {
                        className: f()("ud-text-xs", D.a.stats)
                    }, j.a.createElement("span", null, n.content_info), j.a.createElement("span", null, n.instructional_level), y && j.a.createElement("span", null, y.join(", ")));
                    const v = t.brand.has_organization && t.brand.organization.is_limited_consumption_trial;
                    const O = p ? n.learn_url : n.url;
                    let S;
                    if (v) {
                        const [e, t] = n.url.split("?");
                        const s = new URLSearchParams(t);
                        s.set("from_quick_view", "1");
                        S = j.a.createElement(d["a"], {
                            componentClass: "a",
                            "data-purpose": "watch-videos",
                            href: `${e}?${s.toString()}`,
                            udStyle: "brand"
                        }, j.a.createElement(l.a, {
                            label: false
                        }), u("Watch videos"))
                    } else if (c || p) {
                        S = j.a.createElement(d["a"], {
                            componentClass: "a",
                            "data-purpose": "view-course",
                            href: O,
                            udStyle: "brand"
                        }, u("View course"))
                    } else if (n.free_course_subscribe_url) {
                        S = j.a.createElement(d["a"], {
                            componentClass: "a",
                            "data-purpose": "enroll-now-button",
                            href: n.free_course_subscribe_url,
                            udStyle: t.brand.has_organization ? "brand" : "primary",
                            onClick: this.trackEnrollNowClick
                        }, u("Enroll now"))
                    } else {
                        S = j.a.createElement(x["a"], {
                            buyables: [n]
                        })
                    }
                    const P = o.getQuickViewBoxContextMenu ? o.getQuickViewBoxContextMenu({ ...n,
                        isPublished: true
                    }) : null;
                    const I = this.props.funnelLogContextStore.subcontext ? `${this.props.funnelLogContextStore.subcontext.replace(/ +/g,"_")}.${E["a"].QUICK_PREVIEW}` : E["a"].QUICK_PREVIEW;
                    return j.a.createElement("div", {
                        className: i
                    }, j.a.createElement("a", {
                        className: f()("ud-heading-lg", D.a.title),
                        href: O,
                        "data-purpose": "quick-view-box-title",
                        onClick: this.trackCourseTitleClick,
                        onContextMenu: this.trackCourseTitleClick
                    }, n.title), j.a.createElement("div", {
                        className: D.a["badge-container"]
                    }, h && j.a.createElement(h, {
                        className: D.a.badge
                    }), j.a.createElement("span", {
                        className: f()("ud-text-xs", D.a.updated)
                    }, b.type, j.a.createElement("span", {
                        className: "ud-heading-xs"
                    }, " ", b.date))), g, P && j.a.createElement("div", {
                        className: D.a["context-menu"]
                    }, P), j.a.createElement("div", {
                        className: f()("ud-text-sm", D.a.headline),
                        "data-purpose": "quick-view-box-headline"
                    }, n.headline), j.a.createElement("div", {
                        className: f()("ud-text-sm", D.a.objectives)
                    }, (e = n.objectives_summary) !== null && e !== void 0 && e.length ? j.a.createElement(R["a"], {
                        objectives: n.objectives_summary
                    }) : u("No course details available")), a && j.a.createElement(_["a"], {
                        courses: [n],
                        trackingEventContext: {
                            buyableId: n.id,
                            priceType: w["a"].individual_buyable,
                            buyableType: "course",
                            buyableTrackingId: n.tracking_id
                        }
                    }), j.a.createElement("div", {
                        className: D.a.cta
                    }, j.a.createElement("div", {
                        className: D.a["add-to-cart"]
                    }, S), n.is_paid && !p && j.a.createElement("div", {
                        className: D.a.wishlist
                    }, j.a.createElement(T["a"], {
                        wishlistStore: this.wishlistStore,
                        round: true,
                        size: "large",
                        uiRegion: I
                    })), n.is_in_user_subscription && j.a.createElement("div", {
                        className: D.a.wishlist
                    }, j.a.createElement(C["a"], {
                        course: n,
                        round: true,
                        size: "large",
                        uiRegion: I
                    }))))
                }
            }, N.propTypes = {
                course: g.a.object.isRequired,
                className: g.a.string,
                resourceContextMenu: g.a.object,
                showPrice: g.a.bool,
                assessmentRecommendation: g.a.bool,
                onEnrollNowClickCallbackFunc: g.a.func,
                onCourseTitleClickCallbackFunc: g.a.func,
                funnelLogContextStore: g.a.object,
                gettext: g.a.func.isRequired,
                udData: g.a.object.isRequired
            }, N.defaultProps = {
                className: null,
                resourceContextMenu: {},
                showPrice: false,
                assessmentRecommendation: false,
                onEnrollNowClickCallbackFunc: undefined,
                onCourseTitleClickCallbackFunc: undefined,
                funnelLogContextStore: {}
            }, N)) || L);
            const q = Object(c["i"])(Object(h["j"])(F));
            let H = (M = Object(b["e"])((e => {
                let {
                    funnelLogContextStore: t
                } = e;
                return {
                    funnelLogContextStore: t
                }
            })), M(U = Object(b["f"])(U = (B = class e extends v["Component"] {
                constructor() {
                    super(...arguments);
                    this.popoverRef = j.a.createRef();
                    this.triggerButtonId = Object(o["a"])("trigger-button");
                    this.onCloseButtonClick = () => {
                        this.popoverRef.current.ref.current.onClose();
                        document.getElementById(this.triggerButtonId).focus()
                    };
                    this.onTriggerButtonClick = e => {
                        this.popoverRef.current.ref.current.onFocusOpen(e.currentTarget)
                    };
                    this.getTabOrder = e => {
                        let {
                            findTriggerNode: t,
                            findFirstFocusableInContent: s,
                            findLastFocusableInContent: r
                        } = e;
                        const o = document.getElementById(this.triggerButtonId);
                        const i = () => document.activeElement === o ? o : null;
                        const a = () => {
                            if (this.popoverRef.current.ref.current.isOpen) {
                                const e = Object(n["a"])(t());
                                const s = e[e.length - 1];
                                const r = Object(n["a"])(document.documentElement);
                                const o = r.findIndex((e => e === s));
                                if (o === -1) {
                                    return null
                                }
                                if (o === r.length - 1) {
                                    return r[0]
                                }
                                return r[o + 1]
                            }
                        };
                        return [
                            [t, s],
                            [i, s],
                            [r, a]
                        ]
                    };
                    this.logQuickViewPreview = () => {
                        const {
                            course: e
                        } = this.props;
                        I["a"].logAction("quick-view-previewed", [{
                            id: e.id
                        }], this.props.funnelLogContextStore);
                        i["a"].publishEvent(new O["L"]({
                            id: e.id,
                            trackingId: e.frontendTrackingId
                        }))
                    }
                }
                renderContent(e) {
                    let {
                        className: t,
                        ...s
                    } = e;
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
                        o[n - 1] = arguments[n]
                    }
                    return p["a"].defaultProps.renderContent({
                        className: f()(t, D.a["popover-wrapper"]),
                        ...s
                    }, ...o)
                }
                render() {
                    const e = j.a.createElement("div", {
                        "data-purpose": "course-details-content"
                    }, j.a.createElement(q, {
                        course: this.props.course,
                        className: this.props.className,
                        showPrice: this.props.showPrice,
                        funnelLogContextStore: this.props.funnelLogContextStore,
                        onEnrollNowClickCallbackFunc: this.props.onEnrollNowClickCallbackFunc,
                        onCourseTitleClickCallbackFunc: this.props.onCourseTitleClickCallbackFunc
                    }), j.a.createElement(d["a"], {
                        className: f()("ud-link-underline", D.a["popover-interaction-btn"]),
                        "data-purpose": "close-course-details-popover",
                        udStyle: "ghost",
                        size: "xsmall",
                        onClick: this.onCloseButtonClick
                    }, j.a.createElement("span", null, this.props.gettext("Close dialog"))));
                    const t = j.a.createElement("div", {
                        "data-purpose": "course-details-popover-trigger"
                    }, this.props.courseCard, j.a.createElement(d["a"], {
                        className: f()("ud-link-underline", D.a["popover-interaction-btn"]),
                        "data-purpose": "open-course-details-popover",
                        udStyle: "ghost",
                        size: "xsmall",
                        id: this.triggerButtonId,
                        onClick: this.onTriggerButtonClick
                    }, j.a.createElement("span", null, this.props.gettext("Show course details"))));
                    return j.a.createElement(p["a"], {
                        placement: this.props.placement,
                        trigger: t,
                        canToggleOnHover: true,
                        canOnlyToggleOnHover: true,
                        detachFromTarget: true,
                        toggleStrategy: "add-remove",
                        onFirstOpen: this.logQuickViewPreview,
                        renderContent: this.renderContent,
                        ref: this.popoverRef,
                        getTabOrder: this.getTabOrder
                    }, e)
                }
            }, B.propTypes = {
                course: g.a.object.isRequired,
                courseCard: g.a.node.isRequired,
                className: g.a.string,
                funnelLogContextStore: g.a.object.isRequired,
                showPrice: g.a.bool,
                onEnrollNowClickCallbackFunc: g.a.func,
                onCourseTitleClickCallbackFunc: g.a.func,
                placement: g.a.string,
                gettext: g.a.func.isRequired
            }, B.defaultProps = {
                className: null,
                showPrice: false,
                onEnrollNowClickCallbackFunc: undefined,
                onCourseTitleClickCallbackFunc: undefined,
                placement: "right"
            }, B)) || U) || U);
            t["default"] = Object(c["i"])(H)
        },
        "./src/udemy/js/browse/components/course-card/course-objectives-quick-view-box.less": function(e, t, s) {
            e.exports = {
                "popover-wrapper": "course-objectives-quick-view-box--popover-wrapper--4Uait",
                "content-header": "course-objectives-quick-view-box--content-header--37FmY",
                "cta-container": "course-objectives-quick-view-box--cta-container--2FDMw",
                "cta-button": "course-objectives-quick-view-box--cta-button--2ycWh",
                wishlist: "course-objectives-quick-view-box--wishlist--1gDKY",
                "purchase-info": "course-objectives-quick-view-box--purchase-info--12TT9"
            }
        },
        "./src/udemy/js/browse/components/course-card/course-objectives-quick-view-box.react-component.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return A
            }));
            var r = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/tracker.js");
            var o = s("./node_modules/@udemy/event-tracking/dist/esm/lib/common-tracking.js");
            var n = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var i = s("./node_modules/@udemy/icons/dist/info.ud-icon");
            var a = s.n(i);
            var c = s("./node_modules/@udemy/icons/dist/tick.ud-icon");
            var u = s.n(c);
            var l = s("./node_modules/@udemy/react-core-components/dist/esm/block-list/block-list.react-component.js");
            var d = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var p = s("./node_modules/@udemy/react-popup-components/dist/esm/popover/popover.react-component.js");
            var h = s("./node_modules/@udemy/shared-utils/dist/esm/i18n/date.js");
            var m = s("./node_modules/@udemy/ud-data/dist/esm/index.js");
            var f = s("./node_modules/classnames/index.js");
            var b = s.n(f);
            var y = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var g = s("./node_modules/prop-types/index.js");
            var v = s.n(g);
            var j = s("./node_modules/react/index.js");
            var _ = s.n(j);
            var w = s("./src/udemy/js/browse/events.ts");
            var C = s("./src/udemy/js/browse/ui-regions.ts");
            var O = s("./src/udemy/js/cart/events.ts");
            var E = s("./src/udemy/js/course-landing-page/components/add-to-cart/add-to-cart.react-isocomponent.js");
            var S = s("./src/udemy/js/course-landing-page/components/wishlist/wishlist.mobx-store.js");
            var x = s("./src/udemy/js/course-landing-page/components/wishlist/wishlist.react-component.js");
            var P = s("./src/udemy/js/utils/funnel-tracking.js");
            var T = s("./src/udemy/js/browse/components/course-card/course-objectives-quick-view-box.less");
            var I = s.n(T);
            var k, D, R;
            const A = e => {
                let {
                    objectives: t
                } = e;
                return _.a.createElement(l["a"], {
                    size: "small",
                    padding: "tight"
                }, t.map(((e, t) => _.a.createElement(l["a"].Item, {
                    key: t,
                    icon: _.a.createElement(u.a, {
                        label: false,
                        color: "neutral"
                    }),
                    "data-purpose": "quick-view-box-objective"
                }, e))))
            };
            A.propTypes = {
                objectives: y["b"].arrayOrObservableArrayOf(v.a.string).isRequired
            };
            const L = e => {
                let {
                    previousPurchaseDate: t
                } = e;
                const {
                    gettext: s,
                    interpolate: r
                } = Object(n["h"])();
                const o = Object(h["f"])(t, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                });
                return _.a.createElement("div", {
                    className: I.a["purchase-info"]
                }, _.a.createElement(a.a, {
                    label: false,
                    size: "medium",
                    color: "info"
                }), _.a.createElement("b", null, r(s("You enrolled in this course on %(purchaseDate)s"), {
                    purchaseDate: o
                }, true)))
            };
            L.propTypes = {
                previousPurchaseDate: v.a.instanceOf(Date).isRequired
            };
            let N = (k = Object(y["e"])((e => {
                let {
                    funnelLogContextStore: t
                } = e;
                return {
                    funnelLogContextStore: t
                }
            })), k(D = Object(y["f"])(D = (R = class e extends j["Component"] {
                constructor(e) {
                    super(e);
                    this.logQuickViewPreview = () => {
                        const {
                            course: e
                        } = this.props;
                        P["a"].logAction("quick-view-previewed", [{
                            id: e.id
                        }], this.props.funnelLogContextStore);
                        r["a"].publishEvent(new w["L"]({
                            id: e.id,
                            trackingId: e.frontendTrackingId || e.tracking_id
                        }))
                    };
                    this.trackEnrollNowClick = () => {
                        const e = {
                            id: this.props.course.id,
                            type: O["b"].COURSE,
                            trackingId: this.props.course.frontendTrackingId || this.props.course.tracking_id
                        };
                        r["a"].publishEvent(new w["q"]({
                            buyable: e
                        }))
                    };
                    this.trackGoToCourseClick = () => {
                        Object(o["a"])({
                            courseId: this.props.course.id,
                            courseTrackingId: this.props.course.frontendTrackingId || this.props.course.tracking_id,
                            componentName: "srpCourseLearnCTAButton"
                        })
                    };
                    this.wishlistStore = new S["a"](this.props.course, window)
                }
                renderContent(e) {
                    let {
                        className: t,
                        ...s
                    } = e;
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
                        o[n - 1] = arguments[n]
                    }
                    return p["a"].defaultProps.renderContent({
                        className: b()(t, I.a["popover-wrapper"]),
                        ...s
                    }, ...o)
                }
                renderCallToAction() {
                    const {
                        course: e,
                        showCta: t,
                        isUserEnrolled: s,
                        gettext: r,
                        udData: o
                    } = this.props;
                    if (t && !e.is_in_user_subscription && !o.Config.brand.has_organization) {
                        let t;
                        if (s) {
                            t = _.a.createElement(d["a"], {
                                componentClass: "a",
                                className: I.a["cta-button"],
                                "data-purpose": "go-to-course-button",
                                href: e.learn_url,
                                udStyle: o.Config.brand.has_organization ? "brand" : "primary",
                                onClick: this.trackGoToCourseClick
                            }, r("Go to course"))
                        } else if (e.free_course_subscribe_url) {
                            t = _.a.createElement(d["a"], {
                                componentClass: "a",
                                className: I.a["cta-button"],
                                "data-purpose": "enroll-now-button",
                                href: e.free_course_subscribe_url,
                                udStyle: o.Config.brand.has_organization ? "brand" : "primary",
                                onClick: this.trackEnrollNowClick
                            }, r("Enroll now"))
                        } else {
                            t = _.a.createElement(_.a.Fragment, null, _.a.createElement("div", {
                                className: I.a["cta-button"],
                                "data-purpose": "add-to-cart"
                            }, _.a.createElement(E["a"], {
                                buyables: [e]
                            })), _.a.createElement("div", {
                                className: I.a.wishlist
                            }, _.a.createElement(x["a"], {
                                wishlistStore: this.wishlistStore,
                                round: true,
                                size: "large",
                                uiRegion: C["a"].COURSE_OBJECTIVES
                            })))
                        }
                        return _.a.createElement("div", {
                            className: I.a["cta-container"]
                        }, t)
                    }
                    return null
                }
                render() {
                    var e;
                    const {
                        className: t,
                        course: s,
                        courseCard: r,
                        placement: o,
                        gettext: n
                    } = this.props;
                    if (!((e = s.objectives_summary) !== null && e !== void 0 && e.length)) {
                        return null
                    }
                    return _.a.createElement(p["a"], {
                        placement: o,
                        trigger: r,
                        canToggleOnHover: true,
                        detachFromTarget: true,
                        toggleStrategy: "add-remove",
                        onFirstOpen: this.logQuickViewPreview,
                        withPadding: false,
                        renderContent: this.renderContent
                    }, _.a.createElement("div", {
                        className: t
                    }, this.props.isUserEnrolled && this.props.enrollmentDate && this.props.showCta ? _.a.createElement(L, {
                        previousPurchaseDate: this.props.enrollmentDate
                    }) : _.a.createElement(_.a.Fragment, null, _.a.createElement("h2", {
                        className: b()("ud-heading-md", I.a["content-header"])
                    }, n("What you’ll learn")), _.a.createElement(A, {
                        objectives: s.objectives_summary
                    })), this.renderCallToAction()))
                }
            }, R.propTypes = {
                course: v.a.object.isRequired,
                courseCard: v.a.node.isRequired,
                className: v.a.string,
                funnelLogContextStore: v.a.object,
                showCta: v.a.bool,
                isUserEnrolled: v.a.bool,
                enrollmentDate: v.a.instanceOf(Date),
                placement: v.a.string,
                gettext: v.a.func.isRequired,
                udData: v.a.object.isRequired
            }, R.defaultProps = {
                className: null,
                funnelLogContextStore: {},
                showCta: false,
                isUserEnrolled: false,
                enrollmentDate: null,
                placement: "top"
            }, R)) || D) || D);
            t["b"] = Object(n["i"])(Object(m["j"])(N))
        },
        "./src/udemy/js/browse/components/enhanced-form-elements/checkbox-with-loader.less": function(e, t, s) {
            e.exports = {
                "loader-state": "checkbox-with-loader--loader-state--1ztzA",
                "loader-icon": "checkbox-with-loader--loader-icon--22fBc"
            }
        },
        "./src/udemy/js/browse/components/save-to-list/constants.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));
            s.d(t, "b", (function() {
                return o
            }));
            s.d(t, "c", (function() {
                return n
            }));
            var r;
            (function(e) {
                e["ADD"] = "addToList";
                e["REMOVE"] = "removeFromList";
                e["CREATE"] = "createNewList"
            })(r || (r = {}));
            const o = 60;
            const n = 1
        },
        "./src/udemy/js/browse/components/save-to-list/events.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            }));
            s.d(t, "b", (function() {
                return n
            }));
            s.d(t, "c", (function() {
                return i
            }));
            s.d(t, "d", (function() {
                return a
            }));
            s.d(t, "e", (function() {
                return c
            }));
            var r = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/event-common.js");
            class o extends r["a"] {
                constructor(e) {
                    let {
                        listId: t,
                        uiRegion: s,
                        nonInteraction: r = false
                    } = e;
                    super("LearningListCreateEvent");
                    this.listId = t;
                    this.nonInteraction = r;
                    this.uiRegion = s
                }
            }
            class n extends r["a"] {
                constructor(e) {
                    let {
                        listId: t,
                        uiRegion: s
                    } = e;
                    super("LearningListDeleteEvent");
                    this.listId = t;
                    this.uiRegion = s
                }
            }
            class i extends r["a"] {
                constructor(e) {
                    let {
                        listId: t,
                        uiRegion: s
                    } = e;
                    super("LearningListEditEvent");
                    this.listId = t;
                    this.uiRegion = s
                }
            }
            class a extends r["a"] {
                constructor(e) {
                    let {
                        listId: t,
                        courseId: s,
                        trackingId: r,
                        uiRegion: o
                    } = e;
                    super("LearningListItemRemoveEvent");
                    this.listId = t;
                    this.courseId = s;
                    this.trackingId = r;
                    this.uiRegion = o
                }
            }
            class c extends r["a"] {
                constructor(e) {
                    let {
                        listId: t,
                        courseId: s,
                        trackingId: r,
                        uiRegion: o
                    } = e;
                    super("LearningListItemSaveEvent");
                    this.listId = t;
                    this.courseId = s;
                    this.trackingId = r;
                    this.uiRegion = o
                }
            }
        },
        "./src/udemy/js/browse/components/save-to-list/save-to-list-button-wrapper.react-component.tsx": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/hooks/dist/esm/use-match-media/index.js");
            var o = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var n = s("./node_modules/@udemy/icons/dist/expand-plus.ud-icon");
            var i = s.n(n);
            var a = s("./node_modules/@udemy/react-core-components/dist/esm/icon-button/icon-button.react-component.js");
            var c = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var u = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var l = s("./node_modules/react/index.js");
            var d = s.n(l);
            var p = s("./node_modules/@udemy/react-popup-components/dist/esm/popover/popover.react-component.js");
            var h = s("./node_modules/prop-types/index.js");
            var m = s.n(h);
            var f = s("./node_modules/autobind-decorator/lib/esm/index.js");
            var b = s("./node_modules/mobx/lib/mobx.module.js");
            var y = s("./src/udemy/js/utils/ud-expiring-local-storage.js");
            var g = undefined && undefined.__decorate || function(e, t, s, r) {
                var o = arguments.length,
                    n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, s) : r,
                    i;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") n = Reflect.decorate(e, t, s, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        if (i = e[a]) n = (o < 3 ? i(n) : o > 3 ? i(t, s, n) : i(t, s)) || n;
                return o > 3 && n && Object.defineProperty(t, s, n), n
            };
            const v = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3);
            class j {
                constructor(e) {
                    this.popoverName = e;
                    this.storage = Object(y["a"])("saveToListButton", e, v);
                    this.isPopoverOpen = !this.storage.get("dismissed")
                }
                onDismissPopover() {
                    this.isPopoverOpen = false;
                    this.storage.set("dismissed", true)
                }
            }
            g([b["s"]], j.prototype, "isPopoverOpen", void 0);
            g([f["a"], b["e"]], j.prototype, "onDismissPopover", null);
            var _ = s("./src/udemy/js/course-taking/header/save-to-list-popover.less");
            var w = undefined && undefined.__decorate || function(e, t, s, r) {
                var o = arguments.length,
                    n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, s) : r,
                    i;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") n = Reflect.decorate(e, t, s, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        if (i = e[a]) n = (o < 3 ? i(n) : o > 3 ? i(t, s, n) : i(t, s)) || n;
                return o > 3 && n && Object.defineProperty(t, s, n), n
            };
            let C = class e extends d.a.Component {
                constructor(e) {
                    super(e);
                    this.saveToListPopoverStore = new j(e.popoverName)
                }
                render() {
                    const {
                        gettext: e
                    } = this.props;
                    return d.a.createElement(p["a"], {
                        detachFromTarget: true,
                        isOpen: this.saveToListPopoverStore.isPopoverOpen,
                        placement: "bottom-start",
                        trigger: this.props.trigger
                    }, d.a.createElement("div", {
                        className: "save-to-list-popover--save-to-list-popover-content--3TgFL"
                    }, d.a.createElement("div", {
                        "data-purpose": "title",
                        className: "ud-heading-sm"
                    }, this.props.title), d.a.createElement("div", {
                        "data-purpose": "text",
                        className: "ud-text-sm"
                    }, this.props.text), d.a.createElement(c["a"], {
                        "data-purpose": "dismiss-button",
                        udStyle: "secondary",
                        size: "small",
                        onClick: this.saveToListPopoverStore.onDismissPopover
                    }, e("Dismiss"))))
                }
            };
            C.propTypes = {
                gettext: m.a.func.isRequired
            };
            C = w([u["f"]], C);
            const O = Object(o["i"])(C);
            var E = s("./src/udemy/js/browse/components/save-to-list/save-to-list-button.mobx-store.ts");
            var S = s("./src/udemy/js/browse/components/save-to-list/save-to-list-modal.react-component.tsx");
            s.d(t, "a", (function() {
                return T
            }));
            var x = undefined && undefined.__rest || function(e, t) {
                var s = {};
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) s[r] = e[r];
                if (e != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
                        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) s[r[o]] = e[r[o]]
                    }
                return s
            };
            const P = e => {
                var {
                    onClick: t,
                    round: s = false,
                    size: n = "large",
                    labelPosition: u = "left",
                    label: l = undefined
                } = e, p = x(e, ["onClick", "round", "size", "labelPosition", "label"]);
                const h = Object.assign({
                    udStyle: "secondary",
                    size: n
                }, p);
                const m = Object(r["a"])("sm-max");
                const {
                    gettext: f
                } = Object(o["h"])();
                const b = !m ? f("Save") : f("Save to list");
                const y = l !== null && l !== void 0 ? l : b;
                if (s) {
                    return d.a.createElement(a["a"], Object.assign({}, h, {
                        round: true,
                        onClick: t
                    }), d.a.createElement(i.a, {
                        label: y,
                        color: "inherit"
                    }))
                }
                return d.a.createElement(c["a"], Object.assign({
                    onClick: t
                }, h), u === "left" && d.a.createElement("span", null, y), d.a.createElement(i.a, {
                    label: false,
                    color: "inherit",
                    size: n
                }), u === "right" && d.a.createElement("span", null, y))
            };
            const T = Object(u["f"])((e => {
                var {
                    course: t,
                    uiRegion: s,
                    showPopover: r = false,
                    popoverName: n = ""
                } = e, i = x(e, ["course", "uiRegion", "showPopover", "popoverName"]);
                const {
                    gettext: a,
                    interpolate: c
                } = Object(o["h"])();
                const [u] = d.a.useState((() => new E["a"](t, s, {
                    gettext: a,
                    interpolate: c
                })));
                if (!t.is_in_user_subscription) {
                    return null
                }

                function l() {
                    u.openModal()
                }
                let p = d.a.createElement(P, Object.assign({
                    onClick: l
                }, i));
                if (r) {
                    p = d.a.createElement(O, {
                        text: a("Save to list"),
                        title: a("Organize and save courses to lists"),
                        popoverName: n,
                        trigger: p
                    })
                }
                return d.a.createElement(d.a.Fragment, null, p, d.a.createElement(S["a"], {
                    saveToListButtonStore: u
                }))
            }))
        },
        "./src/udemy/js/browse/components/save-to-list/save-to-list-button.mobx-store.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return d
            }));
            var r = s("./node_modules/@udemy/event-tracking/dist/esm/tracker/tracker.js");
            var o = s("./node_modules/@udemy/react-messaging-components/dist/esm/toaster/toaster.mobx-store.js");
            var n = s("./node_modules/mobx/lib/mobx.module.js");
            var i = s("./src/udemy/js/browse/components/save-to-list/constants.ts");
            var a = s("./src/udemy/js/utils/ud-api.js");
            var c = s("./src/udemy/js/browse/components/save-to-list/events.ts");
            var u = undefined && undefined.__decorate || function(e, t, s, r) {
                var o = arguments.length,
                    n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, s) : r,
                    i;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") n = Reflect.decorate(e, t, s, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        if (i = e[a]) n = (o < 3 ? i(n) : o > 3 ? i(t, s, n) : i(t, s)) || n;
                return o > 3 && n && Object.defineProperty(t, s, n), n
            };
            var l = undefined && undefined.__awaiter || function(e, t, s, r) {
                function o(e) {
                    return e instanceof s ? e : new s((function(t) {
                        t(e)
                    }))
                }
                return new(s || (s = Promise))((function(s, n) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r["throw"](e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        e.done ? s(e.value) : o(e.value).then(i, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            };
            class d {
                constructor(e, t, s) {
                    this.course = e;
                    this.uiRegion = t;
                    this.isModalOpen = false;
                    this.isFetchingData = false;
                    this.hasError = false;
                    this.isSubmitting = new Set;
                    this.myList = [];
                    this.newListTitle = "";
                    this.titleTooLong = false;
                    this.isNewListFormVisible = false;
                    this.isCreatingNewList = false;
                    this.setNewListTitle = e => {
                        const t = e.target.value.trim();
                        if (t.length > i["b"]) {
                            this.titleTooLong = true
                        } else {
                            this.newListTitle = t;
                            this.titleTooLong = false
                        }
                    };
                    this.createList = () => l(this, void 0, void 0, (function*() {
                        var e;
                        const {
                            gettext: t,
                            interpolate: s
                        } = this.i18n;
                        this.isCreatingNewList = true;
                        try {
                            const e = yield a["f"].post("/users/me/subscribed-courses-collections/", {
                                title: this.newListTitle
                            });
                            Object(n["w"])((() => {
                                e.data.isSelected = true;
                                this.myList.push(e.data);
                                if (e.status === 201) {
                                    r["a"].publishEvent(new c["a"]({
                                        listId: e.data.list_id,
                                        uiRegion: this.uiRegion,
                                        nonInteraction: false
                                    }));
                                    this.saveToList(e.data.id, e.data.title);
                                    document.dispatchEvent(new CustomEvent(i["a"].CREATE, {
                                        detail: {
                                            collectionId: e.data.id
                                        }
                                    }))
                                }
                            }))
                        } catch (r) {
                            Object(n["w"])((() => {
                                this.hasError = true
                            }));
                            const o = (e = r.response) === null || e === void 0 ? void 0 : e.data;
                            const i = (o === null || o === void 0 ? void 0 : o.results) && o.results[0] || (o === null || o === void 0 ? void 0 : o.detail);
                            this.handleToaster(s(t("Failed to save to %(listTitle)s"), {
                                listTitle: this.newListTitle
                            }, true), i, "error")
                        } finally {
                            Object(n["w"])((() => {
                                this.newListTitle = "";
                                this.isNewListFormVisible = false;
                                this.isCreatingNewList = false
                            }))
                        }
                    }));
                    this.toggleNewListForm = () => {
                        this.isNewListFormVisible = !this.isNewListFormVisible
                    };
                    this.openModal = () => {
                        this.isModalOpen = true
                    };
                    this.hideModal = () => {
                        this.hasError = false;
                        this.myList = [];
                        this.isModalOpen = false
                    };
                    this.toggleList = e => l(this, void 0, void 0, (function*() {
                        this.hasError = false;
                        this.myList = this.myList.map((t => {
                            if (t.id === e) {
                                t.isSelected = !t.isSelected
                            }
                            return t
                        }))
                    }));
                    this.removeFromList = (e, t) => l(this, void 0, void 0, (function*() {
                        var s;
                        const {
                            gettext: o,
                            interpolate: u
                        } = this.i18n;
                        this.isSubmitting.add(e);
                        try {
                            const t = yield a["f"].delete(`/users/me/subscribed-courses-collections/${e}/courses/${this.course.id}/`);
                            if (t.status === 204) {
                                document.dispatchEvent(new CustomEvent(i["a"].REMOVE, {
                                    detail: {
                                        course: this.course,
                                        listId: e
                                    }
                                }));
                                r["a"].publishEvent(new c["d"]({
                                    listId: e,
                                    courseId: this.course.id,
                                    trackingId: this.course.frontendTrackingId ? this.course.frontendTrackingId : "",
                                    uiRegion: `${this.uiRegion}`
                                }));
                                this.handleToaster(o("Removed from list"))
                            }
                            Object(n["w"])((() => {
                                this.isSubmitting.delete(e)
                            }))
                        } catch (e) {
                            Object(n["w"])((() => this.hasError = true));
                            const r = (s = e.response) === null || s === void 0 ? void 0 : s.data;
                            const i = (r === null || r === void 0 ? void 0 : r.results) && r.results[0] || (r === null || r === void 0 ? void 0 : r.detail);
                            this.handleToaster(u(o("Failed to remove from %(listTitle)s"), {
                                listTitle: t
                            }, true), i, "error")
                        } finally {
                            Object(n["w"])((() => {
                                this.isSubmitting.delete(e)
                            }))
                        }
                    }));
                    this.saveToList = (e, t) => l(this, void 0, void 0, (function*() {
                        var s;
                        const {
                            gettext: o,
                            interpolate: u
                        } = this.i18n;
                        this.isSubmitting.add(e);
                        try {
                            const t = yield a["f"].post(`/users/me/subscribed-courses-collections/${e}/courses/`, {
                                course: this.course.id
                            });
                            if (t.status === 201) {
                                document.dispatchEvent(new CustomEvent(i["a"].ADD, {
                                    detail: {
                                        course: this.course,
                                        listId: e
                                    }
                                }));
                                r["a"].publishEvent(new c["e"]({
                                    listId: e,
                                    courseId: this.course.id,
                                    trackingId: this.course.frontendTrackingId ? this.course.frontendTrackingId : "",
                                    uiRegion: `${this.uiRegion}`
                                }));
                                this.handleToaster(o("Saved to list"))
                            }
                            Object(n["w"])((() => {
                                this.isSubmitting.delete(e)
                            }))
                        } catch (e) {
                            Object(n["w"])((() => this.hasError = true));
                            const r = (s = e.response) === null || s === void 0 ? void 0 : s.data;
                            const i = (r === null || r === void 0 ? void 0 : r.results) && r.results[0] || (r === null || r === void 0 ? void 0 : r.detail);
                            this.handleToaster(u(o("Failed to save to %(listTitle)s"), {
                                listTitle: t
                            }, true), i, "error")
                        } finally {
                            Object(n["w"])((() => {
                                this.isSubmitting.delete(e)
                            }))
                        }
                    }));
                    this.handleToaster = (e, t, s) => {
                        const r = {
                            udStyle: s !== null && s !== void 0 ? s : "success",
                            title: e,
                            body: t !== null && t !== void 0 ? t : "",
                            showCta: false
                        };
                        o["a"].addAlertBannerToast(r, {
                            autoDismiss: true,
                            autoDismissTimeout: 5e3
                        })
                    };
                    this.fetchListData = () => l(this, void 0, void 0, (function*() {
                        var e;
                        const {
                            gettext: t
                        } = this.i18n;
                        this.isFetchingData = true;
                        const s = a["f"].get("/users/me/subscribed-courses-collections/");
                        const r = a["f"].get(`/users/me/subscribed-courses/${this.course.id}/collections/`);
                        try {
                            const [e, t] = yield Promise.all([s, r]);
                            const o = t.data.results;
                            const i = e.data.results;
                            Object(n["w"])((() => {
                                i.forEach((e => {
                                    e.isSelected = o.some((t => t.id === e.id))
                                }));
                                this.myList = i
                            }))
                        } catch (s) {
                            Object(n["w"])((() => this.hasError = true));
                            const r = (e = s.response) === null || e === void 0 ? void 0 : e.data;
                            const o = (r === null || r === void 0 ? void 0 : r.results) && r.results[0] || (r === null || r === void 0 ? void 0 : r.detail);
                            this.handleToaster(t("Failed to load lists"), o, "error")
                        } finally {
                            Object(n["w"])((() => {
                                this.isFetchingData = false
                            }))
                        }
                    }));
                    this.course = e;
                    this.uiRegion = t;
                    this.i18n = s
                }
                get selectedList() {
                    return this.myList.filter((e => e.isSelected))
                }
            }
            u([n["s"]], d.prototype, "isModalOpen", void 0);
            u([n["s"]], d.prototype, "isFetchingData", void 0);
            u([n["s"]], d.prototype, "hasError", void 0);
            u([n["s"]], d.prototype, "isSubmitting", void 0);
            u([n["s"]], d.prototype, "myList", void 0);
            u([n["s"]], d.prototype, "newListTitle", void 0);
            u([n["s"]], d.prototype, "titleTooLong", void 0);
            u([n["s"]], d.prototype, "isNewListFormVisible", void 0);
            u([n["s"]], d.prototype, "isCreatingNewList", void 0);
            u([n["e"]], d.prototype, "setNewListTitle", void 0);
            u([n["e"]], d.prototype, "createList", void 0);
            u([n["e"]], d.prototype, "toggleNewListForm", void 0);
            u([n["e"]], d.prototype, "openModal", void 0);
            u([n["e"]], d.prototype, "hideModal", void 0);
            u([n["e"]], d.prototype, "toggleList", void 0);
            u([n["e"]], d.prototype, "removeFromList", void 0);
            u([n["e"]], d.prototype, "saveToList", void 0);
            u([n["g"]], d.prototype, "selectedList", null);
            u([n["e"]], d.prototype, "fetchListData", void 0)
        },
        "./src/udemy/js/browse/components/save-to-list/save-to-list-modal.less": function(e, t, s) {
            e.exports = {
                "save-to-list-modal": "save-to-list-modal--save-to-list-modal--3LWHv",
                "alert-box": "save-to-list-modal--alert-box--2e4S4"
            }
        },
        "./src/udemy/js/browse/components/save-to-list/save-to-list-modal.react-component.tsx": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var o = s("./node_modules/@udemy/react-dialog-components/dist/esm/modal/modal.react-component.js");
            var n = s("./node_modules/@udemy/react-form-components/dist/esm/form-group/form-group.react-component.js");
            var i = s("./node_modules/@udemy/react-reveal-components/dist/esm/loader/loader.react-component.js");
            var a = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var c = s("./node_modules/react/index.js");
            var u = s.n(c);
            var l = s("./src/udemy/js/browse/components/save-to-list/save-to-list-modal.less");
            var d = s.n(l);
            var p = s("./node_modules/@udemy/icons/dist/add-circle-solid.ud-icon");
            var h = s.n(p);
            var m = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var f = s("./node_modules/@udemy/react-form-components/dist/esm/text-input/text-input-form.react-component.js");
            var b = s("./node_modules/@udemy/react-form-components/dist/esm/checkbox/checkbox.react-component.js");
            var y = s("./node_modules/classnames/index.js");
            var g = s.n(y);
            var v = s("./src/udemy/js/browse/components/enhanced-form-elements/checkbox-with-loader.less");
            var j = s.n(v);
            var _ = undefined && undefined.__rest || function(e, t) {
                var s = {};
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) s[r] = e[r];
                if (e != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
                        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) s[r[o]] = e[r[o]]
                    }
                return s
            };
            const w = e => {
                var {
                    isLoading: t = false,
                    children: s
                } = e, r = _(e, ["isLoading", "children"]);
                if (t) {
                    return u.a.createElement("div", {
                        className: g()("ud-text-sm", j.a["loader-state"])
                    }, u.a.createElement(i["a"], {
                        size: "xsmall",
                        className: j.a["loader-icon"]
                    }), s)
                }
                return u.a.createElement(b["a"], r, s)
            };
            var C = s("./src/udemy/js/browse/components/save-to-list/constants.ts");
            var O = s("./src/udemy/js/organization-common/resource-context-menu/menu-items/checkbox-group.react-component.js");
            var E = s("./src/udemy/js/browse/components/save-to-list/save-to-list-selection-form.less");
            var S = s.n(E);
            var x = undefined && undefined.__decorate || function(e, t, s, r) {
                var o = arguments.length,
                    n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, s) : r,
                    i;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") n = Reflect.decorate(e, t, s, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        if (i = e[a]) n = (o < 3 ? i(n) : o > 3 ? i(t, s, n) : i(t, s)) || n;
                return o > 3 && n && Object.defineProperty(t, s, n), n
            };
            var P = undefined && undefined.__awaiter || function(e, t, s, r) {
                function o(e) {
                    return e instanceof s ? e : new s((function(t) {
                        t(e)
                    }))
                }
                return new(s || (s = Promise))((function(s, n) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r["throw"](e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        e.done ? s(e.value) : o(e.value).then(i, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            };
            let T = class e extends c["Component"] {
                constructor() {
                    super(...arguments);
                    this.toggleSelect = e => P(this, void 0, void 0, (function*() {
                        const t = parseInt(e.target.name, 10);
                        const s = e.target.title;
                        if (e.target.checked) {
                            yield this.props.store.saveToList(t, s)
                        } else {
                            yield this.props.store.removeFromList(t, s)
                        }
                        if (!this.props.store.hasError) {
                            yield this.props.store.toggleList(t)
                        }
                    }));
                    this.handleAddListClick = () => {
                        this.props.store.createList()
                    }
                }
                renderNewListForm() {
                    const {
                        gettext: e,
                        interpolate: t
                    } = this.props;
                    return u.a.createElement(n["b"], {
                        label: e("Create new list"),
                        labelProps: {
                            className: "ud-sr-only"
                        },
                        "data-purpose": "create-list-title-input",
                        className: S.a["new-list-form"],
                        note: this.props.store.titleTooLong ? t(e("List titles cannot exceed %(titleLimit)s characters"), {
                            titleLimit: C["b"]
                        }, true) : null,
                        validationState: this.props.store.titleTooLong ? "error" : "neutral"
                    }, u.a.createElement(f["a"], {
                        submitButtonProps: {
                            disabled: this.props.store.isCreatingNewList || this.props.store.newListTitle.length < C["c"]
                        },
                        onChange: this.props.store.setNewListTitle,
                        onSubmit: this.handleAddListClick,
                        maxLength: C["b"],
                        submitButtonContent: e("Create list")
                    }))
                }
                render() {
                    const {
                        gettext: e
                    } = this.props;
                    return u.a.createElement("div", {
                        "data-purpose": "save-to-list-selection"
                    }, this.props.store.myList && u.a.createElement(O["a"], null, this.props.store.myList.map((e => {
                        var t;
                        return u.a.createElement(w, {
                            "data-purpose": `item-checkbox-${e.id}`,
                            checked: (t = e.isSelected) !== null && t !== void 0 ? t : false,
                            key: e.id,
                            name: e.id.toString(),
                            onChange: this.toggleSelect,
                            isLoading: this.props.store.isSubmitting.has(e.id),
                            title: e.title
                        }, e.title)
                    }))), this.props.store.isNewListFormVisible ? this.renderNewListForm() : u.a.createElement(m["a"], {
                        "data-purpose": "create-new-list-button",
                        className: S.a["new-list-button"],
                        udStyle: "ghost",
                        size: "medium",
                        onClick: this.props.store.toggleNewListForm
                    }, u.a.createElement(h.a, {
                        label: false
                    }), e("Create new list")))
                }
            };
            T = x([a["f"]], T);
            const I = Object(r["i"])(T);
            s.d(t, "a", (function() {
                return R
            }));
            var k = undefined && undefined.__decorate || function(e, t, s, r) {
                var o = arguments.length,
                    n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, s) : r,
                    i;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") n = Reflect.decorate(e, t, s, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        if (i = e[a]) n = (o < 3 ? i(n) : o > 3 ? i(t, s, n) : i(t, s)) || n;
                return o > 3 && n && Object.defineProperty(t, s, n), n
            };
            let D = class e extends c["Component"] {
                constructor() {
                    super(...arguments);
                    this.exitHandler = () => {
                        this.props.saveToListButtonStore.hideModal()
                    };
                    this.renderBody = () => {
                        if (this.props.saveToListButtonStore.isFetchingData) {
                            return u.a.createElement(i["a"], {
                                size: "large",
                                block: true
                            })
                        }
                        return u.a.createElement(n["b"], {
                            udStyle: "fieldset",
                            label: ""
                        }, u.a.createElement(I, {
                            store: this.props.saveToListButtonStore
                        }))
                    }
                }
                render() {
                    const {
                        gettext: e
                    } = this.props;
                    return u.a.createElement(o["a"], {
                        title: e("Save to list"),
                        isOpen: this.props.saveToListButtonStore.isModalOpen,
                        onOpen: this.props.saveToListButtonStore.fetchListData,
                        onClose: this.exitHandler,
                        className: d.a["save-to-list-modal"]
                    }, this.renderBody())
                }
            };
            D = k([a["f"]], D);
            const R = Object(r["i"])(D)
        },
        "./src/udemy/js/browse/components/save-to-list/save-to-list-selection-form.less": function(e, t, s) {
            e.exports = {
                "new-list-button": "save-to-list-selection-form--new-list-button--nebWS",
                "new-list-form": "save-to-list-selection-form--new-list-form--2EYi1"
            }
        },
        "./src/udemy/js/browse/components/wishlist/unwishlisted-icon.react-component.tsx": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return c
            }));
            var r = s("./node_modules/@udemy/icons/dist/wishlisted.ud-icon");
            var o = s.n(r);
            var n = s("./node_modules/react/index.js");
            var i = s.n(n);
            const a = {
                fill: "transparent",
                padding: "1px",
                stroke: "currentColor",
                strokeWidth: "2"
            };
            const c = e => i.a.createElement(o.a, Object.assign({
                label: false
            }, e, {
                style: a
            }));
            c.$$udType = "Icon"
        },
        "./src/udemy/js/browse/components/wishlist/wishlist-button.react-component.tsx": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return p
            }));
            var r = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var o = s("./node_modules/@udemy/icons/dist/wishlisted.ud-icon");
            var n = s.n(o);
            var i = s("./node_modules/@udemy/react-core-components/dist/esm/icon-button/icon-button.react-component.js");
            var a = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var c = s("./node_modules/@udemy/react-reveal-components/dist/esm/loader/loader.react-component.js");
            var u = s("./node_modules/react/index.js");
            var l = s.n(u);
            var d = s("./src/udemy/js/browse/components/wishlist/unwishlisted-icon.react-component.tsx");
            const p = e => {
                const {
                    isWishlisted: t,
                    isLoading: s,
                    onClick: o,
                    round: u = false,
                    size: p = "medium",
                    wishlistCta: h = undefined,
                    wishlistedCta: m = null,
                    labelPosition: f = "left",
                    square: b = false,
                    givenButtonProps: y
                } = e;
                const {
                    gettext: g
                } = Object(r["h"])();
                const v = Object.assign(Object.assign({
                    udStyle: "secondary",
                    size: p,
                    onClick: o
                }, y), {
                    disabled: y === null || y === void 0 ? void 0 : y.disabled,
                    "aria-pressed": t,
                    "aria-label": h
                });
                const j = t ? n.a : d["a"];
                const _ = s ? l.a.createElement(c["a"], {
                    color: "inherit"
                }) : null;
                const w = h !== null && h !== void 0 ? h : g("Add to wishlist");
                const C = m !== null && m !== void 0 ? m : g("Wishlisted");
                const O = t ? C : w;
                if (b || u) {
                    return l.a.createElement(i["a"], Object.assign({}, v, {
                        round: u
                    }), _ !== null && _ !== void 0 ? _ : l.a.createElement(j, {
                        color: "inherit",
                        label: false
                    }))
                }
                return l.a.createElement(a["a"], v, _ !== null && _ !== void 0 ? _ : l.a.createElement(l.a.Fragment, null, f == "left" && l.a.createElement("span", null, O), l.a.createElement(j, {
                    color: "inherit",
                    size: f == "right" ? p : "small",
                    label: false
                }), f == "right" && l.a.createElement("span", null, O)))
            }
        },
        "./src/udemy/js/browse/ui-regions.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));
            const r = {
                ALL_COURSES: "all_courses",
                ASSESSMENT_UNIT_PP_LIHP: "assessment_unit_pp_lihp",
                ASSESSMENT_UNIT_TOPIC: "assessment_unit_topic",
                ASSESSMENT_RECOMMENDATION: "assessment_recommendation",
                BODY: "body",
                BOTTOM_DRAWER: "bottom_drawer",
                BOTTOM_DRAWER_COURSE_CARD: "bottom_drawer.course_card",
                BOTTOM_DRAWER_LECTURE_LIST: "bottom_drawer.lecture_list",
                BOTTOM_DRAWER_RECOMMENDATION: "bottom_drawer.recommendation",
                CAREER_TRACKS: "career_tracks",
                COLLECTIONS: "collections",
                COURSE_ACTIONS: "course_actions",
                COURSE_COMPARISON: "course_comparison",
                COURSE_DIRECTORY: "course_directory",
                COURSE_LEDE: "course_lede",
                COURSE_OBJECTIVES: "course_objectives",
                COURSE_TAKING_HEADER: "course_taking_header",
                CURATED_FOR_UB: "curated_for_ub",
                CURRICULUM: "curriculum",
                LAB_RECOMMENDATION: "lab_recommendation",
                LEARNING_MAP: "learning_map",
                LEARNING_MAP_SIDE_NAV: "learning_map_side_nav",
                LEARNING_MAP_DRAWER_NAV: "learning_map_drawer_nav",
                LECTURE_STACK: "lecture_stack",
                LECTURE_DISCOVERY_UNIT: "lecture_discovery_unit",
                MORE_COURSES_BY_INSTRUCTORS: "more_courses_by_instructors",
                NOT_AVAILABLE: "not_available",
                OCCUPATION_GOAL_HEADER: "occupation_goal_header",
                OLP_ENTRY_BANNER: "olp_entry_banner",
                OTHER_SUBSCRIPTION_PLANS: "other_subscription_plans",
                PERSONAL_PLAN_BANNER: "personal_plan_banner",
                PERSONAL_PLAN_CHECKLIST: "personal_plan_checklist",
                PERSONAL_PLAN: "personal_plan",
                PURCHASE_SECTION: "purchase_section",
                QUICK_PREVIEW: "quick_preview",
                RECOMMENDATIONS: "recommendations",
                RETURN_TO_UDEMY: "return_to_udemy",
                SEARCH: "search",
                SEARCH_RECOMMENDATION_UNIT: "search_recommendation_unit",
                SET_CAREER_GOAL_UNIT: "set_career_goal_unit",
                SIDEBAR: "sidebar",
                SIMILAR_OCCUPATIONS: "similar_occupations",
                SLIDER: "slider",
                STICKY_FOOTER: "sticky_footer",
                STICKY_HEADER: "sticky_header",
                SUBS_COLLECTION_SAMPLER: "subs-collection-sampler",
                SUBSCRIBE_NOTICE: "subscribe_notice",
                SUBSCRIPTION_EXPRESS_CHECKOUT_SUCCESS: "subscription_express_checkout_success",
                TESTLET_RESULTS: "testlet_results",
                UB_ADVERTISEMENT: "ub_advertisement",
                UDEMY_LOGO: "udemy_logo",
                UDEMY_PRO_BANNER: "udemy_pro_banner",
                WISHLIST: "wishlist",
                SUBSCRIPTION_OPTIONS_CTA: "subscription_options_cta"
            }
        },
        "./src/udemy/js/cart/events.ts": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return o
            }));
            s.d(t, "g", (function() {
                return n
            }));
            s.d(t, "a", (function() {
                return i
            }));
            s.d(t, "d", (function() {
                return u
            }));
            s.d(t, "f", (function() {
                return l
            }));
            s.d(t, "c", (function() {
                return d
            }));
            s.d(t, "e", (function() {
                return p
            }));
            s.d(t, "h", (function() {
                return h
            }));
            var r = s("./src/udemy/js/event-tracking/tracker/event-common.ts");
            const o = {
                COURSE: "course",
                SUBSCRIPTION: "subscription"
            };
            var n;
            (function(e) {
                e["UDLITE"] = "udlite";
                e["UDHEAVY"] = "udheavy"
            })(n || (n = {}));
            class i extends r["a"] {
                constructor(e) {
                    let {
                        buyables: t
                    } = e;
                    super("AddToCartEvent");
                    this.buyables = t
                }
            }
            class a extends r["a"] {
                constructor(e) {
                    let {
                        buyables: t,
                        action: s,
                        uiRegion: r
                    } = e;
                    super("CartErrorDisplayEvent");
                    this.buyables = t;
                    this.action = s;
                    this.uiRegion = r
                }
            }
            class c extends r["a"] {
                constructor() {
                    super("RefundNoticeTermsClickEvent")
                }
            }
            class u extends r["a"] {
                constructor(e, t, s) {
                    super("CartMessageImpressionEvent");
                    this.componentVersion = e;
                    this.title = t;
                    this.subTitle = s
                }
            }
            class l extends r["a"] {
                constructor(e) {
                    super("CartSliderMenuImpressionEvent");
                    this.componentVersion = e
                }
            }
            class d extends r["a"] {
                constructor(e) {
                    super("CartCheckoutClickEvent");
                    this.componentVersion = e
                }
            }
            class p extends r["a"] {
                constructor(e, t, s) {
                    super("CartNotificationImpressionEvent");
                    this.message = e;
                    this.reason = t;
                    this.componentVersion = s
                }
            }
            class h extends r["a"] {
                constructor(e, t) {
                    super("ShoppingListImpressionEvent");
                    this.componentVersion = e;
                    this.shoppingListType = t
                }
            }
        },
        "./src/udemy/js/course-landing-page/components/add-to-cart/add-to-cart.less": function(e, t, s) {
            e.exports = {
                "add-to-cart__notification": "add-to-cart--add-to-cart__notification--sVT4u"
            }
        },
        "./src/udemy/js/course-landing-page/components/add-to-cart/add-to-cart.react-isocomponent.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/cart/dist/esm/index.js");
            var o = s("./node_modules/@udemy/i18n/dist/esm/index.js");
            var n = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var i = s("./node_modules/@udemy/react-reveal-components/dist/esm/loader/loader.react-component.js");
            var a = s("./node_modules/autobind-decorator/lib/esm/index.js");
            var c = s("./node_modules/mobx/lib/mobx.module.js");
            var u = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var l = s("./node_modules/prop-types/index.js");
            var d = s.n(l);
            var p = s("./node_modules/react/index.js");
            var h = s.n(p);
            var m = s("./src/udemy/js/base-components/dialog/ajax-modal.react-component.js");
            var f = s("./src/udemy/js/course-landing-page/components/inject-course-landing-component-context.tsx");
            var b = s("./src/udemy/js/course-landing-page/components/price-text/helpers.js");
            var y = s("./src/udemy/js/shopping-client/shopping-client.mobx-store.js");
            var g = s("./src/udemy/js/utils/isomorphic-rendering.js");
            var v = s("./src/udemy/js/course-landing-page/components/buy-button/buy-button.react-isocomponent.js");
            var j = s("./src/udemy/js/course-landing-page/components/add-to-cart/add-to-cart.less");
            var _ = s.n(j);
            var w, C, O, E, S;
            let x = Object(u["f"])(w = (C = (S = class e extends p["Component"] {
                constructor() {
                    super(...arguments);
                    babelHelpers.initializerDefineProperty(this, "isMounted", O, this);
                    babelHelpers.initializerDefineProperty(this, "isModalOpen", E, this)
                }
                componentDidMount() {
                    this.setIsMounted()
                }
                showCartSuccessModal() {
                    this.isModalOpen = true
                }
                hideCartSuccessModal() {
                    this.isModalOpen = false
                }
                setIsMounted() {
                    this.isMounted = true
                }
                attachCourseTrackingIdToBuyables(e) {
                    e.forEach((e => {
                        if (!e.frontendTrackingId) {
                            e.frontendTrackingId = this.props.eventTrackingContext.courseTrackingId
                        }
                    }))
                }
                createBuyableUrl() {
                    const e = this.props.buyables[0];
                    return `/cart/added-popup/${e.buyable_object_type}/${e.id}/`
                }
                render() {
                    const {
                        buyables: e,
                        cartButtonTextAdd: t = this.props.gettext("Add to cart"),
                        componentContext: s,
                        onAddRedirectUrl: o,
                        eventTrackingContext: a
                    } = this.props;
                    if (a.courseTrackingId) {
                        this.attachCourseTrackingIdToBuyables(e)
                    }
                    const c = h.a.createElement(m["a"], {
                        labelledById: "cart-success-title",
                        url: this.createBuyableUrl(),
                        isOpen: this.isModalOpen,
                        onClose: this.hideCartSuccessModal
                    });
                    const u = s && s.data || this.props;
                    if (s && s.data) {
                        const {
                            isValidStudent: e
                        } = Object(b["a"])(u);
                        if (e) {
                            return h.a.createElement(v["a"], this.props)
                        }
                    }
                    return h.a.createElement(r["a"], {
                        buttonClass: n["a"],
                        buyables: e.slice(),
                        cartButtonTextAdd: t,
                        cartButtonClassesAdd: this.props.className,
                        cartButtonClassesGoToCart: this.props.className,
                        disabled: !this.isMounted,
                        loader: h.a.createElement(i["a"], {
                            color: "inherit",
                            size: "medium"
                        }),
                        notificationStyle: _.a["add-to-cart__notification"],
                        onAddRedirectUrl: o,
                        shoppingClient: y["a"],
                        addToCartSuccessModal: c,
                        addToCartContext: this.props.addToCartContext,
                        showCartSuccessModal: this.showCartSuccessModal,
                        buttonStyleProps: {
                            udStyle: this.props.udStyle || "brand",
                            size: this.props.size
                        },
                        allowAddToCartSuccessModal: this.props.allowAddToCartSuccessModal,
                        forceGoToCart: this.props.forceGoToCart,
                        cartButtonTextGoToCart: this.props.cartButtonTextGoToCart
                    })
                }
            }, S.propTypes = {
                componentContext: d.a.shape({
                    data: d.a.object.isRequired
                }),
                buyables: d.a.oneOfType([d.a.arrayOf(d.a.shape({
                    buyable_object_type: d.a.string.isRequired,
                    id: d.a.number.isRequired
                })), u["b"].arrayOrObservableArrayOf(d.a.shape({
                    buyable_object_type: d.a.string.isRequired,
                    id: d.a.number.isRequired
                }))]),
                cartButtonTextAdd: d.a.string,
                onAddRedirectUrl: d.a.string,
                eventTrackingContext: d.a.object,
                className: d.a.string,
                udStyle: d.a.string,
                size: d.a.oneOf(["medium", "large"]),
                addToCartContext: d.a.shape({
                    fbt_add_to_cart: d.a.bool
                }),
                allowAddToCartSuccessModal: d.a.bool,
                forceGoToCart: d.a.bool,
                cartButtonTextGoToCart: d.a.string,
                gettext: d.a.func.isRequired
            }, S.defaultProps = {
                componentContext: undefined,
                buyables: [],
                cartButtonTextAdd: undefined,
                onAddRedirectUrl: undefined,
                eventTrackingContext: {},
                className: "",
                udStyle: "brand",
                size: "large",
                addToCartContext: undefined,
                allowAddToCartSuccessModal: true,
                forceGoToCart: false,
                cartButtonTextGoToCart: undefined
            }, S), O = babelHelpers.applyDecoratedDescriptor(C.prototype, "isMounted", [c["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), E = babelHelpers.applyDecoratedDescriptor(C.prototype, "isModalOpen", [c["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), babelHelpers.applyDecoratedDescriptor(C.prototype, "showCartSuccessModal", [a["a"], c["e"]], Object.getOwnPropertyDescriptor(C.prototype, "showCartSuccessModal"), C.prototype), babelHelpers.applyDecoratedDescriptor(C.prototype, "hideCartSuccessModal", [a["a"], c["e"]], Object.getOwnPropertyDescriptor(C.prototype, "hideCartSuccessModal"), C.prototype), babelHelpers.applyDecoratedDescriptor(C.prototype, "setIsMounted", [c["e"]], Object.getOwnPropertyDescriptor(C.prototype, "setIsMounted"), C.prototype), C)) || w;
            const P = Object(f["a"])("purchase")(x);
            const T = Object(g["b"])(Object(o["i"])(x));
            t["a"] = T
        },
        "./src/udemy/js/course-landing-page/components/buy-button/buy-button.react-isocomponent.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/mobx/lib/mobx.module.js");
            var o = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var n = s("./node_modules/prop-types/index.js");
            var i = s.n(n);
            var a = s("./node_modules/react/index.js");
            var c = s.n(a);
            var u = s("./node_modules/@udemy/react-core-components/dist/esm/button/button.react-component.js");
            var l = s("./node_modules/autobind-decorator/lib/esm/index.js");
            var d = s("./src/udemy/js/browse/events.ts");
            var p = s("./src/udemy/js/event-tracking/tracker/tracker.ts");
            var h = s("./src/udemy/js/payment/checkout-referrer-helper.ts");
            var m = s("./src/udemy/js/utils/server-or-client.ts");
            var f = s("./src/udemy/js/utils/ud-link.js");
            var b = s("./src/udemy/js/utils/ud-me.js");
            var y = s("./src/udemy/js/course-landing-page/components/express-checkout-button/styles.less");
            var g, v, j;
            let _ = Object(o["f"])(g = (v = (j = class e extends a["Component"] {
                constructor() {
                    super(...arguments);
                    this.eventTypeToEvent = {
                        enroll_now: d["q"],
                        buy_now: d["f"]
                    }
                }
                redirectsToCheckoutUrl() {
                    if (this.props.clickEventData) {
                        this.fireClickEvent()
                    }
                    h["a"].saveCheckoutReferrer();
                    if (b["a"].id) {
                        m["a"].global.location.href = this.props.checkoutUrl
                    } else {
                        const e = f["a"].to("join", "signup-popup", {
                            next: this.props.checkoutUrl
                        });
                        m["a"].global.location.href = e
                    }
                }
                fireClickEvent() {
                    const {
                        buyable: e,
                        eventType: t
                    } = this.props.clickEventData;
                    const s = this.eventTypeToEvent[t];
                    if (s) {
                        p["a"].publishEvent(new s({
                            buyable: e
                        }))
                    }
                }
                render() {
                    const {
                        bsStyle: e,
                        buttonText: t = gettext("Buy now"),
                        isDisabled: s,
                        size: r,
                        className: o
                    } = this.props;
                    return c.a.createElement("div", null, c.a.createElement(u["a"], {
                        "data-purpose": "buy-this-course-button",
                        size: r,
                        udStyle: e === undefined ? "brand" : e,
                        onClick: this.redirectsToCheckoutUrl,
                        className: (o ? o + " " : "") + "styles--btn--express-checkout--3h0xG",
                        disabled: s || b["a"].isLoading
                    }, t))
                }
            }, j.propTypes = {
                bsStyle: i.a.string,
                buttonText: i.a.string,
                checkoutUrl: i.a.string.isRequired,
                isDisabled: i.a.bool,
                size: i.a.string,
                clickEventData: i.a.shape({
                    buyable: i.a.shape({
                        id: i.a.oneOfType([i.a.string, i.a.number]),
                        type: i.a.string,
                        trackingId: i.a.string
                    }),
                    eventType: i.a.string
                }),
                className: i.a.string
            }, j.defaultProps = {
                bsStyle: undefined,
                buttonText: undefined,
                isDisabled: false,
                size: "large",
                className: null,
                clickEventData: {}
            }, j), babelHelpers.applyDecoratedDescriptor(v.prototype, "redirectsToCheckoutUrl", [l["a"], r["e"]], Object.getOwnPropertyDescriptor(v.prototype, "redirectsToCheckoutUrl"), v.prototype), babelHelpers.applyDecoratedDescriptor(v.prototype, "fireClickEvent", [l["a"]], Object.getOwnPropertyDescriptor(v.prototype, "fireClickEvent"), v.prototype), v)) || g;
            var w = s("./src/udemy/js/course-landing-page/components/inject-course-landing-component-context.tsx");
            var C = s("./src/udemy/js/utils/isomorphic-rendering.js");
            s.d(t, "a", (function() {
                return k
            }));
            var O, E, S, x;
            let P = Object(o["f"])(O = (E = (x = class e extends c.a.Component {
                constructor() {
                    super(...arguments);
                    babelHelpers.initializerDefineProperty(this, "isMounted", S, this)
                }
                componentDidMount() {
                    this.setIsMounted()
                }
                setIsMounted() {
                    this.isMounted = true
                }
                get buyable() {
                    return {
                        id: this.props.payment_data.buyableId,
                        type: this.props.payment_data.buyableType,
                        trackingId: this.props.eventTrackingContext.courseTrackingId
                    }
                }
                render() {
                    const e = !this.isMounted || this.props.enrollment_disabled;
                    return c.a.createElement(_, {
                        bsStyle: this.props.style === undefined ? "brand" : this.props.style,
                        buttonText: this.props.text,
                        checkoutUrl: this.props.buy_url,
                        isDisabled: e,
                        size: this.props.size,
                        clickEventData: {
                            buyable: this.buyable,
                            eventType: this.props.event_type
                        }
                    })
                }
            }, x.propTypes = {
                buy_url: i.a.string.isRequired,
                text: i.a.string.isRequired,
                size: i.a.string,
                style: i.a.string,
                enrollment_disabled: i.a.bool,
                event_type: i.a.string.isRequired,
                payment_data: i.a.shape({
                    buyableId: i.a.oneOfType([i.a.string, i.a.number]),
                    buyableType: i.a.string
                }),
                eventTrackingContext: i.a.shape({
                    courseTrackingId: i.a.string
                })
            }, x.defaultProps = {
                size: "large",
                style: undefined,
                enrollment_disabled: false,
                payment_data: {},
                eventTrackingContext: {}
            }, x), S = babelHelpers.applyDecoratedDescriptor(E.prototype, "isMounted", [r["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), babelHelpers.applyDecoratedDescriptor(E.prototype, "setIsMounted", [r["e"]], Object.getOwnPropertyDescriptor(E.prototype, "setIsMounted"), E.prototype), E)) || O;
            const T = Object(C["b"])(Object(w["a"])("buy_button", true)(P));
            var I = t["b"] = T;
            const k = Object(w["a"])("buy_button", true)((e => {
                let {
                    button: t,
                    eventTrackingContext: s
                } = e;
                return c.a.createElement(P, Object.assign({}, t, {
                    eventTrackingContext: s
                }))
            }))
        },
        "./src/udemy/js/course-landing-page/components/confirmation-bottom-drawer/constants.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));
            s.d(t, "c", (function() {
                return o
            }));
            s.d(t, "b", (function() {
                return n
            }));
            const r = "CONFIRMATION_BOTTOM_DRAWER_DEFAULT_STATE";
            const o = "CONFIRMATION_BOTTOM_DRAWER_LOADING_STATE";
            const n = "CONFIRMATION_BOTTOM_DRAWER_FINISHED_STATE"
        },
        "./src/udemy/js/course-landing-page/components/express-checkout-button/styles.less": function(e, t, s) {
            e.exports = {
                "btn--express-checkout": "styles--btn--express-checkout--3h0xG"
            }
        },
        "./src/udemy/js/course-landing-page/components/inject-course-landing-component-context.tsx": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return l
            }));
            var r = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var o = s("./node_modules/prop-types/index.js");
            var n = s.n(o);
            var i = s("./node_modules/react/index.js");
            var a = s.n(i);
            var c = undefined && undefined.__decorate || function(e, t, s, r) {
                var o = arguments.length,
                    n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, s) : r,
                    i;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") n = Reflect.decorate(e, t, s, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        if (i = e[a]) n = (o < 3 ? i(n) : o > 3 ? i(t, s, n) : i(t, s)) || n;
                return o > 3 && n && Object.defineProperty(t, s, n), n
            };
            var u = undefined && undefined.__rest || function(e, t) {
                var s = {};
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) s[r] = e[r];
                if (e != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
                        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) s[r[o]] = e[r[o]]
                    }
                return s
            };

            function l(e) {
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                return s => {
                    function r(r) {
                        return a.a.createElement(d, Object.assign({
                            componentName: e,
                            componentClass: s,
                            isIsomorphic: t
                        }, r))
                    }
                    r.wrappedComponent = s;
                    return r
                }
            }
            t["a"] = l;
            let d = class e extends i["Component"] {
                render() {
                    const e = this.props,
                        {
                            componentName: t,
                            componentClass: s,
                            datadogTags: r,
                            isIsomorphic: o,
                            store: n
                        } = e,
                        i = u(e, ["componentName", "componentClass", "datadogTags", "isIsomorphic", "store"]);
                    const c = Object.assign({
                        datadogTags: r,
                        store: n
                    }, i);
                    const l = n === null || n === void 0 ? void 0 : n.contexts.get(t);
                    if (o) {
                        Object.assign(c, Object.assign({}, l))
                    } else {
                        Object.assign(c, {
                            componentContext: l
                        })
                    }
                    return a.a.createElement(s, c, null)
                }
            };
            d.propTypes = {
                componentName: n.a.string.isRequired,
                componentClass: n.a.elementType.isRequired,
                datadogTags: n.a.object,
                isIsomorphic: n.a.bool,
                store: n.a.object
            };
            d.defaultProps = {
                datadogTags: undefined,
                isIsomorphic: false,
                store: undefined
            };
            d = c([r["f"]], d)
        },
        "./src/udemy/js/course-landing-page/components/price-text/helpers.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));

            function r(e) {
                const t = e.pricing_result;
                const s = e.show_discount_info && t.has_discount_saving;
                const r = t.has_discount_saving ? t.price.amount : e.list_price.amount;
                const o = t.has_discount_saving ? t.price.price_string : e.list_price.price_string;
                const n = s ? e.list_price.amount : r;
                const i = s ? e.list_price.price_string : o;
                const a = e.is_valid_student;
                const c = e.purchase_date;
                return {
                    discountPrice: r,
                    discountPriceString: o,
                    isValidStudent: a,
                    listPrice: n,
                    listPriceString: i,
                    purchaseDate: c,
                    showDiscountPrice: s
                }
            }
        },
        "./src/udemy/js/course-landing-page/components/wishlist/wishlist.mobx-store.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/autobind-decorator/lib/esm/index.js");
            var o = s("./node_modules/mobx/lib/mobx.module.js");
            var n = s("./src/udemy/js/braze/ud-braze.js");
            var i = s("./src/udemy/js/browse/events.ts");
            var a = s("./src/udemy/js/event-tracking/tracker/tracker.ts");
            var c = s("./src/udemy/js/shopping-client/shopping-client.mobx-store.js");
            var u = s("./src/udemy/js/utils/ud-link.js");
            var l = s("./src/udemy/js/utils/ud-me.js");
            var d = s("./src/udemy/js/course-landing-page/components/confirmation-bottom-drawer/constants.js");
            const p = "WISHLIST_DEFAULT_STATE";
            const h = "WISHLIST_LOADING_STATE";
            const m = "WISHLIST_FINISHED_STATE";

            function f() {
                return {
                    title: {
                        [d["a"]]: gettext("Add course to wishlist?"),
                        [d["c"]]: gettext("Add course to wishlist?"),
                        [d["b"]]: gettext("Course added to wishlist")
                    },
                    content: {
                        [d["a"]]: gettext("Please confirm that you want to add this course to your wishlist")
                    },
                    controls: {
                        cancelText: gettext("Cancel"),
                        closeText: gettext("Close"),
                        confirmText: gettext("Add to wishlist")
                    }
                }
            }
            s.d(t, "a", (function() {
                return y
            }));
            var b;
            let y = (b = class e {
                constructor(e, t) {
                    Object(o["l"])(this, {
                        wishlistProcessState: p,
                        isWishlisted: this._getIsWishlisted(e.id)
                    });
                    this.window = t;
                    this.course = e;
                    this.searchParams = new URLSearchParams(this.window.location.search);
                    this.buyables = {
                        buyable_object_type: "course",
                        id: this.course.id
                    }
                }
                _getIsWishlisted(e) {
                    return c["a"].lists.wishlist.items.some((t => t.buyable.id === e))
                }
                _setIsWishlisted() {
                    this.isWishlisted = true;
                    this.course.is_wishlisted = true
                }
                _clearIsWishlisted() {
                    this.isWishlisted = false;
                    this.course.is_wishlisted = false
                }
                _setWishlistProcessState(e) {
                    this.wishlistProcessState = e
                }
                _buildNextUrl() {
                    this.searchParams.set("xref", "wish");
                    this.searchParams.set("courseId", this.course.id);
                    const e = `${this.window.location.href.split("?")[0]}?${this.searchParams.toString()}`;
                    return e
                }
                _authUrl() {
                    const e = this._buildNextUrl();
                    const t = this.window.location.href;
                    if (l["a"].id) {
                        return e
                    }
                    return u["a"].toAuth({
                        showLogin: false,
                        nextUrl: e,
                        returnUrl: t,
                        source: "course_landing_page",
                        responseType: "html"
                    })
                }
                logWishlistClickEvent() {
                    a["a"].publishEvent(new i["T"]({
                        id: this.course.id,
                        trackingId: this.course.frontendTrackingId || this.course.tracking_id
                    }));
                    Object(n["b"])((e => {
                        if (e.isPushPermissionGranted()) {
                            e.logCustomEvent("Wishlist", {
                                course_id: this.course.id
                            })
                        }
                    }))
                }
                _addToWishlist() {
                    this._setIsWishlisted();
                    this._setWishlistProcessState(h);
                    this.logWishlistClickEvent();
                    return c["a"].addToList("wishlist", {
                        buyable: this.buyables
                    }).then(Object(o["e"])((() => {
                        this._setWishlistProcessState(m);
                        return Promise.resolve()
                    }))).catch(Object(o["e"])((e => {
                        this._clearIsWishlisted();
                        this._setWishlistProcessState(p);
                        throw e
                    })))
                }
                _removeFromWishlist() {
                    this._clearIsWishlisted();
                    this._setWishlistProcessState(h);
                    return c["a"].removeFromList("wishlist", {
                        buyable: this.buyables
                    }).then(Object(o["e"])((() => {
                        this._setWishlistProcessState(m);
                        return Promise.resolve()
                    }))).catch(Object(o["e"])((e => {
                        this._setIsWishlisted();
                        this._setWishlistProcessState(p);
                        throw e
                    })))
                }
                _getHasWishlistIntent() {
                    return this.searchParams.get("xref") === "wish"
                }
                toggleWishlist() {
                    const e = this._authUrl();
                    if (!l["a"].id) {
                        this.window.location.href = e
                    } else if (!this.apiRequestIsLoading) {
                        const e = this.isWishlisted ? this._removeFromWishlist : this._addToWishlist;
                        this._setWishlistProcessState(p);
                        return e()
                    }
                }
                removeWishlistIntent() {
                    if (!this._getHasWishlistIntent()) {
                        return
                    }
                    this.searchParams.delete("xref");
                    this.searchParams.delete("courseId");
                    this.window.history.replaceState({}, "", `${this.window.location.pathname}?${this.searchParams.toString()}`)
                }
                get apiRequestIsLoading() {
                    return this.wishlistProcessState === h
                }
            }, babelHelpers.applyDecoratedDescriptor(b.prototype, "_getIsWishlisted", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "_getIsWishlisted"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_setIsWishlisted", [r["a"], o["e"]], Object.getOwnPropertyDescriptor(b.prototype, "_setIsWishlisted"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_clearIsWishlisted", [r["a"], o["e"]], Object.getOwnPropertyDescriptor(b.prototype, "_clearIsWishlisted"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_setWishlistProcessState", [r["a"], o["e"]], Object.getOwnPropertyDescriptor(b.prototype, "_setWishlistProcessState"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_buildNextUrl", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "_buildNextUrl"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_authUrl", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "_authUrl"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "logWishlistClickEvent", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "logWishlistClickEvent"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_addToWishlist", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "_addToWishlist"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_removeFromWishlist", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "_removeFromWishlist"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "_getHasWishlistIntent", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "_getHasWishlistIntent"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "toggleWishlist", [r["a"], o["e"]], Object.getOwnPropertyDescriptor(b.prototype, "toggleWishlist"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "removeWishlistIntent", [r["a"]], Object.getOwnPropertyDescriptor(b.prototype, "removeWishlistIntent"), b.prototype), babelHelpers.applyDecoratedDescriptor(b.prototype, "apiRequestIsLoading", [o["g"]], Object.getOwnPropertyDescriptor(b.prototype, "apiRequestIsLoading"), b.prototype), b)
        },
        "./src/udemy/js/course-landing-page/components/wishlist/wishlist.react-component.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return _
            }));
            var r = s("./node_modules/mobx/lib/mobx.module.js");
            var o = s("./node_modules/mobx-react/dist/mobx-react.module.js");
            var n = s("./node_modules/prop-types/index.js");
            var i = s.n(n);
            var a = s("./node_modules/react/index.js");
            var c = s.n(a);
            var u = s("./src/udemy/js/browse/components/save-to-list/save-to-list-button-wrapper.react-component.tsx");
            var l = s("./src/udemy/js/browse/components/wishlist/wishlist-button.react-component.tsx");
            var d = s("./src/udemy/js/browse/ui-regions.ts");
            var p = s("./src/udemy/js/common/load-common-app-context.ts");
            var h = s("./src/udemy/js/utils/get-config-data.js");
            var m = s("./src/udemy/js/utils/ud-me.js");
            var f = s("./src/udemy/js/course-landing-page/components/wishlist/wishlist.mobx-store.js");
            var b, y, g, v, j;
            let _ = Object(o["f"])(b = (y = (j = class e extends c.a.Component {
                constructor() {
                    super(...arguments);
                    babelHelpers.initializerDefineProperty(this, "isLoadingCommonAppContext", g, this);
                    babelHelpers.initializerDefineProperty(this, "isPersonalPlanSubscriber", v, this)
                }
                componentDidMount() {
                    Object(p["a"])().then((e => {
                        Object(r["w"])((() => {
                            this.isLoadingCommonAppContext = false;
                            this.isPersonalPlanSubscriber = e.data.header.user.consumer_subscription_active
                        }))
                    }))
                }
                render() {
                    const {
                        wishlistStore: e,
                        round: t,
                        isMobile: s,
                        isCourseInUserSubscription: r,
                        uiRegion: o,
                        ...n
                    } = this.props;
                    if (this.isLoadingCommonAppContext) {
                        return null
                    }
                    if (this.isPersonalPlanSubscriber && r) {
                        return c.a.createElement(u["a"], {
                            course: {
                                id: e.course.id,
                                is_in_user_subscription: true
                            },
                            uiRegion: o,
                            size: "medium",
                            labelPosition: "left"
                        })
                    }
                    if (!Object(h["a"])().features.wishlist || m["a"].isLoading) {
                        return null
                    }
                    return c.a.createElement("div", null, c.a.createElement(l["a"], Object.assign({
                        "data-purpose": "toggle-wishlist",
                        isWishlisted: e.isWishlisted,
                        isLoading: e.apiRequestIsLoading,
                        onClick: e.toggleWishlist,
                        round: t,
                        wishlistCta: s ? gettext("Add to Wishlist") : gettext("Wishlist"),
                        style: {
                            width: "100%"
                        }
                    }, n)))
                }
            }, j.propTypes = {
                wishlistStore: i.a.instanceOf(f["a"]).isRequired,
                round: i.a.bool,
                isMobile: i.a.bool,
                isCourseInUserSubscription: i.a.bool,
                uiRegion: i.a.string
            }, j.defaultProps = {
                round: false,
                isMobile: true,
                isCourseInUserSubscription: false,
                uiRegion: d["a"].WISHLIST
            }, j), g = babelHelpers.applyDecoratedDescriptor(y.prototype, "isLoadingCommonAppContext", [r["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return true
                }
            }), v = babelHelpers.applyDecoratedDescriptor(y.prototype, "isPersonalPlanSubscriber", [r["s"]], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: function() {
                    return false
                }
            }), y)) || b
        },
        "./src/udemy/js/course-taking/header/save-to-list-popover.less": function(e, t, s) {
            e.exports = {
                "save-to-list-popover-content": "save-to-list-popover--save-to-list-popover-content--3TgFL"
            }
        },
        "./src/udemy/js/payment/checkout-referrer-helper.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            }));
            var r = s("./src/udemy/js/utils/server-or-client.ts");
            class o {
                static saveCheckoutReferrer() {
                    r["a"].global.sessionStorage.setItem(o.checkoutReferrerUrlSessionKey, new URL(location.href).pathname)
                }
                static goToCheckoutReferrer() {
                    const e = r["a"].global.sessionStorage.getItem(o.checkoutReferrerUrlSessionKey);
                    r["a"].global.location.href = e !== null && e !== void 0 ? e : "/cart"
                }
            }
            o.checkoutReferrerUrlSessionKey = "checkoutReferrerURL"
        },
        "./src/udemy/js/shopping-client/config.js": function(e, t, s) {
            "use strict";
            const r = {
                recommendations: {
                    get alsoLike() {
                        return gettext("You might also like")
                    },
                    get alsoViewed() {
                        return gettext("Students Who Viewed This Course Also Viewed")
                    },
                    get addedToCartTitle() {
                        return gettext("Because you added %(title)s")
                    },
                    get categoryBasedTitle() {
                        return gettext("Bestsellers in %(title)s")
                    },
                    get multipleEnrollmentBasedTitle() {
                        return gettext("Based on Your Enrollments")
                    },
                    get frequentlyBoughtTitle() {
                        return gettext("Frequently Bought Together with %(title)s")
                    },
                    get labelTitle() {
                        return gettext("Bestsellers in %(title)s")
                    },
                    get labelClusterTitle() {
                        return gettext("Bestsellers in %(title)s")
                    },
                    get recentlyViewedTitle() {
                        return gettext("Recently viewed")
                    },
                    get moreFromInstructor() {
                        return gettext("More from this Instructor")
                    },
                    get singleEnrollmentBasedTitle() {
                        return gettext("Because you enrolled in %(title)s")
                    },
                    get wishlistTitle() {
                        return gettext("Wishlist")
                    }
                },
                exploreAction: {
                    get cartSuccess() {
                        return gettext("Go to Cart")
                    },
                    get purchaseSuccess() {
                        return gettext("Discover More Courses")
                    },
                    get singlePurchase() {
                        return gettext("Go to course")
                    }
                }
            };
            const o = {
                errors: {
                    get default() {
                        return gettext("An unknown error occurred.")
                    },
                    discount: {
                        invalid: {
                            get singular() {
                                return gettext("<b>%(code)s</b> is invalid, and has been removed.")
                            },
                            get plural() {
                                return gettext("<b>%(code)s</b> are invalid, and have been removed.")
                            }
                        },
                        expired: {
                            get singular() {
                                return gettext("<b>%(code)s</b> is expired, and has been removed.")
                            },
                            get plural() {
                                return gettext("<b>%(code)s</b> are expired, and have been removed.")
                            }
                        },
                        sold_out: {
                            get singular() {
                                return gettext("<b>%(code)s</b> is sold out, and has been removed.")
                            },
                            get plural() {
                                return gettext("<b>%(code)s</b> are sold out, and have been removed.")
                            }
                        }
                    },
                    get discountCodeInputFormat() {
                        return gettext("The coupon code entered is not valid for this course. Perhaps you used the wrong coupon code?")
                    },
                    get discountDuplicated() {
                        return gettext("The coupon code entered has already been used.")
                    }
                },
                patterns: {
                    validDiscountCode: /^([a-zA-Z0-9._-]){4,255}$/
                },
                shoppingListNamespaces: ["cartPage", "checkout", "dropdown"],
                shoppingListTypes: ["cart", "express", "saved_for_later", "wishlist"],
                storage: {
                    status: {
                        notReady: "notReady",
                        ready: "ready",
                        unAvailable: "unAvailable"
                    }
                },
                strings: r,
                timing: {
                    notificationHide: 1e4
                },
                urls: {
                    cartAPI: "/shopping-carts/me/",
                    cartSuccess: "/cart/",
                    expressCheckoutAPI: "/shopping-carts/me/express/",
                    paymentSuccessErrorRedirect: "/home/my-courses/",
                    paymentSuccessPage(e) {
                        return `/cart/success/${e}/`
                    },
                    purchaseSuccess: "/"
                },
                urlParams: {
                    buyableObjectType: "boType",
                    buyableObjectId: "boId"
                },
                goToUrl: e => {
                    window.location.href = e
                }
            };
            t["a"] = o
        },
        "./src/udemy/js/shopping-client/messages.mobx-store.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/mobx/lib/mobx.module.js");
            const o = new r["b"];

            function n(e) {
                var t;
                if (!e) {
                    throw new Error("Please specify a type for the messaging store.")
                }
                let s = false;
                const n = r["s"].box(null);

                function i() {
                    Object(r["w"])((() => {
                        let t = [];
                        if (o.has(e)) {
                            t = o.get(e)
                        }
                        t.pop();
                        o.set(e, t);
                        s = false
                    }))
                }
                let a = (t = class t {
                    get messages() {
                        if (!o.get(e)) {
                            return []
                        }
                        return o.get(e)
                    }
                    get onMessageInternal() {
                        const t = o.get(e);
                        if (!t) {
                            return null
                        }
                        s = true;
                        return t[t.length - 1]
                    }
                    get onMessage() {
                        return n.get()
                    }
                    sendMessage(t) {
                        let s = [];
                        if (o.has(e)) {
                            s = o.get(e)
                        }
                        s.push(t);
                        o.set(e, s)
                    }
                    clear() {
                        n.set(null);
                        o.delete(e)
                    }
                }, babelHelpers.applyDecoratedDescriptor(t.prototype, "messages", [r["g"]], Object.getOwnPropertyDescriptor(t.prototype, "messages"), t.prototype), babelHelpers.applyDecoratedDescriptor(t.prototype, "onMessageInternal", [r["g"]], Object.getOwnPropertyDescriptor(t.prototype, "onMessageInternal"), t.prototype), babelHelpers.applyDecoratedDescriptor(t.prototype, "onMessage", [r["g"]], Object.getOwnPropertyDescriptor(t.prototype, "onMessage"), t.prototype), babelHelpers.applyDecoratedDescriptor(t.prototype, "sendMessage", [r["e"]], Object.getOwnPropertyDescriptor(t.prototype, "sendMessage"), t.prototype), babelHelpers.applyDecoratedDescriptor(t.prototype, "clear", [r["e"]], Object.getOwnPropertyDescriptor(t.prototype, "clear"), t.prototype), t);
                const c = new a;
                Object(r["t"])(c, "onMessageInternal", (e => {
                    if (s && e.newValue) {
                        Object(r["w"])((() => {
                            n.set(e.newValue)
                        }));
                        return
                    }
                    i()
                }));
                return c
            }
            t["a"] = n
        },
        "./src/udemy/js/shopping-client/shopping-client.mobx-store.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/smart-bar/dist/esm/index.js");
            var o = s("./node_modules/mobx/lib/mobx.module.js");
            var n = s("./src/udemy/js/shopping-client/messages.mobx-store.js");
            var i = s("./src/udemy/js/utils/ud-expiring-local-storage.js");
            var a = s("./src/udemy/js/utils/ud-link.js");
            var c = s("./src/udemy/js/utils/ud-me.js");
            var u = s("./src/udemy/js/webview/types.ts");
            var l = s("./src/udemy/js/webview/webview-utils.ts");
            var d = s("./src/udemy/js/utils/user-agent/get-is-mobile-app.js");
            var p = s("./src/udemy/js/shopping-client/config.js");
            var h;
            let m = (h = class e {
                constructor(e) {
                    this.state = Object(o["s"])({
                        attempts: e || []
                    })
                }
                get attempts() {
                    return this.state.attempts
                }
                get latest() {
                    return this.state.attempts[0]
                }
                get codes() {
                    return this.state.attempts.map((e => e.code))
                }
                get invalidCodes() {
                    return this.getCodesByStatus("invalid")
                }
                get expiredCodes() {
                    return this.getCodesByStatus("expired")
                }
                get soldOutCodes() {
                    return this.getCodesByStatus("sold_out")
                }
                clear() {
                    this.state.attempts.clear()
                }
                getCodesByStatus(e) {
                    return this.state.attempts.filter((t => t.status == e)).map((e => e.code))
                }
            }, babelHelpers.applyDecoratedDescriptor(h.prototype, "attempts", [o["g"]], Object.getOwnPropertyDescriptor(h.prototype, "attempts"), h.prototype), babelHelpers.applyDecoratedDescriptor(h.prototype, "latest", [o["g"]], Object.getOwnPropertyDescriptor(h.prototype, "latest"), h.prototype), babelHelpers.applyDecoratedDescriptor(h.prototype, "codes", [o["g"]], Object.getOwnPropertyDescriptor(h.prototype, "codes"), h.prototype), babelHelpers.applyDecoratedDescriptor(h.prototype, "invalidCodes", [o["g"]], Object.getOwnPropertyDescriptor(h.prototype, "invalidCodes"), h.prototype), babelHelpers.applyDecoratedDescriptor(h.prototype, "expiredCodes", [o["g"]], Object.getOwnPropertyDescriptor(h.prototype, "expiredCodes"), h.prototype), babelHelpers.applyDecoratedDescriptor(h.prototype, "soldOutCodes", [o["g"]], Object.getOwnPropertyDescriptor(h.prototype, "soldOutCodes"), h.prototype), babelHelpers.applyDecoratedDescriptor(h.prototype, "clear", [o["e"]], Object.getOwnPropertyDescriptor(h.prototype, "clear"), h.prototype), h);

            function f(e) {
                return new m(e)
            }

            function b(e, t, s) {
                const r = Object(o["s"])({
                    name: e,
                    addAttempts: [],
                    removeAttempts: [],
                    items: t || [],
                    unseenCount: o["s"].box(s || 0)
                });

                function n(e, t) {
                    return Object(o["e"])((() => {
                        t.remove(t.find((t => t.buyable.id === e.buyable.id)))
                    }))
                }
                const i = Object(o["s"])({
                    name: r.name,
                    get unseenCount() {
                        return r.unseenCount.get()
                    },
                    get items() {
                        const e = e => {
                            const t = {};
                            e.forEach((e => {
                                const s = e.buyable.id;
                                t[s] = (t[s] || 0) + 1
                            }));
                            return t
                        };
                        const t = e(r.items);
                        const s = e(r.addAttempts);
                        const o = e(r.removeAttempts);
                        const n = new Set;
                        const i = [];
                        r.addAttempts.concat(r.items).forEach((e => {
                            const r = e.buyable.id;
                            if (!n.has(r)) {
                                n.add(r);
                                const a = (t[r] || 0) + (s[r] || 0) - (o[r] || 0);
                                if (a > 0) {
                                    i.push(e)
                                }
                            }
                        }));
                        return i
                    },
                    setItems: Object(o["e"])((e => {
                        r.items.clear();
                        r.items.replace(e)
                    })),
                    set unseenCount(e) {
                        Object(o["w"])((() => {
                            r.unseenCount.set(e)
                        }))
                    },
                    get isEmpty() {
                        return i.items.length === 0
                    },
                    findItemByBuyable(e, t) {
                        return i.items.find((s => s.buyable && s.buyable.buyable_object_type === e && s.buyable.id === t)) || null
                    },
                    hasBuyable(e, t) {
                        return Boolean(i.findItemByBuyable(e, t))
                    },
                    hasBuyables(e) {
                        return e.length > 0 && e.every((e => i.hasBuyable(e.buyable_object_type, e.id)))
                    },
                    get hasPendingOperations() {
                        return r.addAttempts.length > 0 || r.removeAttempts.length > 0
                    },
                    add: Object(o["e"])((e => {
                        r.addAttempts.unshift(e);
                        return n(e, r.addAttempts)
                    })),
                    remove: Object(o["e"])((e => {
                        r.removeAttempts.push(e);
                        return n(e, r.removeAttempts)
                    })),
                    clear: Object(o["e"])((() => {
                        r.items.clear();
                        r.addAttempts.clear();
                        r.removeAttempts.clear()
                    })),
                    get purchasePriceAmount() {
                        return y(i.items, "purchase_price")
                    },
                    get listPriceAmount() {
                        return y(i.items, "list_price")
                    },
                    get discountAmount() {
                        const e = i.items.filter((e => e.current_discount && e.current_discount.saving_price)).map((e => e.current_discount));
                        if (!e.length) {
                            return 0
                        }
                        return -y(e, "saving_price")
                    },
                    get discountPercentage() {
                        const e = i.listPriceAmount;
                        return e ? Math.round(100 * (1 - i.purchasePriceAmount / e)) : 0
                    }
                });
                return i
            }

            function y(e, t) {
                return e.reduce(((e, s) => e + parseFloat(s[t].amount)), 0)
            }
            var g = b;
            var v = s("./src/udemy/js/browse/tracking.ts");
            var j = s("./src/udemy/js/utils/get-config-data.js");
            var _ = s("./src/udemy/js/utils/ud-api.js");
            var w = s("./src/udemy/js/utils/ud-performance.ts");

            function C() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                const t = Object(o["s"])({
                    commands: [],
                    get currentCommand() {
                        return t.commands.length > 0 ? t.commands[0] : null
                    },
                    retryLimit: e
                });
                const s = {
                    add: Object(o["e"])(((r, o) => {
                        const n = O(r, o, e, s.endCurrent);
                        t.commands.push(n);
                        return n.promise
                    })),
                    endCurrent: Object(o["e"])((() => {
                        t.commands.shift()
                    }))
                };
                Object(o["f"])((() => {
                    if (t.currentCommand) {
                        t.currentCommand.run()
                    }
                }));
                return s
            }

            function O(e, t, s, r) {
                const n = {
                    deferred: E(),
                    command: Object(o["e"])(e),
                    resolver: t,
                    triesLeft: s,
                    onComplete: r
                };
                const i = {
                    promise: n.deferred.promise,
                    actions: {
                        resolve: e => {
                            n.onComplete();
                            n.deferred.resolve(e)
                        },
                        reject: e => {
                            n.onComplete();
                            n.deferred.reject(e)
                        },
                        retry: Object(o["e"])((e => {
                            n.triesLeft--;
                            if (n.triesLeft > 0) {
                                return i.run()
                            }
                            n.onComplete();
                            n.deferred.reject(e)
                        }))
                    },
                    run: Object(o["e"])((() => {
                        e().then(i.actions.resolve, (e => n.resolver(i, e)))
                    }))
                };
                return i
            }

            function E() {
                const e = {};
                e.promise = new Promise(((t, s) => {
                    e.resolve = t;
                    e.reject = s
                }));
                return e
            }

            function S() {
                const e = new Date;
                const t = new Date(e.setDate(e.getDate() + 30));
                const s = Object(i["a"])("shoppingCartStorage", "storage-1.0", t);
                const r = {
                    etag: null,
                    credit: {
                        amount: 0
                    },
                    discounts: [],
                    lists: {
                        cart: [],
                        express: [],
                        saved_for_later: [],
                        wishlist: []
                    },
                    unseenCounts: {
                        cart: 0,
                        express: 0,
                        saved_for_later: 0,
                        wishlist: 0
                    },
                    userId: null,
                    availableCoupons: []
                };
                const n = Object(o["s"])({ ...s.get("state") || r
                });
                const a = C();
                const u = o["s"].box(p["a"].storage.status.notReady);
                const l = {
                    credit: n.credit,
                    discounts: n.discounts,
                    lists: n.lists,
                    status: u,
                    availableCoupons: n.availableCoupons
                };
                l.fetch = () => {
                    if (!Object(j["a"])().features.shopping_cart || !n.userId && !n.etag) {
                        Object(o["w"])((() => {
                            l.status.set(p["a"].storage.status.ready)
                        }));
                        return Promise.resolve(true)
                    }
                    w["a"].start("_cartApi");
                    const e = new URLSearchParams(window.location.search);
                    return f({
                        method: "get",
                        url: p["a"].urls.cartAPI,
                        params: Object.fromEntries(e)
                    }).then(Object(o["e"])((() => {
                        w["a"].end("_cartApi");
                        l.status.set(p["a"].storage.status.ready)
                    }))).catch(Object(o["e"])((() => {
                        l.status.set(p["a"].storage.status.unAvailable)
                    })))
                };
                l.addItems = (e, t, s) => {
                    const r = {
                        method: "post",
                        url: y(e),
                        data: {
                            buyables: t.map((e => e.buyable)),
                            context: s
                        }
                    };

                    function o(e) {
                        return {
                            id: e.id,
                            buyable_object_type: e.buyable_object_type
                        }
                    }

                    function n(t, s) {
                        const r = s[e].map((e => o(e.buyable)));
                        const n = e => {
                            let {
                                id: t,
                                buyable_object_type: s
                            } = e;
                            return !!r.find((e => e.id === t && e.buyable_object_type === s))
                        };
                        t.data.buyables = t.data.buyables.filter((e => !n(o(e))));
                        return t.data.buyables.length === 0
                    }
                    return f(r, n)
                };
                l.removeItem = (e, t) => {
                    const s = t.buyable;
                    const r = {
                        method: "delete",
                        params: {
                            boId: s.id,
                            boType: s.buyable_object_type
                        },
                        url: y(e)
                    };

                    function o(t, s) {
                        const r = (s[e] || []).map((e => e.buyable));
                        const o = t.params[p["a"].urlParams.buyableObjectType];
                        const n = t.params[p["a"].urlParams.buyableObjectId];
                        const i = r.find((e => e.buyable_object_type === o && e.id === n));
                        return !i
                    }
                    return f(r, o)
                };
                l.applyDiscounts = e => {
                    function t(t, s) {
                        const r = s.discount_attempts.map((e => e.code));
                        const o = e.every((e => r.includes(e)));
                        return Boolean(o)
                    }
                    return f({
                        method: "post",
                        data: {
                            codes: e
                        },
                        url: y("discounts")
                    }, t)
                };
                l.removeDiscounts = e => f({
                    method: "delete",
                    params: {
                        codes: e.join(",")
                    },
                    url: y("discounts")
                });
                l.clearDiscounts = () => b({
                    method: "delete",
                    url: y("discounts")
                });
                l.createExpressCheckoutSession = (e, t) => {
                    const s = {
                        method: "post",
                        data: {
                            buyables: e.map((e => e.buyable))
                        },
                        url: p["a"].urls.expressCheckoutAPI
                    };
                    if (t) {
                        s.data.codes = t
                    }
                    return b(s)
                };
                const d = Object(o["e"])((e => {
                    if (e.headers && e.headers.etag !== n.etag) {
                        Object(o["w"])((() => {
                            n.etag = e.headers.etag
                        }))
                    }
                    return e
                }));
                const h = Object(o["e"])((e => {
                    var t;
                    if (!e || !e.data) {
                        return Promise.resolve(false)
                    }
                    n.discounts.clear();
                    n.discounts.replace(e.data.discount_attempts);
                    n.credit.amount = e.data.user.id ? e.data.user.credit.amount : 0;
                    n.availableCoupons = ((t = e.data.available_coupon_info) === null || t === void 0 ? void 0 : t.coupons) || [];
                    p["a"].shoppingListTypes.forEach((t => {
                        n.lists[t].clear();
                        const s = e.data[t];
                        if (s) {
                            Object(v["a"])(s.map((e => e.buyable)))
                        }
                        n.lists[t].replace(e.data[t]);
                        n.unseenCounts[t] = e.data[`${t}_unseen_count`] || 0
                    }));
                    s.set("state", Object(o["z"])(n));
                    return Promise.resolve(true)
                }));

                function m(e) {
                    return Promise.reject({
                        get canBeResolved() {
                            return e.response.status === 412 || e.response.status === 409
                        },
                        httpResponse: e.response,
                        refetchedData: e.response.data
                    })
                }

                function f(e, t) {
                    function s(s, r) {
                        if (!r.canBeResolved) {
                            s.actions.reject(r);
                            return
                        }
                        const o = t(e, r.refetchedData);
                        if (o) {
                            h(r.refetchedData);
                            s.actions.resolve(true)
                        } else {
                            s.actions.retry(r)
                        }
                    }
                    return a.add((() => b(e)), s)
                }

                function b(e) {
                    g(e);
                    return _["f"].request(e).then(d).catch((e => {
                        d(e.response);
                        throw e
                    })).then(h, m)
                }

                function y(e) {
                    return `${p["a"].urls.cartAPI}${e.replace(/_/g,"-")}/`
                }
                Object(o["C"])((() => !c["a"].isLoading), (() => {
                    Object(o["w"])((() => {
                        n.userId = c["a"].id;
                        l.fetch()
                    }))
                }));

                function g(e) {
                    e.headers = e.headers || {};
                    if (e.method.toLowerCase() === "get") {
                        e.headers = { ...e.headers,
                            ...Object(_["i"])()
                        };
                        e.params = { ...e.params,
                            sessionState: n.etag || ""
                        }
                    } else if (n.etag) {
                        e.headers["If-Match"] = n.etag
                    }
                }
                setInterval((() => {
                    l.fetch()
                }), 54e5);
                return l
            }

            function x() {
                var e;
                const t = new Date(Date.now() + 10 * 60 * 1e3);
                let s = Object(i["a"])("notices", "api", t);
                const h = S();
                const m = new l["a"];
                let b = null;
                const y = {
                    credit: h.credit,
                    discounts: f(h.discounts),
                    lists: {
                        cart: g("cart", h.lists.cart),
                        wishlist: g("wishlist", h.lists.wishlist),
                        saved_for_later: g("saved_for_later", h.lists.saved_for_later),
                        express: g("express", h.lists.express),
                        checkout: g("checkout", [])
                    }
                };
                try {
                    const e = JSON.parse(window.sessionStorage.getItem("checkoutItems")) || [];
                    y.lists.checkout = g("checkout", e)
                } catch (e) {
                    y.lists.checkout = g("checkout", [])
                }
                let v = (e = class e {
                    constructor() {
                        this.credit = y.credit;
                        this.discounts = y.discounts;
                        this.lists = y.lists;
                        this.status = h.status;
                        this.couponStore = null;
                        this.availableCoupons = h.availableCoupons
                    }
                    get hasPendingOperations() {
                        return Object.keys(y.lists).some((e => y.lists[e].hasPendingOperations))
                    }
                    addToList(e, t) {
                        let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                        const n = Object.values(t).map((e => ({
                            buyable: {
                                buyable_object_type: e.buyable_object_type,
                                id: e.id
                            }
                        })));
                        return h.addItems(e, n, o).then((() => {
                            if (["cart", "wishlist"].includes(e)) {
                                s = Object(i["a"])("notices", "api");
                                s.delete(r["b"])
                            }
                        }))
                    }
                    cancelCheckout() {
                        Object(n["a"])("notifications").sendMessage("checkoutCancel")
                    }
                    notify(e) {
                        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        const s = {
                            message: e && e.message ? e.message : e
                        };
                        if (t) {
                            s.options = t
                        }
                        Object(n["a"])("notifications").sendMessage(s)
                    }
                    removeFromList(e, t) {
                        const o = () => {
                            y.lists[e].remove(t);
                            if (this.couponStore) {
                                this.couponStore.updateDiscountState()
                            }
                            if (["cart", "wishlist"].includes(e) && y.lists[e].isEmpty) {
                                s.set(r["b"], true)
                            }
                        };
                        return h.removeItem(e, t).then((() => {
                            o();
                            return Promise.resolve(true)
                        })).catch((() => {
                            y.lists[e].add(t)();
                            o();
                            return Promise.reject(false)
                        }))
                    }
                    moveToList(e, t, s) {
                        const r = () => {
                            y.lists[t].add(s);
                            y.lists[e].remove(s);
                            if (this.couponStore) {
                                this.couponStore.updateDiscountState()
                            }
                        };
                        return h.addItems(t, [s]).then((() => {
                            r();
                            return Promise.resolve(true)
                        })).catch((() => {
                            r();
                            return Promise.reject(false)
                        }))
                    }
                    fetch() {
                        return h.fetch()
                    }
                    applyDiscounts(e) {
                        if (!e || !e.length) {
                            return Promise.resolve(true)
                        }
                        const t = e.map((e => e.toUpperCase()));
                        return h.applyDiscounts(t)
                    }
                    removeDiscounts(e) {
                        if (!e || !e.length) {
                            return Promise.resolve(true)
                        }
                        return h.removeDiscounts(e)
                    }
                    validateDiscounts() {
                        if (b) {
                            return b
                        }
                        const e = {};
                        const t = (t, s) => {
                            if (s.length > 0) {
                                e[t] = s
                            }
                        };
                        t("invalid", y.discounts.invalidCodes);
                        t("expired", y.discounts.expiredCodes);
                        t("sold_out", y.discounts.soldOutCodes);
                        Object.entries(e).forEach((e => {
                            let [t, s] = e;
                            const r = p["a"].errors.discount[t][s.length > 1 ? "plural" : "singular"];
                            const o = interpolate(r, {
                                code: s.join(", ")
                            }, true);
                            this.notify(o, {
                                reason: t
                            })
                        }));
                        b = this.removeDiscounts([].concat(...Object.values(e)));
                        return b.then((e => {
                            b = null;
                            return e
                        }))
                    }
                    get isCheckoutAvailable() {
                        return Boolean(y.lists.checkout && !y.lists.checkout.isEmpty && c["a"].id)
                    }
                    freezeCheckoutList(e) {
                        y.lists.checkout.setItems([...y.lists[e].items]);
                        window.sessionStorage.setItem("checkoutItems", JSON.stringify(y.lists.checkout.items))
                    }
                    completeCheckout(e) {
                        const t = y.lists.checkout.items.map((e => e.buyable));
                        _();
                        return h.clearDiscounts().then((() => {
                            w(e, t)
                        }))
                    }
                    setExpressCheckoutListFromItem(e) {
                        _();
                        const t = [{
                            buyable: {
                                id: e.buyableObjectId,
                                buyable_object_type: e.buyableObjectType
                            }
                        }];
                        const s = e.codes;
                        return h.createExpressCheckoutSession(t, s).then((() => {
                            this.freezeCheckoutList("express");
                            return Promise.resolve(true)
                        }))
                    }
                    getCheckoutData() {
                        return new Promise((e => e({
                            isPaymentRequired: this.isCheckoutAvailable && y.lists.checkout.purchasePriceAmount - y.credit.amount > 0,
                            items: C(y.lists.checkout)
                        })))
                    }
                    getTotalDue() {
                        return Math.max(this.lists.checkout.purchasePriceAmount - this.credit.amount, 0)
                    }
                }, babelHelpers.applyDecoratedDescriptor(e.prototype, "hasPendingOperations", [o["g"]], Object.getOwnPropertyDescriptor(e.prototype, "hasPendingOperations"), e.prototype), babelHelpers.applyDecoratedDescriptor(e.prototype, "isCheckoutAvailable", [o["g"]], Object.getOwnPropertyDescriptor(e.prototype, "isCheckoutAvailable"), e.prototype), babelHelpers.applyDecoratedDescriptor(e.prototype, "getTotalDue", [o["e"]], Object.getOwnPropertyDescriptor(e.prototype, "getTotalDue"), e.prototype), e);
                const j = new v;

                function _() {
                    y.lists.checkout.clear();
                    window.sessionStorage.removeItem("checkoutItems")
                }

                function w(e, t) {
                    if (Object(d["a"])()) {
                        m.onEnrolledAdditionalData(e.purchasePrice, t);
                        m.sendMessage(new u["b"](t, e.purchasePrice))
                    } else {
                        const t = e.redirect_url ? e.redirect_url : a["a"].to(p["a"].urls.paymentSuccessPage(e.gatewayTransactionId));
                        p["a"].goToUrl(t)
                    }
                }

                function C(e) {
                    const t = {};
                    t.items = e.items.map((e => {
                        let t = null;
                        let s = e.buyable;
                        if (e.current_discount && e.current_discount.code) {
                            t = {
                                code: e.current_discount.code
                            }
                        }
                        const r = {
                            discountInfo: t,
                            purchasePrice: e.purchase_price
                        };
                        if (s.buyable_object_type === "license") {
                            r.licenseId = s.id;
                            s = s.course
                        } else if (s.buyable_object_type === "gift") {
                            r.giftId = s.id;
                            s = s.course
                        }
                        r.buyableType = s.buyable_object_type;
                        r.buyableId = s.id;
                        return r
                    }));
                    return t
                }
                return j
            }
            var P = t["a"] = x()
        },
        "./src/udemy/js/utils/serialize-form.js": function(e, t, s) {
            "use strict";
            var r = s("./node_modules/@udemy/shared-utils/dist/esm/forms/serialize-form.js");
            t["a"] = r["a"]
        },
        "./src/udemy/js/utils/user-agent/get-is-mobile-app.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return a
            }));
            var r = s("./src/udemy/js/utils/query-params.js");
            var o = s("./src/udemy/js/utils/server-or-client.ts");
            let n = null;

            function i() {
                n = null
            }

            function a() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    cache: true
                };
                let t = n;
                if (!t || !e.cache) {
                    t = Object(r["d"])(o["a"].global.location).display_type;
                    if (e.cache) {
                        n = t
                    }
                }
                return t === "mobile_app"
            }
        },
        "./src/udemy/js/utils/user-agent/get-os-name.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            }));
            var r = s("./src/udemy/js/utils/server-or-client.ts");

            function o() {
                const e = r["a"].global.navigator.userAgent,
                    t = r["a"].global.navigator.platform,
                    s = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
                    o = ["Win32", "Win64", "Windows", "WinCE"],
                    n = ["iPhone", "iPad", "iPod", "iPhone Simulator", "iPad Simulator", "iPod Simulator"];
                let i = "other";
                if (s.indexOf(t) !== -1) {
                    i = "mac os"
                } else if (n.indexOf(t) !== -1) {
                    i = "ios"
                } else if (o.indexOf(t) !== -1) {
                    i = "windows"
                } else if (/Android/.test(e)) {
                    i = "android"
                } else if (/Linux/.test(t)) {
                    i = "linux"
                }
                return i
            }
        },
        "./src/udemy/js/utils/user-agent/is-android-native.js": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return n
            }));
            var r = s("./src/udemy/js/utils/user-agent/get-is-mobile-app.js");
            var o = s("./src/udemy/js/utils/user-agent/get-os-name.js");

            function n() {
                return Object(r["a"])() && Object(o["a"])() === "android"
            }
        },
        "./src/udemy/js/webview/is-ios-native.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return n
            }));
            var r = s("./src/udemy/js/utils/user-agent/get-is-mobile-app.js");
            var o = s("./src/udemy/js/utils/user-agent/get-os-name.js");

            function n() {
                return Object(r["a"])() && Object(o["a"])() === "ios"
            }
        },
        "./src/udemy/js/webview/types.ts": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return c
            }));
            s.d(t, "d", (function() {
                return u
            }));
            s.d(t, "f", (function() {
                return l
            }));
            s.d(t, "c", (function() {
                return d
            }));
            s.d(t, "e", (function() {
                return p
            }));
            s.d(t, "a", (function() {
                return h
            }));
            var r;
            (function(e) {
                e["ON_ENROLLED"] = "onEnrolled";
                e["ON_KEEP_SHOPPING"] = "onKeepShopping";
                e["ON_SUBSCRIBED"] = "onSubscribed";
                e["ON_EXIT_SUBSCRIPTION_FLOW"] = "onExitSubscriptionFlow";
                e["ON_SAVE_AND_EXIT_ASSESSMENT"] = "onSaveAndExitAssessment";
                e["ON_ASSESSMENT_COURSE_RECOMMENDATION"] = "onAssessmentCourseRecommendation"
            })(r || (r = {}));
            class o {}
            class n extends o {
                constructor(e, t) {
                    super();
                    this.buyables = e;
                    this.purchasePrice = t
                }
                toJSON() {
                    return {
                        buyables: this.buyables,
                        purchasePrice: this.purchasePrice
                    }
                }
            }
            class i extends o {
                constructor(e, t) {
                    super();
                    this.productType = e;
                    this.hasFreeTrial = t
                }
                toJSON() {
                    return {
                        productType: this.productType,
                        hasFreeTrial: this.hasFreeTrial
                    }
                }
            }
            class a extends o {
                constructor(e) {
                    super();
                    this.courseId = e
                }
                toJSON() {
                    return {
                        courseId: this.courseId
                    }
                }
            }
            class c {
                constructor(e, t) {
                    this.methodName = r.ON_ENROLLED;
                    this.payload = new n(e, t)
                }
            }
            class u {
                constructor() {
                    this.methodName = r.ON_KEEP_SHOPPING;
                    this.payload = {}
                }
            }
            class l {
                constructor(e, t) {
                    this.methodName = r.ON_SUBSCRIBED;
                    this.payload = new i(e, t)
                }
            }
            class d {
                constructor() {
                    this.methodName = r.ON_EXIT_SUBSCRIPTION_FLOW;
                    this.payload = {}
                }
            }
            class p {
                constructor() {
                    this.methodName = r.ON_SAVE_AND_EXIT_ASSESSMENT;
                    this.payload = {}
                }
            }
            class h {
                constructor(e) {
                    this.methodName = r.ON_ASSESSMENT_COURSE_RECOMMENDATION;
                    this.payload = new a(e)
                }
            }
        },
        "./src/udemy/js/webview/webview-utils.ts": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return i
            }));
            var r = s("./src/udemy/js/utils/user-agent/is-android-native.js");
            var o = s("./src/udemy/js/webview/is-ios-native.ts");
            var n = s("./src/udemy/js/webview/types.ts");
            class i {
                constructor(e) {
                    this.argWindow = e;
                    if (typeof e !== "undefined") {
                        this.argWindow = e
                    } else if (typeof window !== "undefined") {
                        this.argWindow = window
                    }
                }
                getAndroidClient() {
                    var e, t;
                    if (Object(r["a"])() && typeof((t = (e = this.argWindow) === null || e === void 0 ? void 0 : e.AndroidClient) === null || t === void 0 ? void 0 : t.postMessage) === "function") {
                        return this.argWindow.AndroidClient.postMessage.bind(this.argWindow.AndroidClient)
                    }
                    return null
                }
                getiOSClient() {
                    var e, t;
                    if (Object(o["a"])() && typeof((t = (e = this.argWindow) === null || e === void 0 ? void 0 : e.webkit) === null || t === void 0 ? void 0 : t.messageHandlers.iOSClient.postMessage) === "function") {
                        return this.argWindow.webkit.messageHandlers.iOSClient.postMessage.bind(this.argWindow.webkit.messageHandlers.iOSClient)
                    }
                    return null
                }
                sendMessage(e) {
                    const t = this.getAndroidClient();
                    if (t) {
                        t(JSON.stringify(e))
                    } else {
                        const t = this.getiOSClient();
                        if (t) {
                            t(JSON.stringify(e))
                        }
                    }
                }
                onEnrolledAdditionalData(e, t) {
                    var s, o, i, a;
                    if (Object(r["a"])() && typeof((o = (s = this.argWindow) === null || s === void 0 ? void 0 : s.AndroidClient) === null || o === void 0 ? void 0 : o.onEnrolledAdditionalData) === "function") {
                        this.argWindow.AndroidClient.onEnrolledAdditionalData(JSON.stringify({
                            enrolledCourses: t,
                            chargedPrice: e
                        }))
                    } else if (typeof((a = (i = this.argWindow) === null || i === void 0 ? void 0 : i.AndroidClient) === null || a === void 0 ? void 0 : a.onEnrolled) === "function") {
                        this.argWindow.AndroidClient.onEnrolled(JSON.stringify(t))
                    } else {
                        this.sendMessage(new n["b"](t, e))
                    }
                }
                onKeepShopping() {
                    var e, t;
                    if (Object(r["a"])() && typeof((t = (e = this.argWindow) === null || e === void 0 ? void 0 : e.AndroidClient) === null || t === void 0 ? void 0 : t.onKeepShopping) === "function") {
                        this.argWindow.AndroidClient.onKeepShopping()
                    } else {
                        this.sendMessage(new n["d"])
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=course-details-quick-view-box.97c3f73c12e50777158d.js.map