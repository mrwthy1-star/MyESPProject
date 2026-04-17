Decompiled with CFR 0.152. 
3	 *  
4	 * Could not load the following classes: 
5	 *  android.content.Context 
6	 *  android.content.res.Resources 
7	 *  android.graphics.Bitmap 
8	 *  android.graphics.Bitmap$Config 
9	 *  android.graphics.BitmapFactory 
10	 *  android.graphics.Canvas 
11	 *  android.graphics.Color 
12	 *  android.graphics.Matrix 
13	 *  android.graphics.Paint 
14	 *  android.graphics.Paint$Align 
15	 *  android.graphics.Paint$Style 
16	 *  android.graphics.Path 
17	 *  android.graphics.PorterDuff$Mode 
18	 *  android.graphics.Rect 
19	 *  android.graphics.drawable.GradientDrawable 
20	 *  android.graphics.drawable.GradientDrawable$Orientation 
21	 *  android.os.SystemClock 
22	 *  android.util.LruCache 
23	 *  android.view.View 
24	 *  java.lang.CharSequence 
25	 *  java.lang.Character 
26	 *  java.lang.Exception 
27	 *  java.lang.Integer 
28	 *  java.lang.Math 
29	 *  java.lang.Object 
30	 *  java.lang.Runnable 
31	 *  java.lang.String 
32	 *  java.lang.System 
33	 *  java.lang.Thread 
34	 *  pubgm.loader.activity.MainActivity 
35	 */ 
36	package pubgm.loader.floating; 
37	 
38	import android.content.Context; 
39	import android.content.res.Resources; 
40	import android.graphics.Bitmap; 
41	import android.graphics.BitmapFactory; 
42	import android.graphics.Canvas; 
43	import android.graphics.Color; 
44	import android.graphics.Matrix; 
45	import android.graphics.Paint; 
46	import android.graphics.Path; 
47	import android.graphics.PorterDuff; 
48	import android.graphics.Rect; 
49	import android.graphics.drawable.GradientDrawable; 
50	import android.os.SystemClock; 
51	import android.util.LruCache; 
52	import android.view.View; 
53	import pubgm.loader.activity.MainActivity; 
54	import pubgm.loader.floating.Overlay; 
55	 
56	public class ESPView 
57	extends View 
58	implements Runnable { 
59	    private static final int[] OTH_NAME; 
60	    private static LruCache<Integer, Bitmap> bitmapCache; 
61	    private static int itemPosition; 
62	    private static int itemSize; 
63	    public static long sleepTime; 
64	    Bitmap[] OTHER; 
65	    private Paint PaintTextBold; 
66	    Bitmap airdropBitmap; 
67	    Bitmap airplaneBitmap; 
68	    Bitmap atvBitmap; 
69	    Bitmap bikeBitmap; 
70	    Bitmap bitmap; 
71	    Bitmap boatBitmap; 
72	    Bitmap botBitmap; 
73	    Bitmap brdmBitmap; 
74	    Bitmap buggyBitmap; 
75	    Bitmap busBitmap; 
76	    Bitmap coupeBitmap; 
77	    Bitmap daciaBitmap; 
78	    Bitmap gliderBitmap; 
79	    Bitmap jetBitmap; 
80	    Bitmap kudaBitmap; 
81	    String loginmode; 
82	    Bitmap lootBitmap; 
83	    private float mFPS = 0.0f; 
84	    private float mFPSCounter = 0.0f; 
85	    private Paint mFPSText; 
86	    private long mFPSTime = 0L; 
87	    private Paint mFillPaint; 
88	    private Paint mFilledPaint; 
89	    private Paint mItemsPaint; 
90	    private Paint mLootBoxPaint; 
91	    private Paint mMDText; 
92	    private Paint mNamePaint; 
93	    private Paint mPaintBitmap; 
94	    private Paint mPaintBitmap1; 
95	    private float mScaleX = 1.0f; 
96	    private float mScaleY = 1.0f; 
97	    private Paint mStrokePaint; 
98	    private Paint mTextPaint; 
99	    private Paint mTextPainti; 
100	    private Paint mTexturePaint; 
101	    private Thread mThread; 
102	    private Paint mVehiclesPaint; 
103	    Bitmap miradoBitmap; 
104	    Bitmap monsterBitmap; 
105	    Bitmap out; 
106	    Paint p; 
107	    Paint p2; 
108	    Path path; 
109	    Bitmap ronyBitmap; 
110	    Bitmap scooterBitmap; 
111	    String selectmode = MainActivity.modeselect; 
112	    Bitmap snowbikeBitmap; 
113	    Bitmap snowmobileBitmap; 
114	    Bitmap tempoBitmap; 
115	    Bitmap trikeBitmap; 
116	    Bitmap truckBitmap; 
117	    Bitmap uazBitmap; 
118	    Bitmap utvBitmap; 
119	    Bitmap vehicleBitmap; 
120	 
121	    static { 
122	        bitmapCache = new LruCache(0xA00000); 
123	        OTH_NAME = new int[]{2131231079, 2131231078, 2131231086, 2131231085, 2131231148, 2131231070, 2131231057}; 
124	    } 
125	 
126	    public ESPView(Context context) { 
127	        super(context, null, 0); 
128	        this.loginmode = MainActivity.typelogin; 
129	        this.path = new Path(); 
130	        this.OTHER = new Bitmap[7]; 
131	        this.InitializePaints(); 
132	        this.setFocusableInTouchMode(false); 
133	        this.setBackgroundColor(0); 
134	        context = new Thread((Runnable)this); 
135	        this.mThread = context; 
136	        context.start(); 
137	    } 
138	 
139	    public static void ChangeFps(int n2) { 
140	        sleepTime = 1000 / n2; 
141	    } 
142	 
143	    private String Nation(String string2) { 
144	        string2 = string2.equals((Object)"G1") ? "\ud83c\udf0d\ufe0f" : new String(Character.toChars((int)(Character.codePointAt((CharSequence)string2, (int)0) - 65 + 127462))) + new String(Character.toChars((int)(Character.codePointAt((CharSequence)string2, (int)1) - 65 + 127462))); 
145	        return string2; 
146	    } 
147	 
148	    private String VehicleName(String string2) { 
149	        if (string2.contains((CharSequence)"Buggy") && Overlay.getConfig("Buggy")) { 
150	            return "Buggy"; 
151	        } 
152	        if (string2.contains((CharSequence)"UAZ") && Overlay.getConfig("UAZ")) { 
153	            return "UAZ"; 
154	        } 
155	        if (string2.contains((CharSequence)"MotorcycleC") && Overlay.getConfig("Trike")) { 
156	            return "Trike"; 
157	        } 
158	        if (string2.contains((CharSequence)"Motorcycle") && Overlay.getConfig("Bike")) { 
159	            return "Bike"; 
160	        } 
161	        if (string2.contains((CharSequence)"DAcia") && Overlay.getConfig("Dacia")) { 
162	            return "Dacia"; 
163	        } 
164	        if (string2.contains((CharSequence)"Dacia") && Overlay.getConfig("Dacia")) { 
165	            return "Dacia"; 
166	        } 
167	        if (string2.contains((CharSequence)"AquaRail") && Overlay.getConfig("Jet")) { 
168	            return "Jet"; 
169	        } 
170	        if (string2.contains((CharSequence)"PG117") && Overlay.getConfig("Boat")) { 
171	            return "Boat"; 
172	        } 
173	        if (string2.contains((CharSequence)"MiniBus") && Overlay.getConfig("Bus")) { 
174	            return "Bus"; 
175	        } 
176	        if (string2.contains((CharSequence)"Mirado") && Overlay.getConfig("Mirado")) { 
177	            return "Mirado"; 
178	        } 
179	        if (string2.contains((CharSequence)"Scooter") && Overlay.getConfig("Scooter")) { 
180	            return "Scooter"; 
181	        } 
182	        if (string2.contains((CharSequence)"Rony") && Overlay.getConfig("Rony")) { 
183	            return "Rony"; 
184	        } 
185	        if (string2.contains((CharSequence)"Snowbike") && Overlay.getConfig("Snowbike")) { 
186	            return "Snowbike"; 
187	        } 
188	        if (string2.contains((CharSequence)"Snowmobile") && Overlay.getConfig("Snowmobile")) { 
189	            return "Snowmobile"; 
190	        } 
191	        if (string2.contains((CharSequence)"Tuk") && Overlay.getConfig("Tempo")) { 
192	            return "Tempo"; 
193	        } 
194	        if (string2.contains((CharSequence)"PickUp") && Overlay.getConfig("Truck")) { 
195	            return "Truck"; 
196	        } 
197	        if (string2.contains((CharSequence)"BRDM") && Overlay.getConfig("BRDM")) { 
198	            return "BRDM"; 
199	        } 
200	        if (string2.contains((CharSequence)"LadaNiva") && Overlay.getConfig("LadaNiva")) { 
201	            return "LadaNiva"; 
202	        } 
203	        if (string2.contains((CharSequence)"Bigfoot") && Overlay.getConfig("Monster")) { 
204	            return "Monster"; 
205	        } 
206	        if (string2.contains((CharSequence)"CoupeRB") && Overlay.getConfig("CoupeRB")) { 
207	            return "CoupeRB"; 
208	        } 
209	        if (string2.contains((CharSequence)"glider") && Overlay.getConfig("Motor Glider")) { 
210	            return "Motor Glider"; 
211	        } 
212	        if (string2.contains((CharSequence)"UTV") && Overlay.getConfig("UTV")) { 
213	            return "UTV"; 
214	        } 
215	        if (string2.contains((CharSequence)"ATV1") && Overlay.getConfig("ATV1")) { 
216	            return "ATV1"; 
217	        } 
218	        if (string2.contains((CharSequence)"Reindeer") && Overlay.getConfig("Reindeer")) { 
219	            return "Reindeer"; 
220	        } 
221	        return ""; 
222	    } 
223	 
224	    private String getItemName(String string2) { 
225	        if (string2.contains((CharSequence)"MZJ_8X") && Overlay.getConfig("8x")) { 
226	            this.mTextPainti.setARGB(255, 247, 99, 245); 
227	            return "8x"; 
228	        } 
229	        if (string2.contains((CharSequence)"MZJ_2X") && Overlay.getConfig("2x")) { 
230	            this.mTextPainti.setARGB(255, 230, 172, 226); 
231	            return "2x"; 
232	        } 
233	        if (string2.contains((CharSequence)"MZJ_HD") && Overlay.getConfig("Red Dot")) { 
234	            this.mTextPainti.setARGB(255, 230, 172, 226); 
235	            return "Red Dot"; 
236	        } 
237	        if (string2.contains((CharSequence)"MZJ_3X") && Overlay.getConfig("3x")) { 
238	            this.mTextPainti.setARGB(255, 247, 99, 245); 
239	            return "3X"; 
240	        } 
241	        if (string2.contains((CharSequence)"MZJ_QX") && Overlay.getConfig("Hollow")) { 
242	            this.mTextPainti.setARGB(255, 153, 75, 152); 
243	            return "Hollow Sight"; 
244	        } 
245	        if (string2.contains((CharSequence)"MZJ_6X") && Overlay.getConfig("6x")) { 
246	            this.mTextPainti.setARGB(255, 247, 99, 245); 
247	            return "6x"; 
248	        } 
249	        if (string2.contains((CharSequence)"MZJ_4X") && Overlay.getConfig("4x")) { 
250	            this.mTextPainti.setARGB(255, 247, 99, 245); 
251	            return "4x"; 
252	        } 
253	        if (string2.contains((CharSequence)"MZJ_SideRMR") && Overlay.getConfig("Canted")) { 
254	            this.mTextPainti.setARGB(255, 153, 75, 152); 
255	            return "Canted Sight"; 
256	        } 
257	        if (string2.contains((CharSequence)"Rifle_AUG") && Overlay.getConfig("AUG")) { 
258	            this.mTextPainti.setARGB(255, 52, 224, 63); 
259	            return "AUG"; 
260	        } 
261	        if (string2.contains((CharSequence)"Rifle_M762") && Overlay.getConfig("M762")) { 
262	            this.mTextPainti.setARGB(255, 43, 26, 28); 
263	            return "M762"; 
264	        } 
265	        if (string2.contains((CharSequence)"Rifle_SCAR") && Overlay.getConfig("SCAR-L")) { 
266	            this.mTextPainti.setARGB(255, 52, 224, 63); 
267	            return "SCAR-L"; 
268	        } 
269	        if (string2.contains((CharSequence)"Rifle_FAMAS") && Overlay.getConfig("FAMAS")) { 
270	            this.mTextPainti.setARGB(255, 0, 255, 0); 
271	            return "FAMAS"; 
272	        } 
273	        if (string2.contains((CharSequence)"Rifle_M416") && Overlay.getConfig("M416")) { 
274	            this.mTextPainti.setARGB(255, 115, 235, 223); 
275	            return "M416"; 
276	        } 
277	        if (string2.contains((CharSequence)"Rifle_M16A4") && Overlay.getConfig("M16A4")) { 
278	            this.mTextPainti.setARGB(255, 116, 227, 123); 
279	            return "M16A-4"; 
280	        } 
281	        if (string2.contains((CharSequence)"Rifle_G36") && Overlay.getConfig("G36C")) { 
282	            this.mTextPainti.setARGB(255, 116, 227, 123); 
283	            return "G36C"; 
284	        } 
285	        if (string2.contains((CharSequence)"Rifle_QBZ") && Overlay.getConfig("QBZ")) { 
286	            this.mTextPainti.setARGB(255, 52, 224, 63); 
287	            return "QBZ"; 
288	        } 
289	        if (string2.contains((CharSequence)"Rifle_AKM") && Overlay.getConfig("AKM")) { 
290	            this.mTextPainti.setARGB(255, 214, 99, 99); 
291	            return "AKM"; 
292	        } 
293	        if (string2.contains((CharSequence)"Rifle_HoneyBadger") && Overlay.getConfig("Honey Badger")) { 
294	            this.mTextPainti.setARGB(255, 214, 99, 99); 
295	            return "Honey Badger"; 
296	        } 
297	        if (string2.contains((CharSequence)"Rifle_Groza") && Overlay.getConfig("Groza")) { 
298	            this.mTextPainti.setARGB(255, 214, 99, 99); 
299	            return "Groza"; 
300	        } 
301	        if (string2.contains((CharSequence)"Rifle_ACE32") && Overlay.getConfig("ACE32")) { 
302	            this.mTextPainti.setARGB(255, 214, 99, 99); 
303	            return "ACE32"; 
304	        } 
305	        if (string2.contains((CharSequence)"SubmachineGun_UMP45") && Overlay.getConfig("UMP")) { 
306	            this.mTextPainti.setARGB(255, 207, 207, 207); 
307	            return "UMP"; 
308	        } 
309	        if (string2.contains((CharSequence)"MachineGun_PP19") && Overlay.getConfig("Bizon")) { 
310	            this.mTextPainti.setARGB(255, 255, 246, 0); 
311	            return "Bizon"; 
312	        } 
313	        if (string2.contains((CharSequence)"MachineGun_TommyGun") && Overlay.getConfig("TommyGun")) { 
314	            this.mTextPainti.setARGB(255, 207, 207, 207); 
315	            return "TommyGun"; 
316	        } 
317	        if (string2.contains((CharSequence)"MachineGun_MP5K") && Overlay.getConfig("MP5K")) { 
318	            this.mTextPainti.setARGB(255, 207, 207, 207); 
319	            return "MP5K"; 
320	        } 
321	        if (string2.contains((CharSequence)"MachineGun_UMP9") && Overlay.getConfig("UMP")) { 
322	            this.mTextPainti.setARGB(255, 207, 207, 207); 
323	            return "UMP"; 
324	        } 
325	        if (string2.contains((CharSequence)"MachineGun_Vector") && Overlay.getConfig("Vector")) { 
326	            this.mTextPainti.setARGB(255, 255, 246, 0); 
327	            return "Vector"; 
328	        } 
329	        if (string2.contains((CharSequence)"MachineGun_Uzi") && Overlay.getConfig("UZI")) { 
330	            this.mTextPainti.setARGB(255, 255, 246, 0); 
331	            return "UZI"; 
332	        } 
333	        if (string2.contains((CharSequence)"MachineGun_P90") && Overlay.getConfig("P90")) { 
334	            this.mTextPainti.setARGB(255, 233, 0, 207); 
335	            return "P90"; 
336	        } 
337	        if (string2.contains((CharSequence)"Other_DP28") && Overlay.getConfig("DP28")) { 
338	            this.mTextPainti.setARGB(255, 43, 26, 28); 
339	            return "DP28"; 
340	        } 
341	        if (string2.contains((CharSequence)"Other_M249") && Overlay.getConfig("M249")) { 
342	            this.mTextPainti.setARGB(255, 247, 99, 245); 
343	            return "M249"; 
344	        } 
345	        if (string2.contains((CharSequence)"Other_MG3") && Overlay.getConfig("MG3")) { 
346	            this.mTextPainti.setARGB(255, 0, 255, 0); 
347	            return "MG3"; 
348	        } 
349	        if (string2.contains((CharSequence)"Sniper_AWM") && Overlay.getConfig("AWM")) { 
350	            this.mTextPainti.setColor(-16777216); 
351	            return "AWM"; 
352	        } 
353	        if (string2.contains((CharSequence)"Sniper_AMR") && Overlay.getConfig("AMR")) { 
354	            this.mTextPainti.setARGB(255, 247, 99, 245); 
355	            return "AMR"; 
356	        } 
357	        if (string2.contains((CharSequence)"Sniper_QBU") && Overlay.getConfig("QBU")) { 
358	            this.mTextPainti.setARGB(255, 207, 207, 207); 
359	            return "QBU"; 
360	        } 
361	        if (string2.contains((CharSequence)"Sniper_SLR") && Overlay.getConfig("SLR")) { 
362	            this.mTextPainti.setARGB(255, 214, 99, 99); 
363	            return "SLR"; 
364	        } 
365	        if (string2.contains((CharSequence)"Sniper_SKS") && Overlay.getConfig("SKS")) { 
366	            this.mTextPainti.setARGB(255, 214, 99, 99); 
367	            return "SKS"; 
368	        } 
369	        if (string2.contains((CharSequence)"Sniper_Mini14") && Overlay.getConfig("Mini14")) { 
370	            this.mTextPainti.setARGB(255, 247, 99, 245); 
371	            return "Mini14"; 
372	        } 
373	        if (string2.contains((CharSequence)"Sniper_M24") && Overlay.getConfig("M24")) { 
374	            this.mTextPainti.setARGB(255, 214, 99, 99); 
375	            return "M24"; 
376	        } 
377	        if (string2.contains((CharSequence)"Sniper_Kar98k") && Overlay.getConfig("Kar98k")) { 
378	            this.mTextPainti.setARGB(255, 214, 99, 99); 
379	            return "Kar98k"; 
380	        } 
381	        if (string2.contains((CharSequence)"Sniper_VSS") && Overlay.getConfig("VSS")) { 
382	            this.mTextPainti.setARGB(255, 255, 246, 0); 
383	            return "VSS"; 
384	        } 
385	        if (string2.contains((CharSequence)"Sniper_Win94") && Overlay.getConfig("Win94")) { 
386	            this.mTextPainti.setARGB(255, 207, 207, 207); 
387	            return "Win94"; 
388	        } 
389	        if (string2.contains((CharSequence)"Sniper_Mk14") && Overlay.getConfig("MK14")) { 
390	            this.mTextPainti.setARGB(255, 214, 99, 99); 
391	            return "MK14"; 
392	        } 
393	        if (string2.contains((CharSequence)"Sniper_Mosin") && Overlay.getConfig("Mosin")) { 
394	            this.mTextPainti.setARGB(255, 153, 0, 0); 
395	            return "Mosin"; 
396	        } 
397	        if (string2.contains((CharSequence)"Sniper_MK12") && Overlay.getConfig("MK12")) { 
398	            this.mTextPainti.setARGB(255, 214, 99, 99); 
399	            return "MK12"; 
400	        } 
401	        if (string2.contains((CharSequence)"Sniper_Mk47") && Overlay.getConfig("MK47")) { 
402	            this.mTextPainti.setARGB(255, 247, 99, 245); 
403	            return "Mk47 Mutant"; 
404	        } 
405	        if (string2.contains((CharSequence)"ShotGun_S12K") && Overlay.getConfig("S12K")) { 
406	            this.mTextPainti.setARGB(255, 153, 109, 109); 
407	            return "S12K"; 
408	        } 
409	        if (string2.contains((CharSequence)"ShotGun_DP12") && Overlay.getConfig("DBS")) { 
410	            this.mTextPainti.setARGB(255, 153, 109, 109); 
411	            return "DBS"; 
412	        } 
413	        if (string2.contains((CharSequence)"ShotGun_M1014") && Overlay.getConfig("M1014")) { 
414	            this.mTextPainti.setARGB(255, 153, 109, 109); 
415	            return "M1014"; 
416	        } 
417	        if (string2.contains((CharSequence)"ShotGun_Neostead2000") && Overlay.getConfig("NS2000")) { 
418	            this.mTextPainti.setARGB(255, 153, 109, 109); 
419	            return "NS2000"; 
420	        } 
421	        if (string2.contains((CharSequence)"ShotGun_S686") && Overlay.getConfig("S686")) { 
422	            this.mTextPainti.setARGB(255, 153, 109, 109); 
423	            return "S686"; 
424	        } 
425	        if (string2.contains((CharSequence)"ShotGun_S1897") && Overlay.getConfig("S1897")) { 
426	            this.mTextPainti.setARGB(255, 153, 109, 109); 
427	            return "S1897"; 
428	        } 
429	        if (string2.contains((CharSequence)"Sickle") && Overlay.getConfig("Sickle")) { 
430	            this.mTextPainti.setARGB(255, 102, 74, 74); 
431	            return "Sickle"; 
432	        } 
433	        if (string2.contains((CharSequence)"Machete") && Overlay.getConfig("Machete")) { 
434	            this.mTextPainti.setARGB(255, 102, 74, 74); 
435	            return "Machete"; 
436	        } 
437	        if (string2.contains((CharSequence)"Cowbar") && Overlay.getConfig("Crowbar")) { 
438	            this.mTextPainti.setARGB(255, 102, 74, 74); 
439	            return "Crowbar"; 
440	        } 
441	        if (string2.contains((CharSequence)"CrossBow") && Overlay.getConfig("CrossBow")) { 
442	            this.mTextPainti.setARGB(255, 102, 74, 74); 
443	            return "CrossBow"; 
444	        } 
445	        if (string2.contains((CharSequence)"Pan") && Overlay.getConfig("Pan")) { 
446	            this.mTextPainti.setARGB(255, 102, 74, 74); 
447	            return "Pan"; 
448	        } 
449	        if (string2.contains((CharSequence)"SawedOff") && Overlay.getConfig("Sawed-Off")) { 
450	            this.mTextPainti.setARGB(255, 153, 109, 109); 
451	            return "SawedOff"; 
452	        } 
453	        if (string2.contains((CharSequence)"R1895") && Overlay.getConfig("R1895")) { 
454	            this.mTextPainti.setARGB(255, 156, 113, 81); 
455	            return "R1895"; 
456	        } 
457	        if (string2.contains((CharSequence)"Vz61") && Overlay.getConfig("Scorpion")) { 
458	            this.mTextPainti.setARGB(255, 156, 113, 81); 
459	            return "Scorpion"; 
460	        } 
461	        if (string2.contains((CharSequence)"P92") && Overlay.getConfig("P92")) { 
462	            this.mTextPainti.setARGB(255, 156, 113, 81); 
463	            return "P92"; 
464	        } 
465	        if (string2.contains((CharSequence)"P18C") && Overlay.getConfig("P18C")) { 
466	            this.mTextPainti.setARGB(255, 156, 113, 81); 
467	            return "P18C"; 
468	        } 
469	        if (string2.contains((CharSequence)"R45") && Overlay.getConfig("R45")) { 
470	            this.mTextPainti.setARGB(255, 156, 113, 81); 
471	            return "R45"; 
472	        } 
473	        if (string2.contains((CharSequence)"P1911") && Overlay.getConfig("P1911")) { 
474	            this.mTextPainti.setARGB(255, 156, 113, 81); 
475	            return "P1911"; 
476	        } 
477	        if (string2.contains((CharSequence)"DesertEagle") && Overlay.getConfig("Dessert Eagle")) { 
478	            this.mTextPainti.setARGB(255, 156, 113, 81); 
479	            return "DesertEagle"; 
480	        } 
481	        if (string2.contains((CharSequence)"Ammo_762mm") && Overlay.getConfig("7.62mm")) { 
482	            this.mTextPainti.setARGB(255, 92, 36, 28); 
483	            return "7.62"; 
484	        } 
485	        if (string2.contains((CharSequence)"Ammo_45AC") && Overlay.getConfig("45ACP")) { 
486	            this.mTextPainti.setColor(-3355444); 
487	            return "45ACP"; 
488	        } 
489	        if (string2.contains((CharSequence)"Ammo_556mm") && Overlay.getConfig("5.56mm")) { 
490	            this.mTextPainti.setColor(-16711936); 
491	            return "5.56"; 
492	        } 
493	        if (string2.contains((CharSequence)"Ammo_9mm") && Overlay.getConfig("9mm")) { 
494	            this.mTextPainti.setColor(-256); 
495	            return "9mm"; 
496	        } 
497	        if (string2.contains((CharSequence)"Ammo_300Magnum") && Overlay.getConfig("300Magnum")) { 
498	            this.mTextPainti.setColor(-16777216); 
499	            return "300Magnum"; 
500	        } if (string2.contains((CharSequence)"Ammo_50BMG") && Overlay.getConfig("50BMG")) { 
502	            this.mTextPainti.setColor(-16777216); 
503	            return "50BMG"; 
504	        } 
505	        if (string2.contains((CharSequence)"Ammo_12Guage") && Overlay.getConfig("12Guage")) { 
506	            this.mTextPainti.setARGB(255, 156, 91, 81); 
507	            return "12Guage"; 
508	        } 
509	        if (string2.contains((CharSequence)"Ammo_Bolt") && Overlay.getConfig("Arrow")) { 
510	            this.mTextPainti.setARGB(255, 156, 113, 81); 
511	            return "Arrow"; 
512	        } 
513	        if (string2.contains((CharSequence)"Bag_Lv3") && Overlay.getConfig("Bag L3")) { 
514	            this.mTextPainti.setARGB(255, 36, 83, 255); 
515	            return "Bag lvl 3"; 
516	        } 
517	        if (string2.contains((CharSequence)"Bag_Lv1") && Overlay.getConfig("Bag L1")) { 
518	            this.mTextPainti.setARGB(255, 127, 154, 250); 
519	            return "Bag lvl 1"; 
520	        } 
521	        if (string2.contains((CharSequence)"Bag_Lv2") && Overlay.getConfig("Bag L2")) { 
522	            this.mTextPainti.setARGB(255, 77, 115, 255); 
523	            return "Bag lvl 2"; 
524	        } 
525	        if (string2.contains((CharSequence)"Armor_Lv2") && Overlay.getConfig("Vest L2")) { 
526	            this.mTextPainti.setARGB(255, 77, 115, 255); 
527	            return "Vest lvl 2"; 
528	        } 
529	        if (string2.contains((CharSequence)"Armor_Lv1") && Overlay.getConfig("Vest L1")) { 
530	            this.mTextPainti.setARGB(255, 127, 154, 250); 
531	            return "Vest lvl 1"; 
532	        } 
533	        if (string2.contains((CharSequence)"Armor_Lv3") && Overlay.getConfig("Vest L3")) { 
534	            this.mTextPainti.setARGB(255, 36, 83, 255); 
535	            return "Vest lvl 3"; 
536	        } 
537	        if (string2.contains((CharSequence)"Helmet_Lv2") && Overlay.getConfig("Helmet L2")) { 
538	            this.mTextPainti.setARGB(255, 77, 115, 255); 
539	            return "Helmet lvl 2"; 
540	        } 
541	        if (string2.contains((CharSequence)"Helmet_Lv1") && Overlay.getConfig("Helmet L1")) { 
542	            this.mTextPainti.setARGB(255, 127, 154, 250); 
543	            return "Helmet lvl 1"; 
544	        } 
545	        if (string2.contains((CharSequence)"Helmet_Lv3") && Overlay.getConfig("Helmet L3")) { 
546	            this.mTextPainti.setARGB(255, 36, 83, 255); 
547	            return "Helmet lvl 3"; 
548	        } 
549	        if (string2.contains((CharSequence)"Pills") && Overlay.getConfig("PainKiller")) { 
550	            this.mTextPainti.setARGB(255, 227, 91, 54); 
551	            return "PainKiller"; 
552	        } 
553	        if (string2.contains((CharSequence)"Injection") && Overlay.getConfig("Injection")) { 
554	            this.mTextPainti.setARGB(255, 204, 193, 190); 
555	            return "Injection"; 
556	        } 
557	        if (string2.contains((CharSequence)"Drink") && Overlay.getConfig("EnergyDrink")) { 
558	            this.mTextPainti.setARGB(255, 54, 175, 227); 
559	            return "Energy Drink"; 
560	        } 
561	        if (string2.contains((CharSequence)"Firstaid") && Overlay.getConfig("FirstAid")) { 
562	            this.mTextPainti.setARGB(255, 194, 188, 109); 
563	            return "FirstAid"; 
564	        } 
565	        if (string2.contains((CharSequence)"Bandage") && Overlay.getConfig("Bandage")) { 
566	            this.mTextPainti.setARGB(255, 43, 189, 48); 
567	            return "Bandage"; 
568	        } 
569	        if (string2.contains((CharSequence)"FirstAidbox") && Overlay.getConfig("MedKit")) { 
570	            this.mTextPainti.setARGB(255, 0, 171, 6); 
571	            return "Medkit"; 
572	        } 
573	        if (string2.contains((CharSequence)"Grenade_Stun") && Overlay.getConfig("Stun")) { 
574	            this.mTextPainti.setARGB(255, 204, 193, 190); 
575	            return "Stun"; 
576	        } 
577	        if (string2.contains((CharSequence)"Grenade_Shoulei") && Overlay.getConfig("Grenade")) { 
578	            this.mTextPainti.setARGB(255, 2, 77, 4); 
579	            return "Grenade"; 
580	        } 
581	        if (string2.contains((CharSequence)"Grenade_Smoke") && Overlay.getConfig("Smoke")) { 
582	            this.mTextPainti.setColor(-1); 
583	            return "Smoke"; 
584	        } 
585	        if (string2.contains((CharSequence)"Grenade_Burn") && Overlay.getConfig("Molotov")) { 
586	            this.mTextPainti.setARGB(255, 230, 175, 64); 
587	            return "Molotov"; 
588	        } 
589	        if (string2.contains((CharSequence)"Large_FlashHider") && Overlay.getConfig("Flash Hider Ar")) { 
590	            this.mTextPainti.setARGB(255, 255, 213, 130); 
591	            return "Flash Hider Ar"; 
592	        } 
593	        if (string2.contains((CharSequence)"QK_Large_C") && Overlay.getConfig("Compensator Ar")) { 
594	            this.mTextPainti.setARGB(255, 255, 213, 130); 
595	            return "Compensator Ar"; 
596	        } 
597	        if (string2.contains((CharSequence)"Mid_FlashHider") && Overlay.getConfig("Flash Hider SMG")) { 
598	            this.mTextPainti.setARGB(255, 255, 213, 130); 
599	            return "Flash Hider SMG"; 
600	        } 
601	        if (string2.contains((CharSequence)"QT_A_") && Overlay.getConfig("Tactical Stock")) { 
602	            this.mTextPainti.setARGB(255, 158, 222, 195); 
603	            return "Tactical Stock"; 
604	        } 
605	        if (string2.contains((CharSequence)"DuckBill") && Overlay.getConfig("Duckbill")) { 
606	            this.mTextPainti.setARGB(255, 158, 222, 195); 
607	            return "DuckBill"; 
608	        } 
609	        if (string2.contains((CharSequence)"Sniper_FlashHider") && Overlay.getConfig("Flash Hider Sniper")) { 
610	            this.mTextPainti.setARGB(255, 158, 222, 195); 
611	            return "Flash Hider Sniper"; 
612	        } 
613	        if (string2.contains((CharSequence)"Mid_Suppressor") && Overlay.getConfig("Suppressor SMG")) { 
614	            this.mTextPainti.setARGB(255, 158, 222, 195); 
615	            return "Suppressor SMG"; 
616	        } 
617	        if (string2.contains((CharSequence)"Choke") && Overlay.getConfig("Choke")) { 
618	            this.mTextPainti.setARGB(255, 155, 189, 222); 
619	            return "Choke"; 
620	        } 
621	        if (string2.contains((CharSequence)"QT_UZI") && Overlay.getConfig("Stock Micro UZI")) { 
622	            this.mTextPainti.setARGB(255, 155, 189, 222); 
623	            return "Stock Micro UZI"; 
624	        } 
625	        if (string2.contains((CharSequence)"QK_Sniper") && Overlay.getConfig("Compensator Sniper")) { 
626	            this.mTextPainti.setARGB(255, 60, 127, 194); 
627	            return "Compensator Sniper"; 
628	        } 
629	        if (string2.contains((CharSequence)"Sniper_Suppressor") && Overlay.getConfig("Suppressor Sniper")) { 
630	            this.mTextPainti.setARGB(255, 60, 127, 194); 
631	            return "Suppressor Sniper"; 
632	        } 
633	        if (string2.contains((CharSequence)"Large_Suppressor") && Overlay.getConfig("Suppressor Ar")) { 
634	            this.mTextPainti.setARGB(255, 60, 127, 194); 
635	            return "Suppressor Ar"; 
636	        } 
637	        if (string2.contains((CharSequence)"Sniper_EQ_") && Overlay.getConfig("Extended QD Sniper")) { 
638	            this.mTextPainti.setARGB(255, 193, 140, 222); 
639	            return "Ex.Qd.Sniper"; 
640	        } 
641	        if (string2.contains((CharSequence)"Sniper_E_") && Overlay.getConfig("Extended Mag Sniper")) { 
642	            this.mTextPainti.setARGB(255, 193, 163, 209); 
643	            return "Ex.Sniper"; 
644	        } 
645	        if (string2.contains((CharSequence)"Sniper_Q_") && Overlay.getConfig("QuickDraw Mag Sniper")) { 
646	            this.mTextPainti.setARGB(255, 193, 163, 209); 
647	            return "Qd.Sniper"; 
648	        } 
649	        if (string2.contains((CharSequence)"Large_EQ_") && Overlay.getConfig("Extended QD Ar")) { 
650	            this.mTextPainti.setARGB(255, 193, 140, 222); 
651	            return "Extended QD Ar"; 
652	        } 
653	        if (string2.contains((CharSequence)"Large_E_") && Overlay.getConfig("Extended Mag Ar")) { 
654	            this.mTextPainti.setARGB(255, 193, 163, 209); 
655	            return "Extended Mag Ar"; 
656	        } 
657	        if (string2.contains((CharSequence)"Large_Q_") && Overlay.getConfig("QuickDraw Mag Ar")) { 
658	            this.mTextPainti.setARGB(255, 193, 163, 209); 
659	            return "QuickDraw Mag Ar"; 
660	        } 
661	        if (string2.contains((CharSequence)"Mid_EQ_") && Overlay.getConfig("Extended QD SMG")) { 
662	            this.mTextPainti.setARGB(255, 193, 140, 222); 
663	            return "Ex.Qd.SMG"; 
664	        } 
665	        if (string2.contains((CharSequence)"Mid_E_") && Overlay.getConfig("Extended Mag SMG")) { 
666	            this.mTextPainti.setARGB(255, 193, 163, 209); 
667	            return "Ex.SMG"; 
668	        } 
669	        if (string2.contains((CharSequence)"Mid_Q_") && Overlay.getConfig("QuickDraw Mag SMG")) { 
670	            this.mTextPainti.setARGB(255, 193, 163, 209); 
671	            return "Qd.SMG"; 
672	        } 
673	        if (string2.contains((CharSequence)"Crossbow_Q") && Overlay.getConfig("Quiver CrossBow")) { 
674	            this.mTextPainti.setARGB(255, 148, 121, 163); 
675	            return "Quiver CrossBow"; 
676	        } 
677	        if (string2.contains((CharSequence)"ZDD_Sniper") && Overlay.getConfig("Bullet Loop")) { 
678	            this.mTextPainti.setARGB(255, 148, 121, 163); 
679	            return "Bullet Loop"; 
680	        } 
681	        if (string2.contains((CharSequence)"ThumbGrip") && Overlay.getConfig("Thumb Grip")) { 
682	            this.mTextPainti.setARGB(255, 148, 121, 163); 
683	            return "Thumb Grip"; 
684	        } 
685	        if (string2.contains((CharSequence)"Lasersight") && Overlay.getConfig("Laser Sight")) { 
686	            this.mTextPainti.setARGB(255, 148, 121, 163); 
687	            return "Laser Sight"; 
688	        } 
689	        if (string2.contains((CharSequence)"Angled") && Overlay.getConfig("Angled Grip")) { 
690	            this.mTextPainti.setARGB(255, 219, 219, 219); 
691	            return "Angled Grip"; 
692	        } 
693	        if (string2.contains((CharSequence)"LightGrip") && Overlay.getConfig("Light Grip")) { 
694	            this.mTextPainti.setARGB(255, 219, 219, 219); 
695	            return "Light Grip"; 
696	        } 
697	        if (string2.contains((CharSequence)"Vertical") && Overlay.getConfig("Vertical Grip")) { 
698	            this.mTextPainti.setARGB(255, 219, 219, 219); 
699	            return "Vertical Grip"; 
700	        } 
701	        if (string2.contains((CharSequence)"HalfGrip") && Overlay.getConfig("Half Grip")) { 
702	            this.mTextPainti.setARGB(255, 155, 189, 222); 
703	            return "Half Grip"; 
704	        } 
705	        if (string2.contains((CharSequence)"GasCan") && Overlay.getConfig("Gas Can")) { 
706	            this.mTextPainti.setARGB(255, 255, 143, 203); 
707	            return "Gas Can"; 
708	        } 
709	        if (string2.contains((CharSequence)"Mid_Compensator") && Overlay.getConfig("Compensator SMG")) { 
710	            this.mTextPainti.setARGB(255, 219, 219, 219); 
711	            return "Compensator SMG"; 
712	        } 
713	        if (string2.contains((CharSequence)"Flaregun") && Overlay.getConfig("FlareGun")) { 
714	            this.mTextPainti.setARGB(255, 242, 63, 159); 
715	            return "Flare Gun"; 
716	        } 
717	        if (string2.contains((CharSequence)"Ammo_Flare") && Overlay.getConfig("FlareGun")) { 
718	            this.mTextPainti.setARGB(255, 242, 63, 159); 
719	            return "Flare Gun"; 
720	        } 
721	        if (string2.contains((CharSequence)"Ghillie") && Overlay.getConfig("Ghillie Suit")) { 
722	            this.mTextPainti.setARGB(255, 139, 247, 67); 
723	            return "Ghillie Suit"; 
724	        } 
725	        if (string2.contains((CharSequence)"CheekPad") && Overlay.getConfig("CheekPad")) { 
726	            this.mTextPainti.setARGB(255, 112, 55, 55); 
727	            return "CheekPad"; 
728	        } 
729	        if (string2.contains((CharSequence)"PickUpListWrapperActor") && Overlay.getConfig("LootBox")) { 
730	            this.mTextPainti.setARGB(255, 255, 255, 255); 
731	            return "LootBox"; 
732	        } 
733	        if (string2.contains((CharSequence)"AirDropPlane") && Overlay.getConfig("DropPlane")) { 
734	            this.mTextPainti.setARGB(255, 0, 255, 255); 
735	            return "DropPlane"; 
736	        } 
737	        if (string2.contains((CharSequence)"AirDropBox") && Overlay.getConfig("AirDrop")) { 
738	            this.mTextPainti.setARGB(255, 0, 200, 0); 
739	            return "AirDrop"; 
740	        } 
741	        return null; 
742	    } 
743	 
744	    private String getWeapon(int n2) { 
745	        switch (n2) { 
746	            default: { 
747	                return ""; 
748	            } 
749	            case 108005:  
750	            case 1080051:  
751	            case 1080052:  
752	            case 1080053:  
753	            case 1080054:  
754	            case 1080055: { 
755	                return "Knife"; 
756	            } 
757	            case 108004:  
758	            case 1080041:  
759	            case 1080042:  
760	            case 1080043:  
761	            case 1080044:  
762	            case 1080045: { 
763	                return "Panci"; 
764	            } 
765	            case 108003:  
766	            case 1080031:  
767	            case 1080032:  
768	            case 1080033:  
769	            case 1080034:  
770	            case 1080035: { 
771	                return "Sickle"; 
772	            } 
773	            case 108002:  
774	            case 1080021:  
775	            case 1080022:  
776	            case 1080023:  
777	            case 1080024:  
778	            case 1080025: { 
779	                return "Crowbar"; 
780	            } 
781	            case 108001:  
782	            case 1080011:  
783	            case 1080012:  
784	            case 1080013:  
785	            case 1080014:  
786	            case 1080015: { 
787	                return "Machete"; 
788	            } 
789	            case 107001:  
790	            case 1070011:  
791	            case 1070012:  
792	            case 1070013:  
793	            case 1070014:  
794	            case 1070015: { 
795	                return "Crossbow"; 
796	            } 
797	            case 106010:  
798	            case 1060101:  
799	            case 1060102:  
800	            case 1060103:  
801	            case 1060104:  
802	            case 1060105: { 
803	                return "Desert Angle"; 
804	            } 
805	            case 106008:  
806	            case 1060081:  
807	            case 1060082:  
808	            case 1060083:  
809	            case 1060084:  
810	            case 1060085: { 
811	                return "Scorpion"; 
812	            } 
813	            case 106006:  
814	            case 1060061:  
815	            case 1060062:  
816	            case 1060063:  
817	            case 1060064:  
818	            case 1060065: { 
819	                return "Sawed Off"; 
820	            } 
821	            case 106005:  
822	            case 1060051:  
823	            case 1060052:  
824	            case 1060053:  
825	            case 1060054:  
826	            case 1060055: { 
827	                return "R45"; 
828	            } 
829	            case 106004:  
830	            case 1060041:  
831	            case 1060042:  
832	            case 1060043:  
833	            case 1060044:  
834	            case 1060045: { 
835	                return "P18C"; 
836	            } 
837	            case 106003:  
838	            case 1060031:  
839	            case 1060032:  
840	            case 1060033:  
841	            case 1060034:  
842	            case 1060035: { 
843	                return "R1895"; 
844	            } 
845	            case 106002:  
846	            case 1060021:  
847	            case 1060022:  
848	            case 1060023:  
849	            case 1060024:  
850	            case 1060025: { 
851	                return "P1911"; 
852	            } 
853	            case 106001:  
854	            case 1060011:  
855	            case 1060012:  
856	            case 1060013:  
857	            case 1060014:  
858	            case 1060015: { 
859	                return "P92"; 
860	            } 
861	            case 105010:  
862	            case 1050101:  
863	            case 1050102:  
864	            case 1050103:  
865	            case 1050104:  
866	            case 1050105: { 
867	                return "MG3"; 
868	            } 
869	            case 105002:  
870	            case 1050021:  
871	            case 1050022:  
872	            case 1050023:  
873	            case 1050024:  
874	            case 1050025: { 
875	                return "DP28"; 
876	            } 
877	            case 105001:  
878	            case 1050011:  
879	            case 1050012:  
880	            case 1050013:  
881	            case 1050014:  
882	            case 1050015: { 
883	                return "M249"; 
884	            } 
885	            case 104102:  
886	            case 1041021:  
887	            case 1041022:  
888	            case 1041023:  
889	            case 1041024:  
890	            case 1041025: { 
891	                return "NS2000"; 
892	            } 
893	            case 104101:  
894	            case 1041011:  
895	            case 1041012:  
896	            case 1041013:  
897	            case 1041014:  
898	            case 1041015: { 
899	                return "M1014"; 
900	            } 
901	            case 104004:  
902	            case 1040041:  
903	            case 1040042:  
904	            case 1040043:  
905	            case 1040044:  
906	            case 1040045: { 
907	                return "DBS"; 
908	            } 
909	            case 104003:  
910	            case 1040031:  
911	            case 1040032:  
912	            case 1040033:  
913	            case 1040034:  
914	            case 1040035: { 
915	                return "S12K"; 
916	            } 
917	            case 104002:  
918	            case 1040021:  
919	            case 1040022:  
920	            case 1040023:  
921	            case 1040024:  
922	            case 1040025: { 
923	                return "S1897"; 
924	            } 
925	            case 104001:  
926	            case 1040011:  
927	            case 1040012:  
928	            case 1040013:  
929	            case 1040014:  
930	            case 1040015: { 
931	                return "S686"; 
932	            } 
933	            case 103100:  
934	            case 1031001:  
935	            case 1031002:  
936	            case 1031003:  
937	            case 1031004:  
938	            case 1031005: { 
939	                return "Mk12"; 
940	            } 
941	            case 103012:  
942	            case 1030121:  
943	            case 1030122:  
944	            case 1030123:  
945	            case 1030124:  
946	            case 1030125: { 
947	                return "Lynx AMR"; 
948	            } 
949	            case 103011:  
950	            case 1030111:  
951	            case 1030112:  
952	            case 1030113:  
953	            case 1030114:  
954	            case 1030115: { 
955	                return "Mosin"; 
956	            } 
957	            case 103010:  
958	            case 1030101:  
959	            case 1030102:  
960	            case 1030103:  
961	            case 1030104:  
962	            case 1030105: { 
963	                return "QBU"; 
964	            } 
965	            case 103009:  
966	            case 1030091:  
967	            case 1030092:  
968	            case 1030093:  
969	            case 1030094:  
970	            case 1030095: { 
971	                return "SLR"; 
972	            } 
973	            case 103008:  
974	            case 1030081:  
975	            case 1030082:  
976	            case 1030083:  
977	            case 1030084:  
978	            case 1030085: { 
979	                return "Win94"; 
980	            } 
981	            case 103007:  
982	            case 1030071:  
983	            case 1030072:  
984	            case 1030073:  
985	            case 1030074:  
986	            case 1030075: { 
987	                return "Mk14"; 
988	            } 
989	            case 103006:  
990	            case 1030061:  
991	            case 1030062:  
992	            case 1030063:  
993	            case 1030064:  
994	            case 1030065: { 
995	                return "Mini14"; 
996	            } 
997	            case 103005:  
998	            case 1030051:  
999	            case 1030052:  
1000	            case 1030053:  
1001	            case 1030054:  
1002	            case 1030055: { 
1003	                return "VSS"; 
1004	            } 
1005	            case 103004:  
1006	            case 1030041:  
1007	            case 1030042:  
1008	            case 1030043:  
1009	            case 1030044:  
1010	            case 1030045: { 
1011	                return "SKS"; 
1012	            } 
1013	            case 103003:  
1014	            case 1030031:  
1015	            case 1030032:  
1016	            case 1030033:  
1017	            case 1030034:  
1018	            case 1030035: { 
1019	                return "AWM"; 
1020	            } 
1021	            case 103002:  
1022	            case 1030021:  
1023	            case 1030022:  
1024	            case 1030023:  
1025	            case 1030024:  
1026	            case 1030025: { 
1027	                return "M24"; 
1028	            } 
1029	            case 103001:  
1030	            case 1030011:  
1031	            case 1030012:  
1032	            case 1030013:  
1033	            case 1030014:  
1034	            case 1030015: { 
1035	                return "Kar98k"; 
1036	            } 
1037	            case 102105:  
1038	            case 1021051:  
1039	            case 1021052:  
1040	            case 1021053:  
1041	            case 1021054:  
1042	            case 1021055: { 
1043	                return "P90"; 
1044	            } 
1045	            case 102007:  
1046	            case 1020071:  
1047	            case 1020072:  
1048	            case 1020073:  
1049	            case 1020074:  
1050	            case 1020075: { 
1051	                return "MP5K"; 
1052	            } 
1053	            case 102005:  
1054	            case 1020051:  
1055	            case 1020052:  
1056	            case 1020053:  
1057	            case 1020054:  
1058	            case 1020055: { 
1059	                return "Bizon"; 
1060	            } 
1061	            case 102004:  
1062	            case 1020041:  
1063	            case 1020042:  
1064	            case 1020043:  
1065	            case 1020044:  
1066	            case 1020045: { 
1067	                return "ThommyGun"; 
1068	            } 
1069	            case 102003:  
1070	            case 1020031:  
1071	            case 1020032:  
1072	            case 1020033:  
1073	            case 1020034:  
1074	            case 1020035: { 
1075	                return "Vector"; 
1076	            } 
1077	            case 102002:  
1078	            case 1020021:  
1079	            case 1020022:  
1080	            case 1020023:  
1081	            case 1020024:  
1082	            case 1020025: { 
1083	                return "UMP"; 
1084	            } 
1085	            case 102001:  
1086	            case 1020011:  
1087	            case 1020012:  
1088	            case 1020013:  
1089	            case 1020014:  
1090	            case 1020015: { 
1091	                return "UZI"; 
1092	            } 
1093	            case 101102:  
1094	            case 1011021:  
1095	            case 1011022:  
1096	            case 1011023:  
1097	            case 1011024:  
1098	            case 1011025: { 
1099	                return "ACE32"; 
1100	            } 
1101	            case 101101:  
1102	            case 1011011:  
1103	            case 1011012:  
1104	            case 1011013:  
1105	            case 1011014:  
1106	            case 1011015: { 
1107	                return "ASM AR"; 
1108	            } 
1109	            case 101100:  
1110	            case 1011001:  
1111	            case 1011002:  
1112	            case 1011003:  
1113	            case 1011004:  
1114	            case 1011005: { 
1115	                return "FAMAS"; 
1116	            } 
1117	            case 101012:  
1118	            case 1010121:  
1119	            case 1010122:  
1120	            case 1010123:  
1121	            case 1010124:  
1122	            case 1010125: { 
1123	                return "Honey Badger"; 
1124	            } 
1125	            case 101010:  
1126	            case 1010101:  
1127	            case 1010102:  
1128	            case 1010103:  
1129	            case 1010104:  
1130	            case 1010105: { 
1131	                return "G36C"; 
1132	            } 
1133	            case 101009:  
1134	            case 1010091:  
1135	            case 1010092:  
1136	            case 1010093:  
1137	            case 1010094:  
1138	            case 1010095: { 
1139	                return "Mk47"; 
1140	            } 
1141	            case 101008:  
1142	            case 1010081:  
1143	            case 1010082:  
1144	            case 1010083:  
1145	            case 1010084:  
1146	            case 1010085: { 
1147	                return "M762"; 
1148	            } 
1149	            case 101007:  
1150	            case 1010071:  
1151	            case 1010072:  
1152	            case 1010073:  
1153	            case 1010074:  
1154	            case 1010075: { 
1155	                return "QBZ"; 
1156	            } 
1157	            case 101006:  
1158	            case 1010061:  
1159	            case 1010062:  
1160	            case 1010063:  
1161	            case 1010064:  
1162	            case 1010065: { 
1163	                return "AUG"; 
1164	            } 
1165	            case 101005:  
1166	            case 1010051:  
1167	            case 1010052:  
1168	            case 1010053:  
1169	            case 1010054:  
1170	            case 1010055: { 
1171	                return "Groza"; 
1172	            } 
1173	            case 101004:  
1174	            case 1010041:  
1175	            case 1010042:  
1176	            case 1010043:  
1177	            case 1010044:  
1178	            case 1010045: { 
1179	                return "M416"; 
1180	            } 
1181	            case 101003:  
1182	            case 1010031:  
1183	            case 1010032:  
1184	            case 1010033:  
1185	            case 1010034:  
1186	            case 1010035: { 
1187	                return "SCAR-L"; 
1188	            } 
1189	            case 101002:  
1190	            case 1010021:  
1191	            case 1010022:  
1192	            case 1010023:  
1193	            case 1010024:  
1194	            case 1010025: { 
1195	                return "M16A4"; 
1196	            } 
1197	            case 101001:  
1198	            case 1010011:  
1199	            case 1010012:  
1200	            case 1010013:  
1201	            case 1010014:  
1202	            case 1010015:  
1203	        } 
1204	        return "AKM"; 
  private int getWeaponIcon(int n2) { 
1208	        if (n2 == 101006) { 
1209	            return 2131230959; 
1210	        } 
1211	        if (n2 == 101008) { 
1212	            return 2131230961; 
1213	        } 
1214	        if (n2 == 101003) { 
1215	            return 2131230956; 
1216	        } 
1217	        if (n2 == 101004) { 
1218	            return 2131230957; 
1219	        } 
1220	        if (n2 == 101002) { 
1221	            return 2131230955; 
1222	        } 
1223	        if (n2 == 101009) { 
1224	            return 2131230962; 
1225	        } 
1226	        if (n2 == 101010) { 
1227	            return 2131230963; 
1228	        } 
1229	        if (n2 == 101007) { 
1230	            return 2131230960; 
1231	        } 
1232	        if (n2 == 101001) { 
1233	            return 2131230954; 
1234	        } 
1235	        if (n2 == 101005) { 
1236	            return 2131230958; 
1237	        } 
1238	        if (n2 == 102005) { 
1239	            return 2131230968; 
1240	        } 
1241	        if (n2 == 102004) { 
1242	            return 2131230967; 
1243	        } 
1244	        if (n2 == 102007) { 
1245	            return 2131230969; 
1246	        } 
1247	        if (n2 == 102002) { 
1248	            return 2131230965; 
1249	        } 
1250	        if (n2 == 102003) { 
1251	            return 2131230966; 
1252	        } 
1253	        if (n2 == 102001) { 
1254	            return 2131230964; 
1255	        } 
1256	        if (n2 == 105002) { 
1257	            return 2131230985; 
1258	        } 
1259	        if (n2 == 105001) { 
1260	            return 2131230984; 
1261	        } 
1262	        if (n2 == 103003) { 
1263	            return 2131230972; 
1264	        } 
1265	        if (n2 == 103010) { 
1266	            return 2131230979; 
1267	        } 
1268	        if (n2 == 103009) { 
1269	            return 2131230978; 
1270	        } 
1271	        if (n2 == 103004) { 
1272	            return 2131230973; 
1273	        } 
1274	        if (n2 == 103006) { 
1275	            return 2131230975; 
1276	        } 
1277	        if (n2 == 103002) { 
1278	            return 2131230971; 
1279	        } 
1280	        if (n2 == 103001) { 
1281	            return 2131230970; 
1282	        } 
1283	        if (n2 == 103005) { 
1284	            return 2131230974; 
1285	        } 
1286	        if (n2 == 103008) { 
1287	            return 2131230977; 
1288	        } 
1289	        if (n2 == 103007) { 
1290	            return 2131230976; 
1291	        } 
1292	        if (n2 == 104003) { 
1293	            return 2131230982; 
1294	        } 
1295	        if (n2 == 104004) { 
1296	            return 2131230983; 
1297	        } 
1298	        if (n2 == 104001) { 
1299	            return 2131230980; 
1300	        } 
1301	        if (n2 == 104002) { 
1302	            return 2131230981; 
1303	        } 
1304	        if (n2 == 108003) { 
1305	            return 2131230998; 
1306	        } 
1307	        if (n2 == 108001) { 
1308	            return 2131230996; 
1309	        } 
1310	        if (n2 == 108002) { 
1311	            return 2131230997; 
1312	        } 
1313	        if (n2 == 107001) { 
1314	            return 2131230995; 
1315	        } 
1316	        if (n2 == 108004) { 
1317	            return 2131230999; 
1318	        } 
1319	        if (n2 == 106006) { 
1320	            return 2131230992; 
1321	        } 
1322	        if (n2 == 106003) { 
1323	            return 2131230989; 
1324	        } 
1325	        if (n2 == 106008) { 
1326	            return 2131230993; 
1327	        } 
1328	        if (n2 == 106001) { 
1329	            return 2131230987; 
1330	        } 
1331	        if (n2 == 106004) { 
1332	            return 2131230990; 
1333	        } 
1334	        if (n2 == 106005) { 
1335	            return 2131230991; 
1336	        } 
1337	        if (n2 == 106002) { 
1338	            return 2131230988; 
1339	        } 
1340	        if (n2 == 106010) { 
1341	            return 2131230994; 
1342	        } 
1343	        return 0; 
1344	    } 
1345	 
1346	    private void handleFuelHealthText(Canvas canvas, float f, float f2, float f3, float f5, float f6) { 
1347	        this.mStrokePaint.setARGB(50, 0, 0, 0); 
1348	        canvas.drawRoundRect(f - 45.0f, f2 + 19.0f, f + 50.0f, f2 + 25.0f, 3.0f, 3.0f, this.mStrokePaint); 
1349	        this.mFilledPaint.setARGB(100, 255, 255, 0); 
1350	        canvas.drawRoundRect(f - 45.0f, f2 + 19.0f, f - 40.0f + f3 * 90.0f / 100.0f, f2 + 25.0f, 3.0f, 3.0f, this.mFilledPaint); 
1351	        this.mStrokePaint.setARGB(50, 0, 0, 0); 
1352	        canvas.drawRoundRect(f - 45.0f, f2 + 29.0f, f + 50.0f, f2 + 35.0f, 3.0f, 3.0f, this.mStrokePaint); 
1353	        this.mFilledPaint.setARGB(100, 255, 45, 30); 
1354	        canvas.drawRoundRect(f - 45.0f, f2 + 29.0f, f - 40.0f + f5 * 90.0f / 100.0f, f2 + 35.0f, 3.0f, 3.0f, this.mFilledPaint); 
1355	    } 
1356	 
1357	    public static Bitmap scale(Bitmap bitmap, int n2, int n4) { 
1358	        if ((float)bitmap.getWidth() / (float)n2 >= (float)bitmap.getHeight() / (float)n4) { 
1359	            int n5 = (int)((float)n2 / (float)bitmap.getWidth() * (float)bitmap.getHeight()); 
1360	            n4 = n2; 
1361	            n2 = n5; 
1362	        } else { 
1363	            n2 = n4; 
1364	            n4 = (int)((float)n2 / (float)bitmap.getHeight() * (float)bitmap.getWidth()); 
1365	        } 
1366	        Bitmap bitmap2 = Bitmap.createBitmap((int)n4, (int)n2, (Bitmap.Config)Bitmap.Config.ARGB_8888); 
1367	        float f = (float)n4 / (float)bitmap.getWidth(); 
1368	        float f2 = (float)n2 / (float)bitmap.getHeight(); 
1369	        float f3 = (float)n4 / 2.0f; 
1370	        float f5 = (float)n2 / 2.0f; 
1371	        Matrix matrix = new Matrix(); 
1372	        matrix.setScale(f, f2, f3, f5); 
1373	        Canvas canvas = new Canvas(bitmap2); 
1374	        canvas.setMatrix(matrix); 
1375	        canvas.drawBitmap(bitmap, f3 - (float)(bitmap.getWidth() / 2), f5 - (float)(bitmap.getHeight() / 2), new Paint(2)); 
1376	        return bitmap2; 
1377	    } 
1378	 
1379	    public void ClearCanvas(Canvas canvas) { 
1380	        canvas.drawColor(0, PorterDuff.Mode.CLEAR); 
1381	    } 
1382	 
1383	    public void DrawCircle(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5) { 
1384	        this.mStrokePaint.setARGB(n2, n4, n5, n6); 
1385	        this.mStrokePaint.setStrokeWidth(f5); 
1386	        canvas.drawCircle(f, f2, f3, this.mStrokePaint); 
1387	    } 
1388	 
1389	    public void DrawCurveRect(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5, float f6) { 
1390	        this.mStrokePaint.setStrokeWidth(f); 
1391	        this.mStrokePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1392	        this.mStrokePaint.setAlpha(n2); 
1393	        canvas.drawRoundRect(f2, f3, f5, f6, 5.0f, 5.0f, this.mStrokePaint); 
1394	    } 
1395	 
1396	    public void DrawCustom(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1397	        this.mTexturePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1398	        this.mTexturePaint.setAlpha(n2); 
1399	        this.mTexturePaint.setTextSize(f3); 
1400	        canvas.drawText("" + MainActivity.modeselect, f, f2, this.mTexturePaint); 
1401	    } 
1402	 
1403	    public void DrawDeadBoxItems(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1404	        this.mLootBoxPaint.setTextSize(f3); 
1405	        this.mLootBoxPaint.setColor(Color.parseColor((String)"#FF40CC7E")); 
1406	        canvas.drawText(string2, f - 60.0f, f2 - 10.0f, this.mLootBoxPaint); 
1407	    } 
1408	 
1409	    public void DrawEnemyCount(Canvas canvas, int n2, int n4, int n5, int n6, int n7, int n10, int n11, int n12) { 
1410	        n2 = Color.rgb((int)n4, (int)n5, (int)n6); 
1411	        GradientDrawable gradientDrawable = new GradientDrawable(GradientDrawable.Orientation.RIGHT_LEFT, new int[]{0, n2, 0}); 
1412	        gradientDrawable.setShape(0); 
1413	        gradientDrawable.setGradientRadius(120.0f); 
1414	        gradientDrawable.setBounds(new Rect(n7, n10, n11, n12)); 
1415	        canvas.save(); 
1416	        gradientDrawable.setGradientType(0); 
1417	        gradientDrawable.draw(canvas); 
1418	        canvas.restore(); 
1419	    } 
1420	 
1421	    public void DrawFillCircle(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5) { 
1422	        this.mFilledPaint.setARGB(n2, n4, n5, n6); 
1423	        this.mFilledPaint.setStrokeWidth(f5); 
1424	        canvas.drawCircle(f, f2, f3, this.mFilledPaint); 
1425	    } 
1426	 
1427	    public void DrawFillRect(Canvas canvas, int n2, int n4, int n5, int n6, int n7, int n10, int n11, int n12) { 
1428	        int n13 = Color.argb((int)n2, (int)n4, (int)n5, (int)n6); 
1429	        int n14 = Color.argb((int)n2, (int)n4, (int)n5, (int)n6); 
1430	        n2 = Color.argb((int)n2, (int)n4, (int)n5, (int)n6); 
1431	        GradientDrawable gradientDrawable = new GradientDrawable(GradientDrawable.Orientation.RIGHT_LEFT, new int[]{n13, n14, n2}); 
1432	        gradientDrawable.setShape(0); 
1433	        gradientDrawable.setCornerRadius(6.0f); 
1434	        gradientDrawable.setGradientRadius(120.0f); 
1435	        gradientDrawable.setBounds(new Rect(n7, n10, n11, n12)); 
1436	        canvas.save(); 
1437	        gradientDrawable.setGradientType(0); 
1438	        gradientDrawable.draw(canvas); 
1439	        canvas.restore(); 
1440	    } 
1441	 
1442	    public void DrawFilledCircle(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3) { 
1443	        this.mFilledPaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1444	        this.mFilledPaint.setAlpha(n2); 
1445	        canvas.drawCircle(f, f2, f3, this.mFilledPaint); 
1446	    } 
1447	 
1448	    public void DrawFilledCurve(Canvas canvas, int n2, int n4, int n5, int n6, int n7, int n10, int n11, int n12) { 
1449	        n2 = Color.rgb((int)n4, (int)n5, (int)n6); 
1450	        GradientDrawable gradientDrawable = new GradientDrawable(GradientDrawable.Orientation.RIGHT_LEFT, new int[]{0, n2, 0}); 
1451	        gradientDrawable.setShape(0); 
1452	        gradientDrawable.setGradientRadius(120.0f); 
1453	        gradientDrawable.setBounds(new Rect(n7, n10, n11, n12)); 
1454	        canvas.save(); 
1455	        gradientDrawable.setGradientType(0); 
1456	        gradientDrawable.draw(canvas); 
1457	        canvas.restore(); 
1458	    } 
1459	 
1460	    public void DrawFilledRect(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5) { 
1461	        this.mFillPaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1462	        this.mFillPaint.setAlpha(n2); 
1463	        canvas.drawRoundRect(f, f2, f3, f5, 5.0f, 5.0f, this.mFillPaint); 
1464	    } 
1465	 
1466	    public void DrawFilledRect2(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5) { 
1467	        this.mFillPaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1468	        this.mFillPaint.setAlpha(n2); 
1469	        canvas.drawRect(f, f2, f3, f5, this.mFillPaint); 
1470	    } 
1471	 
1472	    public void DrawFilledRoundRect(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5) { 
1473	        this.mFillPaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1474	        this.mFillPaint.setAlpha(n2); 
1475	        canvas.drawRoundRect(f, f2, f3, f5, 10.0f, 10.0f, this.mFillPaint); 
1476	    } 
1477	 
1478	    public void DrawFilledTriangle(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3) { 
1479	        this.mFilledPaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1480	        this.mFilledPaint.setAlpha(n2); 
1481	        float f5 = f3 / 2.0f; 
1482	        float f6 = (float)(Math.sqrt((double)3.0) * (double)f5); 
1483	        float f7 = f6 / 2.0f; 
1484	        f3 = f6 / 2.0f; 
1485	        Path path = new Path(); 
1486	        path.moveTo(f, f2 - f7); 
1487	        path.lineTo(f - f5, f2 + f3); 
1488	        path.lineTo(f + f5, f2 + (f6 /= 2.0f)); 
1489	        path.close(); 
1490	        canvas.drawPath(path, this.mFilledPaint); 
1491	    } 
1492	 
1493	    public void DrawItems(Canvas canvas, String string2, float f, float f2, float f3, float f5) { 
1494	        String string3 = this.getItemName(string2); 
1495	        if (string3 != null && !string3.equals((Object)"")) { 
1496	            this.mItemsPaint.setTextSize(f5); 
1497	            string2 = string3 + " (" + (int)f + ")"; 
1498	            this.mItemsPaint.setStyle(Paint.Style.STROKE); 
1499	            this.mItemsPaint.setStrokeWidth(3.0f); 
1500	            this.mItemsPaint.setColor(-16777216); 
1501	            if (string3.equals((Object)"LootBox")) { 
1502	                if (f < 150.0f) { 
1503	                    canvas.drawBitmap(this.lootBitmap, f2 - 25.0f, f3 - this.mScaleY * 72.0f, this.mPaintBitmap); 
1504	                    canvas.drawText(string2, f2, f3 - 8.0f, this.mItemsPaint); 
1505	                    this.mItemsPaint.setStyle(Paint.Style.FILL); 
1506	                    this.mItemsPaint.setColor(Color.parseColor((String)"#FF40CC7E")); 
1507	                    canvas.drawText(string2, f2, f3 - 8.0f, this.mItemsPaint); 
1508	                } 
1509	            } else if (string3.equals((Object)"AirDrop")) { 
1510	                canvas.drawBitmap(this.airdropBitmap, f2 - 25.0f, f3 - this.mScaleY * 72.0f, this.mPaintBitmap); 
1511	                canvas.drawText(string2, f2, f3 - 8.0f, this.mItemsPaint); 
1512	                this.mItemsPaint.setStyle(Paint.Style.FILL); 
1513	                this.mItemsPaint.setColor(Color.parseColor((String)"#FF0000")); 
1514	                canvas.drawText(string2, f2, f3 - 8.0f, this.mItemsPaint); 
1515	            } else { 
1516	                this.mTextPainti.setTextSize(f5); 
1517	                canvas.drawText(string3 + " (" + Math.round((float)f) + "m)", f2, f3, this.mTextPainti); 
1518	            } 
1519	        } 
1520	    } 
1521	 
1522	    public void DrawLine(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5, float f6) { 
1523	        this.mStrokePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1524	        this.mStrokePaint.setAlpha(n2); 
1525	        this.mStrokePaint.setStrokeWidth(f); 
1526	        canvas.drawLine(f2, f3, f5, f6, this.mStrokePaint); 
1527	    } 
1528	 
1529	    public void DrawName(Canvas canvas, int n2, int n4, int n5, int n6, String object, int n7, float f, float f2, float f3) { 
1530	        String[] stringArray = object.split(":"); 
1531	        object = new char[stringArray.length]; 
1532	        for (int j = 0; j < stringArray.length; ++j) { 
1533	            object[j] = (char)Integer.parseInt((String)stringArray[j]); 
1534	        } 
1535	        object = new String((char[])object); 
1536	        this.mTextPaint.setARGB(n2, n4, n5, n6); 
1537	        this.mTextPaint.setTextSize(f3); 
1538	        this.mTextPaint.setShadowLayer(3.0f, 2.0f, 2.0f, -16777216); 
1539	        canvas.drawText("(" + n7 + ")" + (String)object, f, f2, this.mTextPaint); 
1540	    } 
1541	 
1542	    public void DrawName1(Canvas canvas, int n2, int n4, int n5, int n6, String object, int n7, float f, float f2, float f3) { 
1543	        String[] stringArray = object.split(":"); 
1544	        object = new char[stringArray.length]; 
1545	        for (n7 = 0; n7 < stringArray.length; ++n7) { 
1546	            object[n7] = (char)Integer.parseInt((String)stringArray[n7]); 
1547	        } 
1548	        object = new String((char[])object); 
1549	        this.mNamePaint.setARGB(n2, n4, n5, n6); 
1550	        this.mNamePaint.setTextSize(f3); 
1551	        this.mNamePaint.setShadowLayer(8.0f, 1.5f, 1.5f, -16777216); 
1552	        canvas.drawText("   " + (String)object, f, f2, this.mNamePaint); 
1553	    } 
1554	 
1555	    public void DrawName2(Canvas canvas, int n2, int n4, int n5, int n6, String object, int n7, float f, float f2, float f3) { 
1556	        object = object.split(":"); 
1557	        char[] cArray = new char[((String[])object).length]; 
1558	        for (n7 = 0; n7 < ((String[])object).length; ++n7) { 
1559	            cArray[n7] = (char)Integer.parseInt((String)object[n7]); 
1560	        } 
1561	        object = new String(cArray); 
1562	        this.mTextPaint.setARGB(n2, n4, n5, n6); 
1563	        this.mTextPaint.setTextSize(f3); 
1564	        canvas.drawText("" + "" + this.Nation((String)object), f - 80.0f, f2 - 30.0f, this.mTextPaint); 
1565	    } 
1566	 
1567	    public void DrawNation(Canvas canvas, int n2, int n4, int n5, int n6, String object, int n7, float f, float f2, float f3) { 
1568	        object = object.split(":"); 
1569	        char[] cArray = new char[((String[])object).length]; 
1570	        for (n7 = 0; n7 < ((String[])object).length; ++n7) { 
1571	            cArray[n7] = (char)Integer.parseInt((String)object[n7]); 
1572	        } 
1573	        object = new String(cArray); 
1574	        this.mTextPaint.setARGB(n2, n4, n5, n6); 
1575	        this.mTextPaint.setTextSize(f3); 
1576	        canvas.drawText("", f + 85.0f, f2 - 0.0f, this.mTextPaint); 
1577	        canvas.drawText(this.Nation((String)object), f + 73.0f, f2 - 49.0f, this.mTextPaint); 
1578	    } 
1579	 
1580	    public void DrawOTH(Canvas canvas, int n2, float f, float f2) { 
1581	        canvas.drawBitmap(this.OTHER[n2], f, f2, this.p); 
1582	    } 
1583	 
1584	    public void DrawOTH2(Canvas canvas, int n2, float f, float f2) { 
1585	        canvas.drawBitmap(this.OTHER[n2], f, f2, this.p); 
1586	    } 
1587	 
1588	    public void DrawPlayerID(Canvas canvas, int n2, int n4, int n5, int n6, String stringArray, int n7, float f, float f2, float f3) { 
1589	        stringArray = stringArray.split(":"); 
1590	        char[] cArray = new char[stringArray.length]; 
1591	        for (n2 = 0; n2 < stringArray.length; ++n2) { 
1592	            cArray[n2] = (char)Integer.parseInt((String)stringArray[n2]); 
1593	        } 
1594	        this.mNamePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1595	        this.mNamePaint.setTextSize(f3); 
1596	        this.mNamePaint.setShadowLayer(8.0f, 1.5f, 1.5f, -16777216); 
1597	        canvas.drawText(n7 + "", f, f2, this.mNamePaint); 
1598	    } 
1599	 
1600	    public void DrawPlayerName(Canvas canvas, int n2, int n4, int n5, int n6, String object, float f, float f2, float f3) { 
1601	        object = object.split(":"); 
1602	        Object object2 = new char[((String[])object).length]; 
1603	        for (int j = 0; j < ((String[])object).length; ++j) { 
1604	            object2[j] = (char)Integer.parseInt((String)object[j]); 
1605	        } 
1606	        object2 = new String(object2); 
1607	        object = object2; 
1608	        if (object2.length() > 5) { 
1609	            object = object2.substring(0, 5); 
1610	        } 
1611	        this.mNamePaint.setARGB(n2, n4, n5, n6); 
1612	        this.mNamePaint.setTextSize(f3); 
1613	        canvas.drawText((String)object, f, f2, this.mNamePaint); 
1614	    } 
1615	 
1616	    public void DrawRect(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5, float f6) { 
1617	        this.mStrokePaint.setStrokeWidth(f); 
1618	        this.mStrokePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1619	        this.mStrokePaint.setAlpha(n2); 
1620	        canvas.drawRoundRect(f2, f3, f5, f6, 5.0f, 5.0f, this.mStrokePaint); 
1621	    } 
1622	 
1623	    public void DrawTeamID(Canvas canvas, int n2, int n4, int n5, int n6, int n7, float f, float f2, float f3) { 
1624	        this.mNamePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1625	        this.mNamePaint.setTextSize(f3); 
1626	        canvas.drawText(n7 + "", f, f2, this.mNamePaint); 
1627	    } 
1628	 
1629	    public void DrawText(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1630	        this.mTextPaint.setARGB(n2, n4, n5, n6); 
1631	        this.mTextPaint.setTextSize(f3); 
1632	        canvas.drawText(string2, f, f2, this.mTextPaint); 
1633	    } 
1634	 
1635	    public void DrawTextBold(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1636	        this.PaintTextBold.setARGB(n2, n4, n5, n6); 
1637	        this.PaintTextBold.setTextSize(f3); 
1638	        canvas.drawText(string2, f, f2, this.PaintTextBold); 
1639	    } 
1640	 
1641	    public void DrawTextBot(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1642	        this.mNamePaint.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1643	        this.mNamePaint.setAlpha(n2); 
1644	        canvas.drawText(string2, f, f2, this.mNamePaint); 
1645	    } 
1646	 
1647	    public void DrawTextMode(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1648	        this.mMDText.setARGB(n2, n4, n5, n6); 
1649	        this.mMDText.setTextSize(f3); 
1650	        canvas.drawText("" + MainActivity.modeselect, f, f2, this.mMDText); 
1651	    } 
1652	 
1653	    public void DrawTextMode2(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1654	        this.mFPSText.setARGB(n2, n4, n5, n6); 
1655	        this.mFPSText.setTextSize(f3); 
1656	        canvas.drawText("" + MainActivity.typelogin, f, f2, this.mFPSText); 
1657	    } 
1658	 
1659	    public void DrawTextName(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1660	        this.mFPSText.setARGB(n2, n4, n5, n6); 
1661	        this.mFPSText.setTextSize(f3); 
1662	        if (SystemClock.uptimeMillis() - this.mFPSTime > 1000L) { 
1663	            this.mFPSTime = SystemClock.uptimeMillis(); 
1664	            this.mFPS = this.mFPSCounter; 
1665	            this.mFPSCounter = 0.0f; 
1666	        } else { 
1667	            this.mFPSCounter += 1.0f; 
1668	        } 
1669	        canvas.drawText(string2 + this.mFPS, f, f2, this.mFPSText); 
1670	    } 
1671	 
1672	    public void DrawTexti(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1673	        this.mTextPainti.setARGB(n2, n4, n5, n6); 
1674	        this.mTextPainti.setTextSize(f3); 
1675	        canvas.drawText(string2, f, f2, this.mTextPainti); 
1676	    } 
1677	 
1678	    public void DrawTexture(Canvas canvas, int n2, int n4, int n5, int n6, String string2, float f, float f2, float f3) { 
1679	        this.mMDText.setColor(Color.rgb((int)n4, (int)n5, (int)n6)); 
1680	        this.mMDText.setAlpha(n2); 
1681	        this.mMDText.setTextSize(f3); 
1682	        canvas.drawText(string2, f, f2, this.mMDText); 
1683	    } 
1684	 
1685	    public void DrawTriangle(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5, float f6, float f7, float f8) { 
1686	        Path path = new Path(); 
1687	        path.moveTo(f, f2); 
1688	        path.lineTo(f3, f5); 
1689	        path.lineTo(f6, f7); 
1690	        path.close(); 
1691	        Paint paint = new Paint(); 
1692	        paint.setARGB(n2, n4, n5, n6); 
1693	        paint.setStyle(Paint.Style.STROKE); 
1694	        paint.setStrokeWidth(f8); 
1695	        canvas.drawPath(path, paint); 
1696	    } 
1697	 
1698	    public void DrawTriangleFilled(Canvas canvas, int n2, int n4, int n5, int n6, float f, float f2, float f3, float f5, float f6, float f7) { 
1699	        Path path = new Path(); 
1700	        path.moveTo(f, f2); 
1701	        path.lineTo(f3, f5); 
1702	        path.lineTo(f6, f7); 
1703	        path.close(); 
1704	        Paint paint = new Paint(); 
1705	        paint.setARGB(n2, n4, n5, n6); 
1706	        paint.setStyle(Paint.Style.FILL); 
1707	        canvas.drawPath(path, paint); 
1708	    } 
1709	 
1710	    public void DrawUserID(Canvas canvas, int n2, int n4, int n5, int n6, String object, float f, float f2, float f3) { 
1711	        object = object.split(":"); 
1712	        char[] cArray = new char[((String[])object).length]; 
1713	        for (int j = 0; j < ((String[])object).length; ++j) { 
1714	            cArray[j] = (char)Integer.parseInt((String)object[j]); 
1715	        } 
1716	        object = new String(cArray); 
1717	        this.mTextPaint.setARGB(n2, n4, n5, n6); 
1718	        this.mTextPaint.setTextSize(f3); 
1719	        this.mTextPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1720	        canvas.drawText("ID: " + (String)object, f, f2, this.mTextPaint); 
1721	    } 
1722	 
  
1723	    public void DrawVehicles(Canvas canvas, String string2, float f, float f2, float f3, float f5, float f6, float f7) { 
1724	        block44: { 
1725	            String string3 = this.VehicleName(string2); 
1726	            if (string3 == null || string3.equals((Object)"")) break block44; 
1727	            this.mVehiclesPaint.setTextSize(f7); 
1728	            string2 = string3 + " (" + (int)f + ")"; 
1729	            this.mVehiclesPaint.setStyle(Paint.Style.STROKE); 
1730	            this.mVehiclesPaint.setStrokeWidth(3.0f); 
1731	            this.mVehiclesPaint.setColor(-16777216); 
1732	            if (string3.equals((Object)"Buggy")) { 
1733	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1734	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1735	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1736	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1737	                canvas.drawBitmap(this.buggyBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1738	            } else if (string3.equals((Object)"UAZ")) { 
1739	                canvas.drawBitmap(this.uazBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1740	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1741	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1742	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1743	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1744	            } else if (string3.equals((Object)"Trike")) { 
1745	                canvas.drawBitmap(this.trikeBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1746	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1747	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1748	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1749	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1750	            } else if (string3.equals((Object)"Bike")) { 
1751	                canvas.drawBitmap(this.bikeBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1752	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1753	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1754	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1755	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1756	            } else if (string3.equals((Object)"Dacia")) { 
1757	                canvas.drawBitmap(this.daciaBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1758	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1759	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1760	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1761	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1762	            } else if (string3.equals((Object)"Jet")) { 
1763	                canvas.drawBitmap(this.jetBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1764	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1765	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1766	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1767	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1768	            } else if (string3.equals((Object)"Boat")) { 
1769	                canvas.drawBitmap(this.boatBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1770	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1771	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1772	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1773	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1774	            } else if (string3.equals((Object)"Bus")) { 
1775	                canvas.drawBitmap(this.busBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1776	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1777	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1778	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1779	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1780	            } else if (string3.equals((Object)"Mirado")) { 
1781	                canvas.drawBitmap(this.miradoBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1782	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1783	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1784	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1785	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1786	            } else if (string3.equals((Object)"Scooter")) { 
1787	                canvas.drawBitmap(this.scooterBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1788	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1789	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1790	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1791	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1792	            } else if (string3.equals((Object)"Rony")) { 
1793	                canvas.drawBitmap(this.ronyBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1794	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1795	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1796	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1797	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1798	            } else if (string3.equals((Object)"Snowbike")) { 
1799	                canvas.drawBitmap(this.snowbikeBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1800	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1801	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1802	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1803	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1804	            } else if (string3.equals((Object)"Snowmobile")) { 
1805	                canvas.drawBitmap(this.snowmobileBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1806	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1807	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1808	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1809	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1810	            } else if (string3.equals((Object)"Tempo")) { 
1811	                canvas.drawBitmap(this.tempoBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1812	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1813	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1814	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1815	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1816	            } else if (string3.equals((Object)"Truck")) { 
1817	                canvas.drawBitmap(this.truckBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1818	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1819	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1820	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1821	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1822	            } else if (string3.equals((Object)"BRDM")) { 
1823	                canvas.drawBitmap(this.brdmBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1824	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1825	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1826	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1827	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1828	            } else if (string3.equals((Object)"Monster")) { 
1829	                canvas.drawBitmap(this.monsterBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1830	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1831	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1832	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1833	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1834	            } else if (string3.equals((Object)"CoupeRB")) { 
1835	                canvas.drawBitmap(this.coupeBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1836	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1837	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1838	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1839	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1840	            } else if (string3.equals((Object)"Motor Glider")) { 
1841	                canvas.drawBitmap(this.gliderBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1842	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1843	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1844	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1845	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1846	            } else if (string3.equals((Object)"UTV")) { 
1847	                canvas.drawBitmap(this.utvBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1848	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1849	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1850	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1851	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1852	            } else if (string3.equals((Object)"ATV1")) { 
1853	                canvas.drawBitmap(this.atvBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1854	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1855	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1856	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1857	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1858	            } else if (string3.equals((Object)"Reindeer")) { 
1859	                canvas.drawBitmap(this.kudaBitmap, f5 - 25.0f, f6 - this.mScaleY * 60.0f, this.mPaintBitmap1); 
1860	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1861	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1862	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1863	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1864	            } else { 
1865	                canvas.drawBitmap(this.vehicleBitmap, f5 - 25.0f, f6 - this.mScaleY * 50.0f, this.mPaintBitmap1); 
1866	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1867	                this.mVehiclesPaint.setStyle(Paint.Style.FILL); 
1868	                this.mVehiclesPaint.setColor(Color.parseColor((String)"#FFFFFF")); 
1869	                canvas.drawText(string2, f5, f6 - 0.0f, this.mVehiclesPaint); 
1870	            } 
1871	            this.handleFuelHealthText(canvas, f5, f6 - 10.0f, f3, f2, f7); 
1872	        } 
1873	    } 
1874	 
1875	    public void DrawWeapon(Canvas canvas, int n2, int n4, int n5, int n6, int n7, int n10, int n11, float f, float f2, float f3) { 
1876	        this.mNamePaint.setARGB(n2, n4, n5, n6); 
1877	        this.mNamePaint.setTextSize(f3); 
1878	        String string2 = this.getWeapon(n7); 
1879	        if (string2 != null) { 
1880	            if (string2 != "Sickle" && string2 != "Machete" && string2 != "Crowbar" && string2 != "Pan") { 
1881	                canvas.drawText(string2 + "(" + n10 + "/" + n11 + ")", f, f2, this.mNamePaint); 
1882	            } else { 
1883	                canvas.drawText(string2, f, f2, this.mNamePaint); 
1884	            } 
1885	        } 
1886	    } 
1887	 
1888	    public void DrawWeaponIcon(Canvas canvas, int n2, float f, float f2) { 
1889	        Bitmap bitmap = (Bitmap)bitmapCache.get((Object)n2); 
1890	        if (bitmap != null) { 
1891	            canvas.drawBitmap(bitmap, f, f2 - 43.0f, null); 
1892	        } else { 
1893	            int n4 = this.getWeaponIcon(n2); 
1894	            if (n4 != 0) { 
1895	                this.mScaleX = (float)this.getWidth() / 2340.0f; 
1896	                this.mScaleY = (float)this.getHeight() / 1080.0f; 
1897	                bitmap = Bitmap.createScaledBitmap((Bitmap)BitmapFactory.decodeResource((Resources)this.getResources(), (int)n4), (int)((int)(this.mScaleX * 75.0f)), (int)((int)(this.mScaleY * 40.0f)), (boolean)false); 
1898	                bitmapCache.put((Object)n2, (Object)bitmap); 
1899	                canvas.drawBitmap(bitmap, f, f2 - 43.0f, null); 
1900	            } 
1901	        } 
1902	    } 
1903	 
1904	    public void InitializePaints() { 
1905	        Bitmap[] bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231071); 
1906	        float f = this.mScaleY; 
1907	        this.botBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
1908	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231280); 
1909	        f = this.mScaleY; 
1910	        this.kudaBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
1911	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231178); 
1912	        f = this.mScaleY; 
1913	        this.lootBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
1914	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131230844); 
1915	        f = this.mScaleY; 
1916	        this.airdropBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
1917	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231333); 
1918	        f = this.mScaleY; 
1919	        this.vehicleBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
1920	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231310); 
1921	        f = this.mScaleY; 
1922	        this.buggyBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1923	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231311); 
1924	        f = this.mScaleY; 
1925	        this.uazBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1926	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231321); 
1927	        f = this.mScaleY; 
1928	        this.trikeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1929	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231326); 
1930	        f = this.mScaleY; 
1931	        this.bikeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1932	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231327); 
1933	        f = this.mScaleY; 
1934	        this.daciaBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1935	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231328); 
1936	        f = this.mScaleY; 
1937	        this.jetBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1938	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231329); 
1939	        f = this.mScaleY; 
1940	        this.boatBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1941	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231330); 
1942	        f = this.mScaleY; 
1943	        this.busBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1944	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231331); 
1945	        f = this.mScaleY; 
1946	        this.miradoBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1947	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231332); 
1948	        f = this.mScaleY; 
1949	        this.scooterBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1950	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231312); 
1951	        f = this.mScaleY; 
1952	        this.ronyBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1953	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231313); 
1954	        f = this.mScaleY; 
1955	        this.snowbikeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1956	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231314); 
1957	        f = this.mScaleY; 
1958	        this.snowmobileBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1959	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231315); 
1960	        f = this.mScaleY; 
1961	        this.tempoBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1962	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231316); 
1963	        f = this.mScaleY; 
1964	        this.monsterBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1965	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231317); 
1966	        f = this.mScaleY; 
1967	        this.brdmBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1968	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231319); 
1969	        f = this.mScaleY; 
1970	        this.atvBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1971	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231320); 
1972	        f = this.mScaleY; 
1973	        this.truckBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1974	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231322); 
1975	        f = this.mScaleY; 
1976	        this.gliderBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1977	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231323); 
1978	        f = this.mScaleY; 
1979	        this.utvBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1980	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231324); 
1981	        f = this.mScaleY; 
1982	        this.coupeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1983	        bitmapArray = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231325); 
1984	        f = this.mScaleY; 
1985	        this.airplaneBitmap = Bitmap.createScaledBitmap((Bitmap)bitmapArray, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
1986	        bitmapArray = new Paint(); 
1987	        this.mPaintBitmap = bitmapArray; 
1988	        bitmapArray.setAlpha(225); 
1989	        bitmapArray = new Paint(); 
1990	        this.mPaintBitmap1 = bitmapArray; 
1991	        bitmapArray.setAlpha(255); 
1992	        bitmapArray = new Paint(); 
1993	        this.mVehiclesPaint = bitmapArray; 
1994	        bitmapArray.setAntiAlias(true); 
1995	        this.mVehiclesPaint.setTextAlign(Paint.Align.CENTER); 
1996	        this.mVehiclesPaint.setTypeface(this.getResources().getFont(2131296262)); 
1997	        bitmapArray = new Paint(); 
1998	        this.mItemsPaint = bitmapArray; 
1999	        bitmapArray.setAntiAlias(true); 
2000	        this.mItemsPaint.setTextAlign(Paint.Align.CENTER); 
2001	        this.mItemsPaint.setTypeface(this.getResources().getFont(2131296262)); 
2002	        bitmapArray = new Paint(); 
2003	        this.mStrokePaint = bitmapArray; 
2004	        bitmapArray.setStyle(Paint.Style.STROKE); 
2005	        this.mStrokePaint.setAntiAlias(true); 
2006	        this.mStrokePaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2007	        this.mStrokePaint.setTextAlign(Paint.Align.CENTER); 
2008	        bitmapArray = new Paint(); 
2009	        this.mFilledPaint = bitmapArray; 
2010	        bitmapArray.setStyle(Paint.Style.FILL); 
2011	        this.mFilledPaint.setAntiAlias(true); 
2012	        this.mFilledPaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2013	        this.mFilledPaint.setStrokeWidth(3.0f); 
2014	        bitmapArray = new Paint(); 
2015	        this.mFillPaint = bitmapArray; 
2016	        bitmapArray.setStyle(Paint.Style.FILL); 
2017	        this.mFillPaint.setAntiAlias(true); 
2018	        this.mFillPaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2019	        bitmapArray = new Paint(); 
2020	        this.mTextPaint = bitmapArray; 
2021	        bitmapArray.setStyle(Paint.Style.FILL); 
2022	        this.mTextPaint.setAntiAlias(true); 
2023	        this.mTextPaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2024	        this.mTextPaint.setTextAlign(Paint.Align.CENTER); 
2025	        this.mTextPaint.setShadowLayer(3.0f, 2.0f, 2.0f, -16777216); 
2026	        this.mTextPaint.setStrokeWidth(1.1f); 
2027	        bitmapArray = new Paint(); 
2028	        this.mTextPainti = bitmapArray; 
2029	        bitmapArray.setStyle(Paint.Style.FILL); 
2030	        this.mTextPainti.setAntiAlias(true); 
2031	        this.mTextPainti.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2032	        this.mTextPainti.setTextAlign(Paint.Align.CENTER); 
2033	        bitmapArray = new Paint(); 
2034	        this.mLootBoxPaint = bitmapArray; 
2035	        bitmapArray.setAntiAlias(true); 
2036	        this.mLootBoxPaint.setTextAlign(Paint.Align.LEFT); 
2037	        this.mLootBoxPaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2038	        this.mLootBoxPaint.setTypeface(this.getResources().getFont(2131296262)); 
2039	        this.mLootBoxPaint.setDither(true); 
2040	        bitmapArray = new Paint(); 
2041	        this.mTexturePaint = bitmapArray; 
2042	        bitmapArray.setStyle(Paint.Style.FILL); 
2043	        this.mTexturePaint.setAntiAlias(true); 
2044	        this.mTexturePaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2045	        this.mStrokePaint.setStrokeWidth(0.5f); 
2046	        this.mTexturePaint.setTextAlign(Paint.Align.CENTER); 
2047	        this.mTexturePaint.setShadowLayer(10.0f, 1.0f, 1.0f, Color.rgb((int)1, (int)1, (int)1)); 
2048	        this.mTexturePaint.setTypeface(this.getResources().getFont(2131296258)); 
2049	        bitmapArray = new Paint(); 
2050	        this.mNamePaint = bitmapArray; 
2051	        bitmapArray.setStyle(Paint.Style.FILL); 
2052	        this.mNamePaint.setAntiAlias(true); 
2053	        this.mNamePaint.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2054	        this.mNamePaint.setTextAlign(Paint.Align.CENTER); 
2055	        this.mNamePaint.setTextAlign(Paint.Align.CENTER); 
2056	        this.mNamePaint.setTypeface(this.getResources().getFont(2131296262)); 
2057	        bitmapArray = new Paint(); 
2058	        this.mFPSText = bitmapArray; 
2059	        bitmapArray.setStyle(Paint.Style.FILL_AND_STROKE); 
2060	        this.mFPSText.setAntiAlias(true); 
2061	        this.mFPSText.setColor(Color.rgb((int)255, (int)255, (int)0)); 
2062	        this.mStrokePaint.setStrokeWidth(0.5f); 
2063	        this.mFPSText.setTextAlign(Paint.Align.CENTER); 
2064	        this.mFPSText.setShadowLayer(10.0f, 1.0f, 1.0f, Color.rgb((int)1, (int)1, (int)1)); 
2065	        this.mFPSText.setTypeface(this.getResources().getFont(2131296262)); 
2066	        bitmapArray = new Paint(); 
2067	        this.mMDText = bitmapArray; 
2068	        bitmapArray.setStyle(Paint.Style.FILL_AND_STROKE); 
2069	        this.mMDText.setAntiAlias(true); 
2070	        this.mMDText.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2071	        this.mMDText.setStrokeWidth(0.5f); 
2072	        this.mMDText.setTextAlign(Paint.Align.CENTER); 
2073	        this.mMDText.setShadowLayer(10.0f, 1.0f, 1.0f, Color.rgb((int)1, (int)1, (int)1)); 
2074	        bitmapArray = new Paint(); 
2075	        this.PaintTextBold = bitmapArray; 
2076	        bitmapArray.setStyle(Paint.Style.FILL_AND_STROKE); 
2077	        this.PaintTextBold.setAntiAlias(true); 
2078	        this.PaintTextBold.setColor(Color.rgb((int)0, (int)0, (int)0)); 
2079	        this.PaintTextBold.setTextAlign(Paint.Align.CENTER); 
2080	        this.PaintTextBold.setStrokeWidth(0.2f); 
2081	        this.PaintTextBold.setShadowLayer(10.0f, 1.0f, 1.0f, -16777216); 
2082	        this.PaintTextBold.setTypeface(this.getResources().getFont(2131296262)); 
2083	        this.p2 = new Paint(); 
2084	        int n2 = this.OTHER.length; 
2085	        for (int j = 0; j < n2; ++j) { 
2086	            this.OTHER[j] = BitmapFactory.decodeResource((Resources)this.getResources(), (int)OTH_NAME[j]); 
2087	            if (j == 4) { 
2088	                bitmapArray = this.OTHER; 
2089	                bitmapArray[j] = ESPView.scale(bitmapArray[j], 400, 35); 
2090	                continue; 
2091	            } 
2092	            if (j == 5) { 
2093	                bitmapArray = this.OTHER; 
2094	                bitmapArray[j] = ESPView.scale(bitmapArray[j], 22, 22); 
2095	                continue; 
2096	            } 
2097	            bitmapArray = this.OTHER; 
2098	            bitmapArray[j] = ESPView.scale(bitmapArray[j], 80, 80); 
2099	        } 
2100	    } 
2101	 
2102	    protected void onDraw(Canvas canvas) { 
2103	        int n2 = this.getDisplay().getRotation(); 
2104	        if (canvas != null && n2 != 0 && n2 != 2) { 
2105	            this.ClearCanvas(canvas); 
2106	            Overlay.DrawOn(this, canvas); 
2107	            return; 
2108	        } 
2109	    } 
2110	 
2111	    protected void onLayout(boolean bl, int n2, int n4, int n5, int n6) { 
2112	        super.onLayout(bl, n2, n4, n5, n6); 
2113	        this.mScaleX = (float)this.getWidth() / 2340.0f; 
2114	        this.mScaleY = (float)this.getHeight() / 1080.0f; 
2115	        Bitmap bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231071); 
2116	        float f = this.mScaleY; 
2117	        this.botBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
2118	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231280); 
2119	        f = this.mScaleY; 
2120	        this.kudaBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
2121	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231178); 
2122	        f = this.mScaleY; 
2123	        this.lootBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
2124	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131230844); 
2125	        f = this.mScaleY; 
2126	        this.airdropBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
2127	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231333); 
2128	        f = this.mScaleY; 
2129	        this.vehicleBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 50.0f)), (int)((int)(f * 50.0f)), (boolean)false); 
2130	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231310); 
2131	        f = this.mScaleY; 
2132	        this.buggyBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2133	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231311); 
2134	        f = this.mScaleY; 
2135	        this.uazBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2136	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231321); 
2137	        f = this.mScaleY; 
2138	        this.trikeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2139	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231326); 
2140	        f = this.mScaleY; 
2141	        this.bikeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2142	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231327); 
2143	        f = this.mScaleY; 
2144	        this.daciaBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2145	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231328); 
2146	        f = this.mScaleY; 
2147	        this.jetBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2148	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231329); 
2149	        f = this.mScaleY; 
2150	        this.boatBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2151	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231330); 
2152	        f = this.mScaleY; 
2153	        this.busBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2154	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231331); 
2155	        f = this.mScaleY; 
2156	        this.miradoBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2157	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231332); 
2158	        f = this.mScaleY; 
2159	        this.scooterBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2160	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231312); 
2161	        f = this.mScaleY; 
2162	        this.ronyBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2163	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231313); 
2164	        f = this.mScaleY; 
2165	        this.snowbikeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2166	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231314); 
2167	        f = this.mScaleY; 
2168	        this.snowmobileBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2169	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231315); 
2170	        f = this.mScaleY; 
2171	        this.tempoBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2172	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231316); 
2173	        f = this.mScaleY; 
2174	        this.monsterBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2175	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231317); 
2176	        f = this.mScaleY; 
2177	        this.brdmBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2178	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231319); 
2179	        f = this.mScaleY; 
2180	        this.atvBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2181	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231320); 
2182	        f = this.mScaleY; 
2183	        this.truckBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2184	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231322); 
2185	        f = this.mScaleY; 
2186	        this.gliderBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2187	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231323); 
2188	        f = this.mScaleY; 
2189	        this.utvBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2190	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231324); 
2191	        f = this.mScaleY; 
2192	        this.coupeBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2193	        bitmap = BitmapFactory.decodeResource((Resources)this.getResources(), (int)2131231325); 
2194	        f = this.mScaleY; 
2195	        this.airplaneBitmap = Bitmap.createScaledBitmap((Bitmap)bitmap, (int)((int)(f * 40.0f)), (int)((int)(f * 40.0f)), (boolean)false); 
2196	    } 
2197	 
2198	    public void run() { 
2199	        while (this.mThread.isAlive() && !this.mThread.isInterrupted()) { 
2200	            try { 
2201	                long l = System.currentTimeMillis(); 
2202	                this.postInvalidate(); 
2203	                long l3 = System.currentTimeMillis(); 
2204	                Thread.sleep((long)Math.max((long)Math.min((long)0L, (long)(sleepTime - (l3 - l))), (long)sleepTime)); 
2205	            } 
2206	            catch (Exception exception) { 
2207	                Thread.currentThread().interrupt(); 
2208	                return; b