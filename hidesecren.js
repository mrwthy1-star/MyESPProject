package pubgm.loader.floating; 
30	 
31	import android.os.Build; 
32	import android.text.TextUtils; 
33	import android.view.WindowManager; 
34	import java.io.BufferedReader; 
35	import java.io.IOException; 
36	import java.io.InputStreamReader; 
37	import java.io.Reader; 
38	import java.lang.reflect.Field; 
39	import java.lang.reflect.Method; 
40	 
41	public class HideRecorder { 
42	    private static final String KEY_VERSION_BLACKSHARK = "ro.blackshark.rom"; 
43	    private static final String KEY_VERSION_EMUI = "ro.build.version.emui"; 
44	    private static final String KEY_VERSION_MIUI = "ro.miui.ui.version.name"; 
45	    private static final String KEY_VERSION_NUBIA = "ro.build.nubia.rom.name"; 
46	    private static final String KEY_VERSION_ONEPLIS = "ro.build.ota.versionname"; 
47	    private static final String KEY_VERSION_OPPO = "ro.build.version.opporom"; 
48	    private static final String KEY_VERSION_ROG = "ro.build.fota.version"; 
49	    private static final String KEY_VERSION_SAMSUNG = "ro.channel.officehubrow"; 
50	    private static final String KEY_VERSION_SMARTISAN = "ro.smartisan.version"; 
51	    private static final String KEY_VERSION_VIVO = "ro.vivo.os.version"; 
52	    public static final String ROM_BLACKSHARK = "JOYUI"; 
53	    public static final String ROM_EMUI = "EMUI"; 
54	    public static final String ROM_FLYME = "FLYME"; 
55	    public static final String ROM_MIUI = "MIUI"; 
56	    public static final String ROM_NUBIAUI = "NUBIAUI"; 
57	    public static final String ROM_ONEPLUS = "HYDROGEN"; 
58	    public static final String ROM_OPPO = "OPPO"; 
59	    public static final String ROM_QIKU = "QIKU"; 
60	    public static final String ROM_ROG = "REPLIBLIC"; 
61	    public static final String ROM_SAMSUNG = "ONEUI"; 
62	    public static final String ROM_SMARTISAN = "SMARTISAN"; 
63	    public static final String ROM_VIVO = "VIVO"; 
64	    private static String sName; 
65	 
66	    private static boolean check(String string2) { 
67	        String string3 = sName; 
68	        if (string3 != null) { 
69	            return string3.equals((Object)string2); 
70	        } 
71	        sName = !TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_MIUI)) ? ROM_MIUI : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_BLACKSHARK)) ? ROM_BLACKSHARK : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_EMUI)) ? ROM_EMUI : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_OPPO)) ? ROM_OPPO : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_VIVO)) ? ROM_VIVO : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_SMARTISAN)) ? ROM_SMARTISAN : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_NUBIA)) ? ROM_NUBIAUI : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_ONEPLIS)) && HideRecorder.getProp(KEY_VERSION_ONEPLIS).toLowerCase().contains((CharSequence)"hydrogen") ? ROM_ONEPLUS : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_ROG)) && HideRecorder.getProp(KEY_VERSION_ROG).toLowerCase().contains((CharSequence)"CN_Phone") ? ROM_ROG : (!TextUtils.isEmpty((CharSequence)HideRecorder.getProp(KEY_VERSION_SAMSUNG)) ? ROM_SAMSUNG : (Build.DISPLAY.toUpperCase().contains((CharSequence)ROM_FLYME) ? ROM_FLYME : Build.MANUFACTURER.toUpperCase())))))))))); 
72	        return sName.equals((Object)string2); 
73	    } 
74	 
75	    /* 
76	     * Enabled aggressive block sorting 
77	     */ 
78	    private static String getFakeRecordWindowTitle() { 
79	        String string2; 
80	        if (sName == null) { 
81	            HideRecorder.check(""); 
82	        } 
83	        if ((string2 = sName) == null) { 
84	            return ""; 
85	        } 
86	        int n2 = -1; 
87	        switch (string2.hashCode()) { 
88	            case 336676448: { 
89	                if (!string2.equals((Object)ROM_ONEPLUS)) break; 
90	                n2 = 4; 
91	                break; 
92	            } 
93	            case 70782280: { 
94	                if (!string2.equals((Object)ROM_BLACKSHARK)) break; 
95	                n2 = 7; 
96	                break; 
97	            } 
98	            case 66998571: { 
99	                if (!string2.equals((Object)ROM_FLYME)) break; 
100	                n2 = 5; 
101	                break; 
102	            } 
103	            case 2634924: { 
104	                if (!string2.equals((Object)ROM_VIVO)) break; 
105	                n2 = 3; 
106	                break; 
107	            } 
108	            case 2432928: { 
109	                if (!string2.equals((Object)ROM_OPPO)) break; 
110	                n2 = 2; 
111	                break; 
112	            } 
113	            case 2366768: { 
114	                if (!string2.equals((Object)ROM_MIUI)) break; 
115	                n2 = 0; 
116	                break; 
117	            } 
118	            case 2132284: { 
119	                if (!string2.equals((Object)ROM_EMUI)) break; 
120	                n2 = 1; 
121	                break; 
122	            } 
123	            case -1292486777: { 
124	                if (!string2.equals((Object)ROM_NUBIAUI)) break; 
125	                n2 = 6; 
126	                break; 
127	            } 
128	            case -1956424546: { 
129	                if (!string2.equals((Object)ROM_ROG)) break; 
130	                n2 = 8; 
131	            } 
132	        } 
133	        switch (n2) { 
134	            default: { 
135	                return ""; 
136	            } 
137	            case 8: { 
138	                return "com.asus.force.layer.transparent.SR.floatingpanel"; 
139	            } 
140	            case 7: { 
141	                return "com.blackshark.screenrecorder"; 
142	            } 
143	            case 6: { 
144	                return "NubiaScreenDecorOverlay"; 
145	            } 
146	            case 5: { 
147	                return "SysScreenRecorder"; 
148	            } 
149	            case 4: { 
150	                return "op_screenrecord"; 
151	            } 
152	            case 3: { 
153	                return "screen_record_menu"; 
154	            } 
155	            case 2: { 
156	                return "com.coloros.screenrecorder.FloatView"; 
157	            } 
158	            case 1: { 
159	                return "ScreenRecoderTimer"; 
160	            } 
161	            case 0:  
162	        } 
163	        return "com.miui.screenrecorder"; 
164	    } 
165	 
166	    /* 
167	     * Enabled aggressive block sorting 
168	     * Enabled unnecessary exception pruning 
169	     * Enabled aggressive exception aggregation 
170	     */ 
171	    private static String getProp(String string2) { 
172	        String string3; 
173	        String string4 = null; 
174	        String string5 = string3 = null; 
175	        String string6 = string4; 
176	        try { 
177	            Runtime runtime = Runtime.getRuntime(); 
178	            string5 = string3; 
179	            string6 = string4; 
180	            string5 = string3; 
181	            string6 = string4; 
182	            StringBuilder stringBuilder = new StringBuilder(); 
183	            string5 = string3; 
184	            string6 = string4; 
185	            runtime = runtime.exec(stringBuilder.append("getprop ").append(string2).toString()); 
186	            string5 = string3; 
187	            string6 = string4; 
188	            string5 = string3; 
189	            string6 = string4; 
190	            string5 = string3; 
191	            string6 = string4; 
192	            stringBuilder = new InputStreamReader(runtime.getInputStream()); 
193	            string5 = string3; 
194	            string6 = string4; 
195	            string5 = string2 = new BufferedReader((Reader)stringBuilder, 1024); 
196	            string6 = string2; 
197	            string4 = string2.readLine(); 
198	            string5 = string2; 
199	            string6 = string2; 
200	            string2.close(); 
201	        } 
202	        catch (Throwable throwable) { 
203	            if (string5 == null) throw throwable; 
204	            try { 
205	                string5.close(); 
206	                throw throwable; 
207	            } 
208	            catch (IOException iOException) { 
209	                iOException.printStackTrace(); 
210	            } 
211	            throw throwable; 
212	        } 
213	        catch (IOException iOException) { 
214	            if (string6 == null) return null; 
215	            try { 
216	                string6.close(); 
217	                return null; 
218	            } 
219	            catch (IOException iOException2) { 
220	                iOException2.printStackTrace(); 
221	            } 
222	            return null; 
223	        } 
224	        try { 
225	            string2.close(); 
226	            return string4; 
227	        } 
228	        catch (IOException iOException) { 
229	            iOException.printStackTrace(); 
230	            return string4; 
231	        } 
232	    } 
233	 
234	    public static boolean isActivice() { 
235	        return false; 
236	    } 
237	 
238	    public static boolean isBLACKSHARK() { 
239	        return HideRecorder.check(ROM_BLACKSHARK); 
240	    } 
241	 
242	    public static boolean isEmui() { 
243	        return HideRecorder.check(ROM_EMUI); 
244	    } 
245	 
246	    public static boolean isFlyme() { 
247	        return HideRecorder.check(ROM_FLYME); 
248	    } 
249	 
250	    public static boolean isMiui() { 
251	        return HideRecorder.check(ROM_MIUI); 
252	    } 
253	 
254	    public static boolean isNubia() { 
255	        return HideRecorder.check(ROM_NUBIAUI); 
256	    } 
257	 
258	    public static boolean isOnePlus() { 
259	        return HideRecorder.check(ROM_ONEPLUS); 
260	    } 
261	 
262	    public static boolean isOppo() { 
263	        return HideRecorder.check(ROM_OPPO); 
264	    } 
265	 
266	    public static boolean isRog() { 
267	        return HideRecorder.check(ROM_ROG); 
268	    } 
269	 
270	    public static boolean isSanSung() { 
271	        return HideRecorder.check(ROM_SAMSUNG); 
272	    } 
273	 
274	    public static boolean isVivo() { 
275	        return HideRecorder.check(ROM_VIVO); 
276	    } 
277	 
278	    public static void setFakeRecorderWindowLayoutParams(WindowManager.LayoutParams layoutParams) { 
279	        try { 
280	            layoutParams.setTitle((CharSequence)HideRecorder.getFakeRecordWindowTitle()); 
281	            if (HideRecorder.check(ROM_FLYME)) { 
282	                if (!HideRecorder.setMeizuParams(layoutParams) && HideRecorder.isActivice()) { 
283	                    HideRecorder.setMeizuParams_new(layoutParams); 
284	                } 
285	            } else if (!HideRecorder.check(ROM_MIUI) && !HideRecorder.check(ROM_BLACKSHARK)) { 
286	                if (HideRecorder.check(ROM_ONEPLUS) && (HideRecorder.isActivice() || Build.VERSION.SDK_INT == 30)) { 
287	                    Field field = layoutParams.getClass().getDeclaredField("PRIVATE_FLAG_IS_ROUNDED_CORNERS_OVERLAY"); 
288	                    field.setAccessible(true); 
289	                    HideRecorder.setOnePulsParams(layoutParams, (Integer)field.get((Object)layoutParams.getClass())); 
290	                } else if (HideRecorder.isSanSung()) { 
291	                    HideRecorder.setSamsungFlags(layoutParams); 
292	                } else if (HideRecorder.check(ROM_ROG)) { 
293	                    layoutParams.memoryType |= 0x10000000; 
294	                } 
295	            } else { 
296	                HideRecorder.setXiaomiParams(layoutParams); 
297	            } 
298	        } 
299	        catch (Exception exception) { 
300	            exception.printStackTrace(); 
301	        } 
302	    } 
303	 
304	    private static boolean setMeizuParams(WindowManager.LayoutParams layoutParams) { 
305	        try { 
306	            Object object = Class.forName((String)"android.view.MeizuLayoutParams"); 
307	            Field field = object.getDeclaredField("flags"); 
308	            field.setAccessible(true); 
309	            object = object.newInstance(); 
310	            field.setInt(object, 8192); 
311	            layoutParams.getClass().getField("meizuParams").set((Object)layoutParams, object); 
312	            return true; 
313	        } 
314	        catch (InstantiationException instantiationException) { 
315	        } 
316	        catch (NoSuchFieldException noSuchFieldException) { 
317	        } 
318	        catch (ClassNotFoundException classNotFoundException) { 
319	        } 
320	        catch (IllegalAccessException illegalAccessException) { 
321	            // empty catch block 
322	        } 
323	        return false; 
324	    } 
325	 
326	    private static void setMeizuParams_new(WindowManager.LayoutParams layoutParams) { 
327	        try { 
328	            Field field = layoutParams.getClass().getDeclaredField("meizuFlags"); 
329	            field.setAccessible(true); 
330	            field.setInt((Object)layoutParams, 1024); 
331	        } 
332	        catch (Exception exception) { 
333	            // empty catch block 
334	        } 
335	    } 
336	 
337	    private static void setOnePulsParams(WindowManager.LayoutParams layoutParams, int n2) { 
338	        try { 
339	            Field field = layoutParams.getClass().getDeclaredField("privateFlags"); 
340	            field.setAccessible(true); 
341	            field.set((Object)layoutParams, (Object)n2); 
342	        } 
343	        catch (Exception exception) { 
344	            exception.printStackTrace(); 
345	        } 
346	    } 
347	 
348	    private static void setSamsungFlags(WindowManager.LayoutParams layoutParams) { 
349	        try { 
350	            Method method = layoutParams.getClass().getMethod("semAddExtensionFlags", new Class[]{Integer.TYPE}); 
351	            Method method2 = layoutParams.getClass().getMethod("semAddPrivateFlags", new Class[]{Integer.TYPE}); 
352	            method.invoke((Object)layoutParams, new Object[]{-2147352576}); 
353	            method2.invoke((Object)layoutParams, new Object[]{layoutParams.flags}); 
354	        } 
355	        catch (Exception exception) { 
356	            exception.printStackTrace(); 
357	        } 
358	    } 
359	 
360	    private static void setXiaomiParams(WindowManager.LayoutParams layoutParams) { 
361	        try { 
362	            layoutParams.flags |= 0x1000; 
363	        } 
364	        catch (Exception exception) { 
365	            exception.printStackTrace(); 
366	        } 