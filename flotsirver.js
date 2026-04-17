1	/* 
2	 * Decompiled with CFR 0.152. 
3	 *  
4	 * Could not load the following classes: 
5	 *  android.app.Service 
6	 *  android.content.Context 
7	 *  android.content.Intent 
8	 *  android.content.SharedPreferences$Editor 
9	 *  android.content.res.Configuration 
10	 *  android.os.Build$VERSION 
11	 *  android.os.IBinder 
12	 *  android.os.PowerManager$WakeLock 
13	 *  android.view.LayoutInflater 
14	 *  android.view.MotionEvent 
15	 *  android.view.View 
16	 *  android.view.View$OnClickListener 
17	 *  android.view.View$OnTouchListener 
18	 *  android.view.ViewGroup$LayoutParams 
19	 *  android.view.WindowManager 
20	 *  android.view.WindowManager$LayoutParams 
21	 *  android.widget.CheckBox 
22	 *  android.widget.CompoundButton 
23	 *  android.widget.CompoundButton$OnCheckedChangeListener 
24	 *  android.widget.ImageView 
25	 *  android.widget.LinearLayout 
26	 *  android.widget.RadioButton 
27	 *  android.widget.RadioGroup 
28	 *  android.widget.RadioGroup$OnCheckedChangeListener 
29	 *  android.widget.RelativeLayout 
30	 *  android.widget.SeekBar 
31	 *  android.widget.SeekBar$OnSeekBarChangeListener 
32	 *  android.widget.Switch 
33	 *  android.widget.TextView 
34	 *  android.widget.ToggleButton 
35	 *  java.lang.CharSequence 
36	 *  java.lang.Exception 
37	 *  java.lang.Integer 
38	 *  java.lang.Object 
39	 *  java.lang.Runnable 
40	 *  java.lang.Runtime 
41	 *  java.lang.String 
42	 *  java.lang.StringBuilder 
43	 *  java.lang.System 
44	 *  java.lang.Thread 
45	 *  java.lang.UnsatisfiedLinkError 
46	 *  java.util.Locale 
47	 *  pubgm.loader.activity.LoginActivity 
48	 *  pubgm.loader.activity.MainActivity 
49	 */ 
50	package pubgm.loader.floating; 
51	 
52	import android.app.Service; 
53	import android.content.Context; 
54	import android.content.Intent; 
55	import android.content.SharedPreferences; 
56	import android.content.res.Configuration; 
57	import android.os.Build; 
58	import android.os.IBinder; 
59	import android.os.PowerManager; 
60	import android.view.LayoutInflater; 
61	import android.view.MotionEvent; 
62	import android.view.View; 
63	import android.view.ViewGroup; 
64	import android.view.WindowManager; 
65	import android.widget.CheckBox; 
66	import android.widget.CompoundButton; 
67	import android.widget.ImageView; 
68	import android.widget.LinearLayout; 
69	import android.widget.RadioButton; 
70	import android.widget.RadioGroup; 
71	import android.widget.RelativeLayout; 
72	import android.widget.SeekBar; 
73	import android.widget.Switch; 
74	import android.widget.TextView; 
75	import android.widget.ToggleButton; 
76	import com.topjohnwu.superuser.Shell; 
77	import io.michaelrocks.paranoid.Deobfuscator$app$Debug; 
78	import java.util.Locale; 
79	import pubgm.loader.activity.LoginActivity; 
80	import pubgm.loader.activity.MainActivity; 
81	import pubgm.loader.floating.ESPView; 
82	import pubgm.loader.floating.FloatRei; 
83	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda0; 
84	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda1; 
85	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda2; 
86	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda3; 
87	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda4; 
88	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda5; 
89	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda6; 
90	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda7; 
91	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda8; 
92	import pubgm.loader.floating.FloatService$$ExternalSyntheticLambda9; 
93	import pubgm.loader.floating.Overlay; 
94	import pubgm.loader.floating.ToggleAim; 
95	import pubgm.loader.floating.ToggleBullet; 
96	import pubgm.loader.floating.ToggleSimulation; 
97	import pubgm.loader.utils.FLog; 
98	 
99	public class FloatService 
100	extends Service { 
101	    public static String typelogin; 
102	    Context ctx; 
103	    private RelativeLayout layout_icon_control_view; 
104	    private LinearLayout layout_main_view; 
105	    private PowerManager.WakeLock mWakeLock; 
106	    private View mainView; 
107	    private WindowManager.LayoutParams paramsMainView; 
108	    private WindowManager windowManagerMainView; 
109	 
110	    static { 
111	        try { 
112	            System.loadLibrary((String)Deobfuscator$app$Debug.getString(-27531464214924L)); 
113	        } 
114	        catch (UnsatisfiedLinkError unsatisfiedLinkError) { 
115	            FLog.error(unsatisfiedLinkError.getMessage()); 
116	        } 
117	    } 
118	 
119	    private void DrawESP() { 
120	        if (Shell.rootAccess()) { 
121	            FLog.info(Deobfuscator$app$Debug.getString(-26951643629964L)); 
122	            MainActivity.socket = Deobfuscator$app$Debug.getString(-27007478204812L) + MainActivity.daemonPath; 
123	            this.startService(new Intent((Context)this, Overlay.class)); 
124	        } else { 
125	            FLog.info(Deobfuscator$app$Debug.getString(-27037542975884L)); 
126	            MainActivity.socket = MainActivity.daemonPath; 
127	            this.startService(new Intent((Context)MainActivity.get(), Overlay.class)); 
128	        } 
129	    } 
130	 
131	    private void ExecuteElf(String string2) { 
132	        try { 
133	            Runtime.getRuntime().exec(string2, null, null); 
134	        } 
135	        catch (Exception exception) { 
136	            exception.printStackTrace(); 
137	        } 
138	    } 
139	 
140	    private void InitShowMainView() { 
141	        WindowManager windowManager; 
142	        this.mainView = LayoutInflater.from((Context)this).inflate(2131558468, null); 
143	        this.paramsMainView = this.getparams(); 
144	        this.windowManagerMainView = windowManager = (WindowManager)this.getSystemService(Deobfuscator$app$Debug.getString(-24318828677516L)); 
145	        windowManager.addView(this.mainView, (ViewGroup.LayoutParams)this.paramsMainView); 
146	        this.layout_icon_control_view = (RelativeLayout)this.mainView.findViewById(2131362322); 
147	        this.layout_main_view = (LinearLayout)this.mainView.findViewById(2131362323); 
148	        this.mainView.findViewById(2131362320).setOnClickListener(new View.OnClickListener(this){ 
149	            final FloatService this$0; 
150	            { 
151	                this.this$0 = floatService; 
152	            } 
153	 
154	            public void onClick(View view) { 
155	                this.this$0.layout_main_view.setVisibility(8); 
156	                this.this$0.layout_icon_control_view.setVisibility(0); 
157	            } 
158	        }); 
159	        ((LinearLayout)this.mainView.findViewById(2131362324)).setOnTouchListener(this.onTouchListener()); 
160	        this.initDesign(); 
161	        this.visual(this.mainView); 
162	        this.aimbot(this.mainView); 
163	        this.items(this.mainView); 
164	        this.memory(this.mainView); 
165	    } 
166	 
167	    private void StartAimBulletFloat() { 
168	        this.startService(new Intent(this.getApplicationContext(), ToggleBullet.class)); 
169	    } 
170	 
171	    private void StartAimFloat() { 
172	        this.startService(new Intent(this.getApplicationContext(), ToggleAim.class)); 
173	    } 
174	 
175	    private void StartAimTouch() { 
176	        this.startService(new Intent(this.getApplicationContext(), ToggleSimulation.class)); 
177	    } 
178	 
179	    private void StopAimBulletFloat() { 
180	        this.stopService(new Intent(this.getApplicationContext(), ToggleBullet.class)); 
181	    } 
182	 
183	    private void StopAimFloat() { 
184	        this.stopService(new Intent(this.getApplicationContext(), ToggleAim.class)); 
185	    } 
186	 
187	    private void StopAimTouch() { 
188	        this.stopService(new Intent(this.getApplicationContext(), ToggleSimulation.class)); 
189	    } 
190	 
191	    private void StopESP() { 
192	        this.stopService(new Intent((Context)this, Overlay.class)); 
193	    } 
194	 
195	    private void aimbot(View view) { 
196	        TextView textView = (TextView)view.findViewById(2131362700); 
197	        TextView textView2 = (TextView)view.findViewById(2131361999); 
198	        LinearLayout linearLayout = (LinearLayout)view.findViewById(2131362001); 
199	        LinearLayout linearLayout2 = (LinearLayout)view.findViewById(2131362550); 
200	        LinearLayout linearLayout3 = (LinearLayout)view.findViewById(2131362613); 
201	        RadioButton radioButton = (RadioButton)view.findViewById(2131362053); 
202	        RadioButton radioButton2 = (RadioButton)view.findViewById(2131361994); 
203	        LinearLayout linearLayout4 = (LinearLayout)view.findViewById(2131362725); 
204	        LinearLayout linearLayout5 = (LinearLayout)view.findViewById(2131362727); 
205	        LinearLayout linearLayout6 = (LinearLayout)view.findViewById(2131362490); 
206	        LinearLayout linearLayout7 = (LinearLayout)view.findViewById(2131362491); 
207	        if (!MainActivity.modestatus) { 
208	            radioButton2.setVisibility(8); 
209	            radioButton.setVisibility(0); 
210	        } else { 
211	            radioButton2.setVisibility(0); 
212	            radioButton.setVisibility(0); 
213	        } 
214	        if (LoginActivity.Kooontoool) { 
215	            typelogin = Deobfuscator$app$Debug.getString(-27419795065228L); 
216	            textView2.setVisibility(8); 
217	            linearLayout.setVisibility(0); 
218	            linearLayout2.setAlpha(1.0f); 
219	            linearLayout3.setAlpha(1.0f); 
220	            radioButton.setEnabled(true); 
221	            radioButton2.setEnabled(true); 
222	            radioButton.setAlpha(1.0f); 
223	            radioButton2.setAlpha(1.0f); 
224	            linearLayout4.setAlpha(1.0f); 
225	            linearLayout5.setAlpha(1.0f); 
226	            linearLayout6.setAlpha(1.0f); 
227	            linearLayout7.setAlpha(1.0f); 
228	        } else { 
229	            typelogin = Deobfuscator$app$Debug.getString(-27454154803596L); 
230	            textView2.setVisibility(0); 
231	            linearLayout.setVisibility(8); 
232	            linearLayout2.setAlpha(0.0f); 
233	            linearLayout3.setAlpha(0.0f); 
234	            radioButton.setEnabled(false); 
235	            radioButton2.setEnabled(false); 
236	            radioButton.setAlpha(0.0f); 
237	            radioButton2.setAlpha(0.0f); 
238	            linearLayout4.setAlpha(0.0f); 
239	            linearLayout5.setAlpha(0.0f); 
240	            linearLayout6.setAlpha(0.0f); 
241	            linearLayout7.setAlpha(0.0f); 
242	        } 
243	        ((RadioGroup)view.findViewById(2131362220)).setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener(){ 
244	            final FloatService this$0; 
245	            final LinearLayout val$menurotation; 
246	            final TextView val$menutextaimtouch; 
247	            final LinearLayout val$posXmenu; 
248	            final LinearLayout val$posYmenu; 
249	            final LinearLayout val$smoothnessmenu; 
250	            final LinearLayout val$touchLocationmenu; 
251	            final LinearLayout val$touchsizemenu; 
252	            { 
253	                this.this$0 = floatService; 
254	                this.val$menutextaimtouch = textView; 
255	                this.val$menurotation = linearLayout; 
256	                this.val$smoothnessmenu = linearLayout2; 
257	                this.val$touchLocationmenu = linearLayout3; 
258	                this.val$touchsizemenu = linearLayout4; 
259	                this.val$posXmenu = linearLayout5; 
260	                this.val$posYmenu = linearLayout6; 
261	            } 
262	 
263	            public void onCheckedChanged(RadioGroup radioGroup, int n2) { 
264	                switch (n2) { 
265	                    default: { 
266	                        break; 
267	                    } 
268	                    case 2131362133: { 
269	                        this.this$0.StopAimBulletFloat(); 
270	                        this.this$0.StopAimFloat(); 
271	                        this.this$0.StopAimTouch(); 
272	                        this.val$menutextaimtouch.setVisibility(8); 
273	                        this.val$menurotation.setVisibility(8); 
274	                        this.val$smoothnessmenu.setVisibility(8); 
275	                        break; 
276	                    } 
277	                    case 2131362053: { 
278	                        this.this$0.StartAimBulletFloat(); 
279	                        this.this$0.StopAimFloat(); 
280	                        this.this$0.StopAimTouch(); 
281	                        this.val$menutextaimtouch.setVisibility(8); 
282	                        this.val$menurotation.setVisibility(8); 
283	                        this.val$smoothnessmenu.setVisibility(8); 
284	                        this.val$touchLocationmenu.setVisibility(8); 
285	                        this.val$touchsizemenu.setVisibility(8); 
286	                        this.val$posXmenu.setVisibility(8); 
287	                        this.val$posYmenu.setVisibility(8); 
288	                        break; 
289	                    } 
290	                    case 2131361994: { 
291	                        this.this$0.StartAimFloat(); 
292	                        this.this$0.StopAimBulletFloat(); 
293	                        this.this$0.StopAimTouch(); 
294	                        this.val$menutextaimtouch.setVisibility(8); 
295	                        this.val$menurotation.setVisibility(8); 
296	                        this.val$smoothnessmenu.setVisibility(8); 
297	                        this.val$touchLocationmenu.setVisibility(8); 
298	                        this.val$touchsizemenu.setVisibility(8); 
299	                        this.val$posXmenu.setVisibility(8); 
300	                        this.val$posYmenu.setVisibility(8); 
301	                    } 
302	                } 
303	            } 
304	        }); 
305	        this.setaim((Switch)view.findViewById(2131361998), 3); 
306	        this.setaim((Switch)view.findViewById(2131361997), 4); 
307	        this.setaim((Switch)view.findViewById(2131362551), 5); 
308	        this.setaim((Switch)view.findViewById(2131362724), 6); 
309	        linearLayout3 = (SeekBar)view.findViewById(2131362520); 
310	        this.setupSeekBar((SeekBar)linearLayout3, (TextView)view.findViewById(2131362521), this.getrangeAim(), new Runnable(){ 
311	            final FloatService this$0; 
312	            final SeekBar val$rangeSeekBar; 
313	            { 
314	                this.this$0 = floatService; 
315	                this.val$rangeSeekBar = seekBar; 
316	            } 
317	 
318	            public void run() { 
319	                this.this$0.Range(this.val$rangeSeekBar.getProgress()); 
320	                this.this$0.getrangeAim(this.val$rangeSeekBar.getProgress()); 
321	            } 
322	        }); 
323	        linearLayout3 = (SeekBar)view.findViewById(2131362135); 
324	        this.setupSeekBar((SeekBar)linearLayout3, (TextView)view.findViewById(2131362136), this.getDistances(), new Runnable(){ 
325	            final FloatService this$0; 
326	            final SeekBar val$distancesSeekBar; 
327	            { 
328	                this.this$0 = floatService; 
329	                this.val$distancesSeekBar = seekBar; 
330	            } 
331	 
332	            public void run() { 
333	                this.this$0.distances(this.val$distancesSeekBar.getProgress()); 
334	                this.this$0.setDistances(this.val$distancesSeekBar.getProgress()); 
335	            } 
336	        }); 
337	        linearLayout3 = (SeekBar)view.findViewById(2131361908); 
338	        this.setupSeekBar((SeekBar)linearLayout3, (TextView)view.findViewById(2131362614), this.getSmoothness(), new Runnable(){ 
339	            final FloatService this$0; 
340	            final SeekBar val$SmoothSize; 
341	            { 
342	                this.this$0 = floatService; 
343	                this.val$SmoothSize = seekBar; 
344	            } 
345	 
346	            public void run() { 
347	                this.this$0.Smoothness(this.val$SmoothSize.getProgress()); 
348	                this.this$0.setSmoothness(this.val$SmoothSize.getProgress()); 
349	            } 
350	        }); 
351	        linearLayout3 = (SeekBar)this.mainView.findViewById(2131362726); 
352	        this.setupSeekBar((SeekBar)linearLayout3, (TextView)this.mainView.findViewById(2131362728), this.getTouchSize(), new Runnable(){ 
353	            final FloatService this$0; 
354	            final SeekBar val$touchsize; 
355	            { 
356	                this.this$0 = floatService; 
357	                this.val$touchsize = seekBar; 
358	            } 
359	 
360	            public void run() { 
361	                this.this$0.TouchSize(this.val$touchsize.getProgress()); 
362	                this.this$0.setTouchSize(this.val$touchsize.getProgress()); 
363	            } 
364	        }); 
365	        linearLayout3 = (SeekBar)this.mainView.findViewById(2131362719); 
366	        this.setupSeekBar((SeekBar)linearLayout3, (TextView)this.mainView.findViewById(2131362720), this.getTouchPosX(), new Runnable(){ 
367	            final FloatService this$0; 
368	            final SeekBar val$touchPosX; 
369	            { 
370	                this.this$0 = floatService; 
371	                this.val$touchPosX = seekBar; 
372	            } 
373	 
374	            public void run() { 
375	                this.this$0.TouchPosX(this.val$touchPosX.getProgress()); 
376	                this.this$0.setTouchPosX(this.val$touchPosX.getProgress()); 
377	            } 
378	        }); 
379	        linearLayout3 = (SeekBar)this.mainView.findViewById(2131362721); 
380	        this.setupSeekBar((SeekBar)linearLayout3, (TextView)this.mainView.findViewById(2131362722), this.getTouchPosY(), new Runnable(){ 
381	            final FloatService this$0; 
382	            final SeekBar val$touchPosY; 
383	            { 
384	                this.this$0 = floatService; 
385	                this.val$touchPosY = seekBar; 
386	            } 
387	 
388	            public void run() { 
389	                this.this$0.TouchPosY(this.val$touchPosY.getProgress()); 
390	                this.this$0.setTouchPosY(this.val$touchPosY.getProgress()); 
391	            } 
392	        }); 
393	        linearLayout3 = (RadioGroup)view.findViewById(2131361996); 
394	        linearLayout3.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener(){ 
395	            final FloatService this$0; 
396	            final View val$aimbot; 
397	            final RadioGroup val$aimby; 
398	            { 
399	                this.this$0 = floatService; 
400	                this.val$aimby = radioGroup; 
401	                this.val$aimbot = view; 
402	            } 
403	 
404	            public void onCheckedChanged(RadioGroup radioGroup, int n2) { 
405	                n2 = this.val$aimby.getCheckedRadioButtonId(); 
406	                radioGroup = (RadioButton)this.val$aimbot.findViewById(n2); 
407	                this.this$0.AimBy(Integer.parseInt((String)radioGroup.getTag().toString())); 
408	            } 
409	        }); 
410	        linearLayout3 = (RadioGroup)view.findViewById(2131362002); 
411	        linearLayout3.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener(){ 
412	            final FloatService this$0; 
413	            final View val$aimbot; 
414	            final RadioGroup val$aimwhen; 
415	            { 
416	                this.this$0 = floatService; 
417	                this.val$aimwhen = radioGroup; 
418	                this.val$aimbot = view; 
419	            } 
420	 
421	            public void onCheckedChanged(RadioGroup radioGroup, int n2) { 
422	                n2 = this.val$aimwhen.getCheckedRadioButtonId(); 
423	                radioGroup = (RadioButton)this.val$aimbot.findViewById(n2); 
424	                this.this$0.AimWhen(Integer.parseInt((String)radioGroup.getTag().toString())); 
425	            } 
426	        }); 
427	        linearLayout3 = (RadioGroup)view.findViewById(2131361995); 
428	        linearLayout3.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener(){ 
429	            final FloatService this$0; 
430	            final View val$aimbot; 
431	            final RadioGroup val$aimbotmode; 
432	            { 
433	                this.this$0 = floatService; 
434	                this.val$aimbotmode = radioGroup; 
435	                this.val$aimbot = view; 
436	            } 
437	 
438	            public void onCheckedChanged(RadioGroup radioGroup, int n2) { 
439	                n2 = this.val$aimbotmode.getCheckedRadioButtonId(); 
440	                radioGroup = (RadioButton)this.val$aimbot.findViewById(n2); 
441	                this.this$0.Target(Integer.parseInt((String)radioGroup.getTag().toString())); 
442	            } 
443	        }); 
444	    } 
445	 
446	    private int getAimSpeed() { 
447	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26599456311692L), 0).getInt(Deobfuscator$app$Debug.getString(-26638111017356L), 18); 
448	    } 
449	 
450	    private boolean getConfigitem(String string2, boolean bl) { 
451	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26444837489036L), 0).getBoolean(string2, bl); 
452	    } 
453	 
454	    private int getDistances() { 
455	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24881469393292L), 0).getInt(Deobfuscator$app$Debug.getString(-24920124098956L), 0); 
456	    } 
457	 
458	    private int getEspValue(String string2, int n2) { 
459	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26522146900364L), 0).getInt(string2, n2); 
460	    } 
461	 
462	    private int getFlagsType() { 
463	        return 8; 
464	    } 
465	 
466	    private int getFps() { 
467	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24387548154252L), 0).getInt(Deobfuscator$app$Debug.getString(-24426202859916L), 100); 
468	    } 
469	 
470	    private static int getLayoutType() { 
471	        int n2 = Build.VERSION.SDK_INT >= 26 ? 2038 : (Build.VERSION.SDK_INT >= 24 ? 2002 : (Build.VERSION.SDK_INT >= 23 ? 2005 : 2003)); 
472	        return n2; 
473	    } 
474	 
475	    private int getSmoothness() { 
476	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26779844938124L), 0).getInt(Deobfuscator$app$Debug.getString(-26818499643788L), 20); 
477	    } 
478	 
479	    private int getbulletspeedAim() { 
480	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25628793702796L), 0).getInt(Deobfuscator$app$Debug.getString(-25667448408460L), 0); 
481	    } 
482	 
483	    private void getbulletspeedAim(int n2) { 
484	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25744757819788L), 0).edit(); 
485	        editor.putInt(Deobfuscator$app$Debug.getString(-25783412525452L), n2); 
486	        editor.apply(); 
487	    } 
488	 
489	    private WindowManager.LayoutParams getparams() { 
490	        WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams(-2, -2, FloatService.getLayoutType(), this.getFlagsType(), -3); 
491	        layoutParams.gravity = 51; 
492	        layoutParams.x = 0; 
493	        layoutParams.y = 0; 
494	        return layoutParams; 
495	    } 
496	 
497	    private int getradarSize() { 
498	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24619476388236L), 0).getInt(Deobfuscator$app$Debug.getString(-24658131093900L), 0); 
499	    } 
500	 
501	    private int getrangeAim() { 
502	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24701080766860L), 0).getInt(Deobfuscator$app$Debug.getString(-24739735472524L), 0); 
503	    } 
504	 
505	    private void getrangeAim(int n2) { 
506	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24791275080076L), 0).edit(); 
507	        editor.putInt(Deobfuscator$app$Debug.getString(-24829929785740L), n2); 
508	        editor.apply(); 
509	    } 
510	 
511	    private int getrecoilAim() { 
512	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25044678150540L), 0).getInt(Deobfuscator$app$Debug.getString(-25083332856204L), 0); 
513	    } 
514	 
515	    private void getrecoilAim(int n2) { 
516	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25139167431052L), 0).edit(); 
517	        editor.putInt(Deobfuscator$app$Debug.getString(-25177822136716L), n2); 
518	        editor.apply(); 
519	    } 
520	 
521	    private int getrecoilAim2() { 
522	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25233656711564L), 0).getInt(Deobfuscator$app$Debug.getString(-25272311417228L), 0); 
523	    } 
524	 
525	    private void getrecoilAim2(int n2) { 
526	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25332440959372L), 0).edit(); 
527	        editor.putInt(Deobfuscator$app$Debug.getString(-25371095665036L), n2); 
528	        editor.apply(); 
529	    } 
530	 
531	    private int getrecoilAim3() { 
532	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25431225207180L), 0).getInt(Deobfuscator$app$Debug.getString(-25469879912844L), 0); 
533	    } 
534	 
535	    private void getrecoilAim3(int n2) { 
536	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25530009454988L), 0).edit(); 
537	        editor.putInt(Deobfuscator$app$Debug.getString(-25568664160652L), n2); 
538	        editor.apply(); 
539	    } 
540	 
541	    private int getwideview() { 
542	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25860721936780L), 0).getInt(Deobfuscator$app$Debug.getString(-25899376642444L), 0); 
543	    } 
544	 
545	    private void getwideview(int n2) { 
546	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-25950916249996L), 0).edit(); 
547	        editor.putInt(Deobfuscator$app$Debug.getString(-25989570955660L), n2); 
548	        editor.apply(); 
549	    } 
550	 
551	    private boolean isViewCollapsed() { 
552	        boolean bl = this.mainView == null || this.layout_icon_control_view.getVisibility() == 0; 
553	        return bl; 
554	    } 
555	 
556	    private void items(View view) { 
557	        LinearLayout linearLayout = (LinearLayout)view.findViewById(2131362307); 
558	        linearLayout = (LinearLayout)view.findViewById(2131362353); 
559	        view.findViewById(2131362043); 
560	        view.findViewById(2131362044); 
561	        ToggleButton toggleButton = (ToggleButton)view.findViewById(2131362350); 
562	        this.espvisual(toggleButton, 14); 
563	        ToggleButton toggleButton2 = (ToggleButton)view.findViewById(2131361827); 
564	        this.itemss(toggleButton2); 
565	        ToggleButton toggleButton3 = (ToggleButton)view.findViewById(2131362355); 
566	        this.itemss(toggleButton3); 
567	        ToggleButton toggleButton4 = (ToggleButton)view.findViewById(2131361886); 
568	        this.itemss(toggleButton4); 
569	        ToggleButton toggleButton5 = (ToggleButton)view.findViewById(2131361897); 
570	        this.itemss(toggleButton5); 
571	        ToggleButton toggleButton6 = (ToggleButton)view.findViewById(2131361793); 
572	        this.itemss(toggleButton6); 
573	        ToggleButton toggleButton7 = (ToggleButton)view.findViewById(2131361862); 
574	        this.itemss(toggleButton7); 
575	        ToggleButton toggleButton8 = (ToggleButton)view.findViewById(2131361798); 
576	        this.itemss(toggleButton8); 
577	        ToggleButton toggleButton9 = (ToggleButton)view.findViewById(2131361864); 
578	        this.itemss(toggleButton9); 
579	        ToggleButton toggleButton10 = (ToggleButton)view.findViewById(2131361845); 
580	        this.itemss(toggleButton10); 
581	        ToggleButton toggleButton11 = (ToggleButton)view.findViewById(2131361870); 
582	        this.itemss(toggleButton11); 
583	        ToggleButton toggleButton12 = (ToggleButton)view.findViewById(2131361865); 
584	        this.itemss(toggleButton12); 
585	        ToggleButton toggleButton13 = (ToggleButton)view.findViewById(2131361843); 
586	        this.itemss(toggleButton13); 
587	        ToggleButton toggleButton14 = (ToggleButton)view.findViewById(2131361825); 
588	        this.itemss(toggleButton14); 
589	        ToggleButton toggleButton15 = (ToggleButton)view.findViewById(2131361867); 
590	        this.itemss(toggleButton15); 
591	        ToggleButton toggleButton16 = (ToggleButton)view.findViewById(2131361837); 
592	        this.itemss(toggleButton16); 
593	        ToggleButton toggleButton17 = (ToggleButton)view.findViewById(2131361847); 
594	        this.itemss(toggleButton17); 
595	        ToggleButton toggleButton18 = (ToggleButton)view.findViewById(2131361792); 
596	        this.itemss(toggleButton18); 
597	        ToggleButton toggleButton19 = (ToggleButton)view.findViewById(2131361925); 
598	        this.itemss(toggleButton19); 
599	        ToggleButton toggleButton20 = (ToggleButton)view.findViewById(2131362036); 
600	        this.itemss(toggleButton20); 
601	        ToggleButton toggleButton21 = (ToggleButton)view.findViewById(2131361871); 
602	        this.itemss(toggleButton21); 
603	        ToggleButton toggleButton22 = (ToggleButton)view.findViewById(2131361921); 
604	        this.itemss(toggleButton22); 
605	        ToggleButton toggleButton23 = (ToggleButton)view.findViewById(2131362765); 
606	        this.itemss(toggleButton23); 
607	        ToggleButton toggleButton24 = (ToggleButton)view.findViewById(2131361882); 
608	        this.itemss(toggleButton24); 
609	        ToggleButton toggleButton25 = (ToggleButton)view.findViewById(2131361927); 
610	        this.itemss(toggleButton25); 
611	        ToggleButton toggleButton26 = (ToggleButton)view.findViewById(2131361799); 
612	        this.itemss(toggleButton26); 
613	        ToggleButton toggleButton27 = (ToggleButton)view.findViewById(2131361885); 
614	        this.itemss(toggleButton27); 
615	        ToggleButton toggleButton28 = (ToggleButton)view.findViewById(2131361857); 
616	        this.itemss(toggleButton28); 
617	        ToggleButton toggleButton29 = (ToggleButton)view.findViewById(2131361863); 
618	        this.itemss(toggleButton29); 
619	        ToggleButton toggleButton30 = (ToggleButton)view.findViewById(2131361903); 
620	        this.itemss(toggleButton30); 
621	        ToggleButton toggleButton31 = (ToggleButton)view.findViewById(2131361902); 
622	        this.itemss(toggleButton31); 
623	        ToggleButton toggleButton32 = (ToggleButton)view.findViewById(2131361869); 
624	        this.itemss(toggleButton32); 
625	        ToggleButton toggleButton33 = (ToggleButton)view.findViewById(2131361873); 
626	        this.itemss(toggleButton33); 
627	        ToggleButton toggleButton34 = (ToggleButton)view.findViewById(2131361876); 
628	        this.itemss(toggleButton34); 
629	        ToggleButton toggleButton35 = (ToggleButton)view.findViewById(2131361928); 
630	        this.itemss(toggleButton35); 
631	        ToggleButton toggleButton36 = (ToggleButton)view.findViewById(2131361795); 
632	        this.itemss(toggleButton36); 
633	        ToggleButton toggleButton37 = (ToggleButton)view.findViewById(2131361930); 
634	        this.itemss(toggleButton37); 
635	        ToggleButton toggleButton38 = (ToggleButton)view.findViewById(2131361868); 
636	        this.itemss(toggleButton38); 
637	        ToggleButton toggleButton39 = (ToggleButton)view.findViewById(2131362795); 
638	        this.itemss(toggleButton39); 
639	        ToggleButton toggleButton40 = (ToggleButton)view.findViewById(2131362796); 
640	        this.itemss(toggleButton40); 
641	        ToggleButton toggleButton41 = (ToggleButton)view.findViewById(2131362797); 
642	        this.itemss(toggleButton41); 
643	        ToggleButton toggleButton42 = (ToggleButton)view.findViewById(2131362798); 
644	        this.itemss(toggleButton42); 
645	        ToggleButton toggleButton43 = (ToggleButton)view.findViewById(2131362799); 
646	        this.itemss(toggleButton43); 
647	        ToggleButton toggleButton44 = (ToggleButton)view.findViewById(2131362062); 
648	        this.itemss(toggleButton44); 
649	        ToggleButton toggleButton45 = (ToggleButton)view.findViewById(2131362229); 
650	        this.itemss(toggleButton45); 
651	        ToggleButton toggleButton46 = (ToggleButton)view.findViewById(2131362532); 
652	        this.itemss(toggleButton46); 
653	        ToggleButton toggleButton47 = (ToggleButton)view.findViewById(2131362026); 
654	        this.itemss(toggleButton47); 
655	        ToggleButton toggleButton48 = (ToggleButton)view.findViewById(2131362027); 
656	        this.itemss(toggleButton48); 
657	        ToggleButton toggleButton49 = (ToggleButton)view.findViewById(2131362028); 
658	        this.itemss(toggleButton49); 
659	        ToggleButton toggleButton50 = (ToggleButton)view.findViewById(2131362224); 
660	        this.itemss(toggleButton50); 
661	        ToggleButton toggleButton51 = (ToggleButton)view.findViewById(2131362225); 
662	        this.itemss(toggleButton51); 
663	        ToggleButton toggleButton52 = (ToggleButton)view.findViewById(2131362226); 
664	        this.itemss(toggleButton52); 
665	        ToggleButton toggleButton53 = (ToggleButton)view.findViewById(2131362767); 
666	        this.itemss(toggleButton53); 
667	        ToggleButton toggleButton54 = (ToggleButton)view.findViewById(2131362768); 
668	        this.itemss(toggleButton54); 
669	        ToggleButton toggleButton55 = (ToggleButton)view.findViewById(2131362769); 
670	        this.itemss(toggleButton55); 
671	        ToggleButton toggleButton56 = (ToggleButton)view.findViewById(2131361936); 
672	        this.itemss(toggleButton56); 
673	        ToggleButton toggleButton57 = (ToggleButton)view.findViewById(2131361935); 
674	        this.itemss(toggleButton57); 
675	        ToggleButton toggleButton58 = (ToggleButton)view.findViewById(2131361934); 
676	        this.itemss(toggleButton58); 
677	        ToggleButton toggleButton59 = (ToggleButton)view.findViewById(2131361932); 
678	        this.itemss(toggleButton59); 
679	        ToggleButton toggleButton60 = (ToggleButton)view.findViewById(2131361933); 
680	        this.itemss(toggleButton60); 
681	        ToggleButton toggleButton61 = (ToggleButton)view.findViewById(2131362015); 
682	        this.itemss(toggleButton61); 
683	        ToggleButton toggleButton62 = (ToggleButton)view.findViewById(2131361803); 
684	        this.itemss(toggleButton62); 
685	        ToggleButton toggleButton63 = (ToggleButton)view.findViewById(2131361931); 
686	        this.itemss(toggleButton63); 
687	        ToggleButton toggleButton64 = (ToggleButton)view.findViewById(2131361824); 
688	        this.itemss(toggleButton64); 
689	        ToggleButton toggleButton65 = (ToggleButton)view.findViewById(2131361879); 
690	        this.itemss(toggleButton65); 
691	        ToggleButton toggleButton66 = (ToggleButton)view.findViewById(2131361896); 
692	        this.itemss(toggleButton66); 
693	        ToggleButton toggleButton67 = (ToggleButton)view.findViewById(2131362561); 
694	        this.itemss(toggleButton67); 
695	        ToggleButton toggleButton68 = (ToggleButton)view.findViewById(2131361861); 
696	        this.itemss(toggleButton68); 
697	        ToggleButton toggleButton69 = (ToggleButton)view.findViewById(2131361895); 
698	        this.itemss(toggleButton69); 
699	        ToggleButton toggleButton70 = (ToggleButton)view.findViewById(2131361894); 
700	        this.itemss(toggleButton70); 
701	        ToggleButton toggleButton71 = (ToggleButton)view.findViewById(2131362216); 
702	        this.itemss(toggleButton71); 
703	        ToggleButton toggleButton72 = (ToggleButton)view.findViewById(2131362403); 
704	        this.itemss(toggleButton72); 
705	        ToggleButton toggleButton73 = (ToggleButton)view.findViewById(2131362653); 
706	        this.itemss(toggleButton73); 
707	        ToggleButton toggleButton74 = (ToggleButton)view.findViewById(2131362612); 
708	        this.itemss(toggleButton74); 
709	        ToggleButton toggleButton75 = (ToggleButton)view.findViewById(2131362475); 
710	        this.itemss(toggleButton75); 
711	        ToggleButton toggleButton76 = (ToggleButton)view.findViewById(2131362382); 
712	        this.itemss(toggleButton76); 
713	        ToggleButton toggleButton77 = (ToggleButton)view.findViewById(2131362180); 
714	        this.itemss(toggleButton77); 
715	        ToggleButton toggleButton78 = (ToggleButton)view.findViewById(2131362030); 
716	        this.itemss(toggleButton78); 
717	        ToggleButton toggleButton79 = (ToggleButton)view.findViewById(2131362273); 
718	        this.itemss(toggleButton79); 
719	        ToggleButton toggleButton80 = (ToggleButton)view.findViewById(2131362161); 
720	        this.itemss(toggleButton80); 
721	        ToggleButton toggleButton81 = (ToggleButton)view.findViewById(2131361884); 
722	        this.itemss(toggleButton81); 
723	        ToggleButton toggleButton82 = (ToggleButton)view.findViewById(2131361823); 
724	        this.itemss(toggleButton82); 
725	        ToggleButton toggleButton83 = (ToggleButton)view.findViewById(2131361907); 
726	        this.itemss(toggleButton83); 
727	        ToggleButton toggleButton84 = (ToggleButton)view.findViewById(2131361872); 
728	        this.itemss(toggleButton84); 
729	        ToggleButton toggleButton85 = (ToggleButton)view.findViewById(2131361822); 
730	        this.itemss(toggleButton85); 
731	        ToggleButton toggleButton86 = (ToggleButton)view.findViewById(2131361836); 
732	        this.itemss(toggleButton86); 
733	        ToggleButton toggleButton87 = (ToggleButton)view.findViewById(2131361883); 
734	        this.itemss(toggleButton87); 
735	        ToggleButton toggleButton88 = (ToggleButton)view.findViewById(2131361892); 
736	        this.itemss(toggleButton88); 
737	        ToggleButton toggleButton89 = (ToggleButton)view.findViewById(2131361880); 
738	        this.itemss(toggleButton89); 
739	        ToggleButton toggleButton90 = (ToggleButton)view.findViewById(2131361881); 
740	        this.itemss(toggleButton90); 
741	        ToggleButton toggleButton91 = (ToggleButton)view.findViewById(2131361891); 
742	        this.itemss(toggleButton91); 
743	        ToggleButton toggleButton92 = (ToggleButton)view.findViewById(2131361906); 
744	        this.itemss(toggleButton92); 
745	        ToggleButton toggleButton93 = (ToggleButton)view.findViewById(2131361817); 
746	        this.itemss(toggleButton93); 
747	        ToggleButton toggleButton94 = (ToggleButton)view.findViewById(2131361818); 
748	        this.itemss(toggleButton94); 
749	        ToggleButton toggleButton95 = (ToggleButton)view.findViewById(2131361819); 
750	        this.itemss(toggleButton95); 
751	        ToggleButton toggleButton96 = (ToggleButton)view.findViewById(2131361841); 
752	        this.itemss(toggleButton96); 
753	        ToggleButton toggleButton97 = (ToggleButton)view.findViewById(2131361840); 
754	        this.itemss(toggleButton97); 
755	        ToggleButton toggleButton98 = (ToggleButton)view.findViewById(2131361802); 
756	        this.itemss(toggleButton98); 
757	        ToggleButton toggleButton99 = (ToggleButton)view.findViewById(2131361918); 
758	        this.itemss(toggleButton99); 
759	        ToggleButton toggleButton100 = (ToggleButton)view.findViewById(2131361829); 
760	        this.itemss(toggleButton100); 
761	        ToggleButton toggleButton101 = (ToggleButton)view.findViewById(2131361842); 
762	        this.itemss(toggleButton101); 
763	        ToggleButton toggleButton102 = (ToggleButton)view.findViewById(2131361914); 
764	        this.itemss(toggleButton102); 
765	        ToggleButton toggleButton103 = (ToggleButton)view.findViewById(2131361846); 
766	        this.itemss(toggleButton103); 
767	        ToggleButton toggleButton104 = (ToggleButton)view.findViewById(2131361912); 
768	        this.itemss(toggleButton104); 
769	        ToggleButton toggleButton105 = (ToggleButton)view.findViewById(2131361915); 
770	        this.itemss(toggleButton105); 
771	        ToggleButton toggleButton106 = (ToggleButton)view.findViewById(2131361913); 
772	        this.itemss(toggleButton106); 
773	        ToggleButton toggleButton107 = (ToggleButton)view.findViewById(2131361909); 
774	        this.itemss(toggleButton107); 
775	        ToggleButton toggleButton108 = (ToggleButton)view.findViewById(2131361833); 
776	        this.itemss(toggleButton108); 
777	        ToggleButton toggleButton109 = (ToggleButton)view.findViewById(2131361888); 
778	        this.itemss(toggleButton109); 
779	        ToggleButton toggleButton110 = (ToggleButton)view.findViewById(2131361834); 
780	        this.itemss(toggleButton110); 
781	        ToggleButton toggleButton111 = (ToggleButton)view.findViewById(2131361889); 
782	        this.itemss(toggleButton111); 
783	        ToggleButton toggleButton112 = (ToggleButton)view.findViewById(2131361835); 
784	        this.itemss(toggleButton112); 
785	        ToggleButton toggleButton113 = (ToggleButton)view.findViewById(2131361830); 
786	        this.itemss(toggleButton113); 
787	        ToggleButton toggleButton114 = (ToggleButton)view.findViewById(2131361831); 
788	        this.itemss(toggleButton114); 
789	        ToggleButton toggleButton115 = (ToggleButton)view.findViewById(2131361887); 
790	        this.itemss(toggleButton115); 
791	        ToggleButton toggleButton116 = (ToggleButton)view.findViewById(2131361832); 
792	        this.itemss(toggleButton116); 
793	        ToggleButton toggleButton117 = (ToggleButton)view.findViewById(2131361890); 
794	        this.itemss(toggleButton117); 
795	        ToggleButton toggleButton118 = (ToggleButton)view.findViewById(2131361814); 
796	        this.itemss(toggleButton118); 
797	        ToggleButton toggleButton119 = (ToggleButton)view.findViewById(2131361920); 
798	        this.itemss(toggleButton119); 
799	        ToggleButton toggleButton120 = (ToggleButton)view.findViewById(2131361859); 
800	        this.itemss(toggleButton120); 
801	        ToggleButton toggleButton121 = (ToggleButton)view.findViewById(2131361801); 
802	        this.itemss(toggleButton121); 
803	        ToggleButton toggleButton122 = (ToggleButton)view.findViewById(2131361860); 
804	        this.itemss(toggleButton122); 
805	        ToggleButton toggleButton123 = (ToggleButton)view.findViewById(2131361929); 
806	        this.itemss(toggleButton123); 
807	        ToggleButton toggleButton124 = (ToggleButton)view.findViewById(2131361844); 
808	        this.itemss(toggleButton124); 
809	        ToggleButton toggleButton125 = (ToggleButton)view.findViewById(2131361926); 
810	        this.vehicless(toggleButton125); 
811	        ToggleButton toggleButton126 = (ToggleButton)view.findViewById(2131361813); 
812	        this.vehicless(toggleButton126); 
813	        ToggleButton toggleButton127 = (ToggleButton)view.findViewById(2131361924); 
814	        this.vehicless(toggleButton127); 
815	        ToggleButton toggleButton128 = (ToggleButton)view.findViewById(2131361922); 
816	        this.vehicless(toggleButton128); 
817	        ToggleButton toggleButton129 = (ToggleButton)view.findViewById(2131361811); 
818	        this.vehicless(toggleButton129); 
819	        ToggleButton toggleButton130 = (ToggleButton)view.findViewById(2131361826); 
820	        this.vehicless(toggleButton130); 
821	        ToggleButton toggleButton131 = (ToggleButton)view.findViewById(2131361856); 
822	        this.vehicless(toggleButton131); 
823	        ToggleButton toggleButton132 = (ToggleButton)view.findViewById(2131361812); 
824	        this.vehicless(toggleButton132); 
825	        ToggleButton toggleButton133 = (ToggleButton)view.findViewById(2131361905); 
826	        this.vehicless(toggleButton133); 
827	        ToggleButton toggleButton134 = (ToggleButton)view.findViewById(2131361815); 
828	        this.vehicless(toggleButton134); 
829	        ToggleButton toggleButton135 = (ToggleButton)view.findViewById(2131361874); 
830	        this.vehicless(toggleButton135); 
831	        ToggleButton toggleButton136 = (ToggleButton)view.findViewById(2131361893); 
832	        this.vehicless(toggleButton136); 
833	        ToggleButton toggleButton137 = (ToggleButton)view.findViewById(2131361910); 
834	        this.vehicless(toggleButton137); 
835	        ToggleButton toggleButton138 = (ToggleButton)view.findViewById(2131361911); 
836	        this.vehicless(toggleButton138); 
837	        ToggleButton toggleButton139 = (ToggleButton)view.findViewById(2131361919); 
838	        this.vehicless(toggleButton139); 
839	        linearLayout = (ToggleButton)view.findViewById(2131361923); 
840	        this.vehicless((ToggleButton)linearLayout); 
841	        ToggleButton toggleButton140 = (ToggleButton)view.findViewById(2131361875); 
842	        this.vehicless(toggleButton140); 
843	        ToggleButton toggleButton141 = (ToggleButton)view.findViewById(2131361806); 
844	        this.vehicless(toggleButton141); 
845	        ToggleButton toggleButton142 = (ToggleButton)view.findViewById(2131361797); 
846	        this.vehicless(toggleButton142); 
847	        ToggleButton toggleButton143 = (ToggleButton)view.findViewById(2131361858); 
848	        this.vehicless(toggleButton143); 
849	        ToggleButton toggleButton144 = (ToggleButton)view.findViewById(2131361877); 
850	        this.vehicless(toggleButton144); 
851	        ToggleButton toggleButton145 = (ToggleButton)view.findViewById(2131361820); 
852	        this.vehicless(toggleButton145); 
853	        ToggleButton toggleButton146 = (ToggleButton)view.findViewById(2131361821); 
854	        this.itemss(toggleButton146); 
855	        ToggleButton toggleButton147 = (ToggleButton)view.findViewById(2131361800); 
856	        this.itemss(toggleButton147); 
857	        ToggleButton toggleButton148 = (ToggleButton)view.findViewById(2131361828); 
858	        this.itemss(toggleButton148); 
859	        ToggleButton toggleButton149 = (ToggleButton)view.findViewById(2131361839); 
860	        this.itemss(toggleButton149); 
861	        LinearLayout linearLayout2 = (LinearLayout)this.mainView.findViewById(2131362309); 
862	        LinearLayout linearLayout3 = (LinearLayout)this.mainView.findViewById(2131362308); 
863	        view = (LinearLayout)this.mainView.findViewById(2131362401); 
864	        LinearLayout linearLayout4 = (LinearLayout)this.mainView.findViewById(2131362400); 
865	        view.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda0(toggleButton126, toggleButton127, toggleButton128, toggleButton129, toggleButton130, toggleButton131, toggleButton132, toggleButton133, toggleButton134, toggleButton135, toggleButton136, toggleButton137, toggleButton138, toggleButton139, (ToggleButton)linearLayout, toggleButton140, toggleButton141, toggleButton143, toggleButton142, toggleButton125, toggleButton145, toggleButton144)); 
866	        linearLayout4.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda1(toggleButton126, toggleButton127, toggleButton128, toggleButton129, toggleButton130, toggleButton131, toggleButton132, toggleButton133, toggleButton134, toggleButton135, toggleButton136, toggleButton137, toggleButton138, toggleButton139, (ToggleButton)linearLayout, toggleButton140, toggleButton141, toggleButton143, toggleButton142, toggleButton125, toggleButton145, toggleButton144)); 
867	        linearLayout2.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda2(toggleButton146, toggleButton147, toggleButton148, toggleButton93, toggleButton, toggleButton94, toggleButton44, toggleButton46, toggleButton45, toggleButton39, toggleButton40, toggleButton41, toggleButton42, toggleButton43, toggleButton26, toggleButton27, toggleButton30, toggleButton31, toggleButton33, toggleButton29, toggleButton28, toggleButton35, toggleButton37, toggleButton8, toggleButton12, toggleButton5, toggleButton3, toggleButton7, toggleButton11, toggleButton13, toggleButton4, toggleButton6, toggleButton10, toggleButton70, toggleButton64, toggleButton66, toggleButton69, toggleButton67, toggleButton22, toggleButton21, toggleButton23, toggleButton25, toggleButton91, toggleButton86, toggleButton87, toggleButton89, toggleButton88, toggleButton90, toggleButton2, toggleButton83, toggleButton84, toggleButton81, toggleButton32, toggleButton92, toggleButton34, toggleButton38, toggleButton36, toggleButton68, toggleButton65, toggleButton24, toggleButton15, toggleButton18, toggleButton17, toggleButton16, toggleButton60, toggleButton56, toggleButton57, toggleButton59, toggleButton58, toggleButton62, toggleButton63, toggleButton107, toggleButton14, toggleButton9, toggleButton71, toggleButton74, toggleButton72, toggleButton75, toggleButton79, toggleButton80, toggleButton77, toggleButton78, toggleButton76, toggleButton149, toggleButton19, toggleButton20, toggleButton95, toggleButton96, toggleButton97, toggleButton98, toggleButton99, toggleButton100, toggleButton101, toggleButton102, toggleButton103, toggleButton104, toggleButton105, toggleButton106, toggleButton108, toggleButton109, toggleButton110, toggleButton111, toggleButton112, toggleButton113, toggleButton114, toggleButton115, toggleButton116, toggleButton117, toggleButton118, toggleButton119, toggleButton120, toggleButton121, toggleButton122, toggleButton123, toggleButton124, toggleButton61, toggleButton85, toggleButton47, toggleButton48, toggleButton49, toggleButton50, toggleButton51, toggleButton52, toggleButton53, toggleButton54, toggleButton55, toggleButton73, toggleButton82)); 
868	        linearLayout3.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda3(toggleButton146, toggleButton147, toggleButton148, toggleButton93, toggleButton, toggleButton94, toggleButton44, toggleButton46, toggleButton45, toggleButton39, toggleButton40, toggleButton41, toggleButton42, toggleButton43, toggleButton26, toggleButton27, toggleButton30, toggleButton31, toggleButton33, toggleButton29, toggleButton28, toggleButton35, toggleButton37, toggleButton8, toggleButton12, toggleButton5, toggleButton3, toggleButton7, toggleButton11, toggleButton13, toggleButton4, toggleButton6, toggleButton10, toggleButton70, toggleButton64, toggleButton66, toggleButton69, toggleButton67, toggleButton22, toggleButton21, toggleButton23, toggleButton25, toggleButton91, toggleButton86, toggleButton87, toggleButton89, toggleButton88, toggleButton90, toggleButton2, toggleButton83, toggleButton84, toggleButton81, toggleButton32, toggleButton92, toggleButton34, toggleButton38, toggleButton36, toggleButton68, toggleButton65, toggleButton24, toggleButton15, toggleButton18, toggleButton17, toggleButton16, toggleButton60, toggleButton56, toggleButton57, toggleButton59, toggleButton58, toggleButton62, toggleButton63, toggleButton107, toggleButton14, toggleButton9, toggleButton71, toggleButton74, toggleButton72, toggleButton75, toggleButton79, toggleButton80, toggleButton77, toggleButton78, toggleButton76, toggleButton149, toggleButton19, toggleButton20, toggleButton95, toggleButton96, toggleButton97, toggleButton98, toggleButton99, toggleButton100, toggleButton101, toggleButton102, toggleButton103, toggleButton104, toggleButton105, toggleButton106, toggleButton108, toggleButton109, toggleButton110, toggleButton111, toggleButton112, toggleButton113, toggleButton114, toggleButton115, toggleButton116, toggleButton117, toggleButton118, toggleButton119, toggleButton120, toggleButton121, toggleButton122, toggleButton123, toggleButton124, toggleButton61, toggleButton85, toggleButton47, toggleButton48, toggleButton49, toggleButton50, toggleButton51, toggleButton52, toggleButton53, toggleButton54, toggleButton55, toggleButton73, toggleButton82)); 
869	    } 
  static /* synthetic */ void lambda$initDesign$0(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5, View view) { 
872	        linearLayout.setVisibility(0); 
873	        linearLayout2.setVisibility(8); 
874	        linearLayout3.setVisibility(8); 
875	        linearLayout4.setVisibility(8); 
876	        linearLayout5.setVisibility(8); 
877	    } 
878	 
879	    static /* synthetic */ void lambda$initDesign$1(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5, LinearLayout linearLayout6, LinearLayout linearLayout7, View view, View view2, View view3) { 
880	        linearLayout.setVisibility(8); 
881	        linearLayout2.setVisibility(0); 
882	        linearLayout3.setVisibility(8); 
883	        linearLayout4.setVisibility(8); 
884	        linearLayout5.setVisibility(8); 
885	        linearLayout6.setVisibility(0); 
886	        linearLayout7.setVisibility(8); 
887	        view.setVisibility(0); 
888	        view2.setVisibility(8); 
889	    } 
890	 
891	    static /* synthetic */ void lambda$initDesign$2(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5, View view) { 
892	        linearLayout.setVisibility(8); 
893	        linearLayout2.setVisibility(8); 
894	        linearLayout3.setVisibility(0); 
895	        linearLayout4.setVisibility(8); 
896	        linearLayout5.setVisibility(8); 
897	    } 
898	 
899	    static /* synthetic */ void lambda$initDesign$3(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5, View view) { 
900	        linearLayout.setVisibility(8); 
901	        linearLayout2.setVisibility(8); 
902	        linearLayout3.setVisibility(8); 
903	        linearLayout4.setVisibility(0); 
904	        linearLayout5.setVisibility(8); 
905	    } 
906	 
907	    static /* synthetic */ void lambda$initDesign$4(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5, LinearLayout linearLayout6, LinearLayout linearLayout7, View view, View view2, View view3) { 
908	        linearLayout.setVisibility(8); 
909	        linearLayout2.setVisibility(0); 
910	        linearLayout3.setVisibility(8); 
911	        linearLayout4.setVisibility(8); 
912	        linearLayout5.setVisibility(8); 
913	        linearLayout6.setVisibility(8); 
914	        linearLayout7.setVisibility(0); 
915	        view.setVisibility(8); 
916	        view2.setVisibility(0); 
917	    } 
918	 
919	    static /* synthetic */ void lambda$initDesign$5(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5, View view) { 
920	        linearLayout.setVisibility(8); 
921	        linearLayout2.setVisibility(8); 
922	        linearLayout3.setVisibility(8); 
923	        linearLayout4.setVisibility(8); 
924	        linearLayout5.setVisibility(0); 
925	    } 
926	 
927	    static /* synthetic */ void lambda$items$6(ToggleButton toggleButton, ToggleButton toggleButton2, ToggleButton toggleButton3, ToggleButton toggleButton4, ToggleButton toggleButton5, ToggleButton toggleButton6, ToggleButton toggleButton7, ToggleButton toggleButton8, ToggleButton toggleButton9, ToggleButton toggleButton10, ToggleButton toggleButton11, ToggleButton toggleButton12, ToggleButton toggleButton13, ToggleButton toggleButton14, ToggleButton toggleButton15, ToggleButton toggleButton16, ToggleButton toggleButton17, ToggleButton toggleButton18, ToggleButton toggleButton19, ToggleButton toggleButton20, ToggleButton toggleButton21, ToggleButton toggleButton22, View view) { 
928	        toggleButton.setChecked(true); 
929	        toggleButton2.setChecked(true); 
930	        toggleButton3.setChecked(true); 
931	        toggleButton4.setChecked(true); 
932	        toggleButton5.setChecked(true); 
933	        toggleButton6.setChecked(true); 
934	        toggleButton7.setChecked(true); 
935	        toggleButton8.setChecked(true); 
936	        toggleButton9.setChecked(true); 
937	        toggleButton10.setChecked(true); 
938	        toggleButton11.setChecked(true); 
939	        toggleButton12.setChecked(true); 
940	        toggleButton13.setChecked(true); 
941	        toggleButton14.setChecked(true); 
942	        toggleButton15.setChecked(true); 
943	        toggleButton16.setChecked(true); 
944	        toggleButton17.setChecked(true); 
945	        toggleButton18.setChecked(true); 
946	        toggleButton19.setChecked(true); 
947	        toggleButton20.setChecked(true); 
948	        toggleButton21.setChecked(true); 
949	        toggleButton22.setChecked(true); 
950	    } 
951	 
952	    static /* synthetic */ void lambda$items$7(ToggleButton toggleButton, ToggleButton toggleButton2, ToggleButton toggleButton3, ToggleButton toggleButton4, ToggleButton toggleButton5, ToggleButton toggleButton6, ToggleButton toggleButton7, ToggleButton toggleButton8, ToggleButton toggleButton9, ToggleButton toggleButton10, ToggleButton toggleButton11, ToggleButton toggleButton12, ToggleButton toggleButton13, ToggleButton toggleButton14, ToggleButton toggleButton15, ToggleButton toggleButton16, ToggleButton toggleButton17, ToggleButton toggleButton18, ToggleButton toggleButton19, ToggleButton toggleButton20, ToggleButton toggleButton21, ToggleButton toggleButton22, View view) { 
953	        toggleButton.setChecked(false); 
954	        toggleButton2.setChecked(false); 
955	        toggleButton3.setChecked(false); 
956	        toggleButton4.setChecked(false); 
957	        toggleButton5.setChecked(false); 
958	        toggleButton6.setChecked(false); 
959	        toggleButton7.setChecked(false); 
960	        toggleButton8.setChecked(false); 
961	        toggleButton9.setChecked(false); 
962	        toggleButton10.setChecked(false); 
963	        toggleButton11.setChecked(false); 
964	        toggleButton12.setChecked(false); 
965	        toggleButton13.setChecked(false); 
966	        toggleButton14.setChecked(false); 
967	        toggleButton15.setChecked(false); 
968	        toggleButton16.setChecked(false); 
969	        toggleButton17.setChecked(false); 
970	        toggleButton18.setChecked(false); 
971	        toggleButton19.setChecked(false); 
972	        toggleButton20.setChecked(false); 
973	        toggleButton21.setChecked(false); 
974	        toggleButton22.setChecked(false); 
975	    } 
976	 
977	    static /* synthetic */ void lambda$items$8(ToggleButton toggleButton, ToggleButton toggleButton2, ToggleButton toggleButton3, ToggleButton toggleButton4, ToggleButton toggleButton5, ToggleButton toggleButton6, ToggleButton toggleButton7, ToggleButton toggleButton8, ToggleButton toggleButton9, ToggleButton toggleButton10, ToggleButton toggleButton11, ToggleButton toggleButton12, ToggleButton toggleButton13, ToggleButton toggleButton14, ToggleButton toggleButton15, ToggleButton toggleButton16, ToggleButton toggleButton17, ToggleButton toggleButton18, ToggleButton toggleButton19, ToggleButton toggleButton20, ToggleButton toggleButton21, ToggleButton toggleButton22, ToggleButton toggleButton23, ToggleButton toggleButton24, ToggleButton toggleButton25, ToggleButton toggleButton26, ToggleButton toggleButton27, ToggleButton toggleButton28, ToggleButton toggleButton29, ToggleButton toggleButton30, ToggleButton toggleButton31, ToggleButton toggleButton32, ToggleButton toggleButton33, ToggleButton toggleButton34, ToggleButton toggleButton35, ToggleButton toggleButton36, ToggleButton toggleButton37, ToggleButton toggleButton38, ToggleButton toggleButton39, ToggleButton toggleButton40, ToggleButton toggleButton41, ToggleButton toggleButton42, ToggleButton toggleButton43, ToggleButton toggleButton44, ToggleButton toggleButton45, ToggleButton toggleButton46, ToggleButton toggleButton47, ToggleButton toggleButton48, ToggleButton toggleButton49, ToggleButton toggleButton50, ToggleButton toggleButton51, ToggleButton toggleButton52, ToggleButton toggleButton53, ToggleButton toggleButton54, ToggleButton toggleButton55, ToggleButton toggleButton56, ToggleButton toggleButton57, ToggleButton toggleButton58, ToggleButton toggleButton59, ToggleButton toggleButton60, ToggleButton toggleButton61, ToggleButton toggleButton62, ToggleButton toggleButton63, ToggleButton toggleButton64, ToggleButton toggleButton65, ToggleButton toggleButton66, ToggleButton toggleButton67, ToggleButton toggleButton68, ToggleButton toggleButton69, ToggleButton toggleButton70, ToggleButton toggleButton71, ToggleButton toggleButton72, ToggleButton toggleButton73, ToggleButton toggleButton74, ToggleButton toggleButton75, ToggleButton toggleButton76, ToggleButton toggleButton77, ToggleButton toggleButton78, ToggleButton toggleButton79, ToggleButton toggleButton80, ToggleButton toggleButton81, ToggleButton toggleButton82, ToggleButton toggleButton83, ToggleButton toggleButton84, ToggleButton toggleButton85, ToggleButton toggleButton86, ToggleButton toggleButton87, ToggleButton toggleButton88, ToggleButton toggleButton89, ToggleButton toggleButton90, ToggleButton toggleButton91, ToggleButton toggleButton92, ToggleButton toggleButton93, ToggleButton toggleButton94, ToggleButton toggleButton95, ToggleButton toggleButton96, ToggleButton toggleButton97, ToggleButton toggleButton98, ToggleButton toggleButton99, ToggleButton toggleButton100, ToggleButton toggleButton101, ToggleButton toggleButton102, ToggleButton toggleButton103, ToggleButton toggleButton104, ToggleButton toggleButton105, ToggleButton toggleButton106, ToggleButton toggleButton107, ToggleButton toggleButton108, ToggleButton toggleButton109, ToggleButton toggleButton110, ToggleButton toggleButton111, ToggleButton toggleButton112, ToggleButton toggleButton113, ToggleButton toggleButton114, ToggleButton toggleButton115, ToggleButton toggleButton116, ToggleButton toggleButton117, ToggleButton toggleButton118, ToggleButton toggleButton119, ToggleButton toggleButton120, ToggleButton toggleButton121, ToggleButton toggleButton122, ToggleButton toggleButton123, ToggleButton toggleButton124, ToggleButton toggleButton125, ToggleButton toggleButton126, ToggleButton toggleButton127, ToggleButton toggleButton128, View view) { 
978	        toggleButton.setChecked(true); 
979	        toggleButton2.setChecked(true); 
980	        toggleButton3.setChecked(true); 
981	        toggleButton4.setChecked(true); 
982	        toggleButton5.setChecked(true); 
983	        toggleButton6.setChecked(true); 
984	        toggleButton7.setChecked(true); 
985	        toggleButton8.setChecked(true); 
986	        toggleButton9.setChecked(true); 
987	        toggleButton10.setChecked(true); 
988	        toggleButton11.setChecked(true); 
989	        toggleButton12.setChecked(true); 
990	        toggleButton13.setChecked(true); 
991	        toggleButton14.setChecked(true); 
992	        toggleButton15.setChecked(true); 
993	        toggleButton16.setChecked(true); 
994	        toggleButton17.setChecked(true); 
995	        toggleButton18.setChecked(true); 
996	        toggleButton19.setChecked(true); 
997	        toggleButton20.setChecked(true); 
998	        toggleButton21.setChecked(true); 
999	        toggleButton22.setChecked(true); 
1000	        toggleButton23.setChecked(true); 
1001	        toggleButton24.setChecked(true); 
1002	        toggleButton25.setChecked(true); 
1003	        toggleButton26.setChecked(true); 
1004	        toggleButton27.setChecked(true); 
1005	        toggleButton28.setChecked(true); 
1006	        toggleButton29.setChecked(true); 
1007	        toggleButton30.setChecked(true); 
1008	        toggleButton31.setChecked(true); 
1009	        toggleButton32.setChecked(true); 
1010	        toggleButton33.setChecked(true); 
1011	        toggleButton34.setChecked(true); 
1012	        toggleButton35.setChecked(true); 
1013	        toggleButton36.setChecked(true); 
1014	        toggleButton37.setChecked(true); 
1015	        toggleButton38.setChecked(true); 
1016	        toggleButton39.setChecked(true); 
1017	        toggleButton40.setChecked(true); 
1018	        toggleButton41.setChecked(true); 
1019	        toggleButton42.setChecked(true); 
1020	        toggleButton43.setChecked(true); 
1021	        toggleButton44.setChecked(true); 
1022	        toggleButton45.setChecked(true); 
1023	        toggleButton46.setChecked(true); 
1024	        toggleButton47.setChecked(true); 
1025	        toggleButton48.setChecked(true); 
1026	        toggleButton49.setChecked(true); 
1027	        toggleButton50.setChecked(true); 
1028	        toggleButton51.setChecked(true); 
1029	        toggleButton52.setChecked(true); 
1030	        toggleButton53.setChecked(true); 
1031	        toggleButton54.setChecked(true); 
1032	        toggleButton55.setChecked(true); 
1033	        toggleButton56.setChecked(true); 
1034	        toggleButton57.setChecked(true); 
1035	        toggleButton58.setChecked(true); 
1036	        toggleButton59.setChecked(true); 
1037	        toggleButton60.setChecked(true); 
1038	        toggleButton61.setChecked(true); 
1039	        toggleButton62.setChecked(true); 
1040	        toggleButton63.setChecked(true); 
1041	        toggleButton64.setChecked(true); 
1042	        toggleButton65.setChecked(true); 
1043	        toggleButton66.setChecked(true); 
1044	        toggleButton67.setChecked(true); 
1045	        toggleButton68.setChecked(true); 
1046	        toggleButton69.setChecked(true); 
1047	        toggleButton70.setChecked(true); 
1048	        toggleButton71.setChecked(true); 
1049	        toggleButton72.setChecked(true); 
1050	        toggleButton73.setChecked(true); 
1051	        toggleButton74.setChecked(true); 
1052	        toggleButton75.setChecked(true); 
1053	        toggleButton76.setChecked(true); 
1054	        toggleButton77.setChecked(true); 
1055	        toggleButton78.setChecked(true); 
1056	        toggleButton79.setChecked(true); 
1057	        toggleButton80.setChecked(true); 
1058	        toggleButton81.setChecked(true); 
1059	        toggleButton82.setChecked(true); 
1060	        toggleButton83.setChecked(true); 
1061	        toggleButton84.setChecked(true); 
1062	        toggleButton85.setChecked(true); 
1063	        toggleButton86.setChecked(true); 
1064	        toggleButton87.setChecked(true); 
1065	        toggleButton88.setChecked(true); 
1066	        toggleButton89.setChecked(true); 
1067	        toggleButton90.setChecked(true); 
1068	        toggleButton91.setChecked(true); 
1069	        toggleButton92.setChecked(true); 
1070	        toggleButton93.setChecked(true); 
1071	        toggleButton94.setChecked(true); 
1072	        toggleButton95.setChecked(true); 
1073	        toggleButton96.setChecked(true); 
1074	        toggleButton97.setChecked(true); 
1075	        toggleButton98.setChecked(true); 
1076	        toggleButton99.setChecked(true); 
1077	        toggleButton100.setChecked(true); 
1078	        toggleButton101.setChecked(true); 
1079	        toggleButton102.setChecked(true); 
1080	        toggleButton103.setChecked(true); 
1081	        toggleButton104.setChecked(true); 
1082	        toggleButton105.setChecked(true); 
1083	        toggleButton106.setChecked(true); 
1084	        toggleButton107.setChecked(true); 
1085	        toggleButton108.setChecked(true); 
1086	        toggleButton109.setChecked(true); 
1087	        toggleButton110.setChecked(true); 
1088	        toggleButton111.setChecked(true); 
1089	        toggleButton112.setChecked(true); 
1090	        toggleButton113.setChecked(true); 
1091	        toggleButton114.setChecked(true); 
1092	        toggleButton115.setChecked(true); 
1093	        toggleButton116.setChecked(true); 
1094	        toggleButton117.setChecked(true); 
1095	        toggleButton118.setChecked(true); 
1096	        toggleButton119.setChecked(true); 
1097	        toggleButton120.setChecked(true); 
1098	        toggleButton121.setChecked(true); 
1099	        toggleButton122.setChecked(true); 
1100	        toggleButton123.setChecked(true); 
1101	        toggleButton124.setChecked(true); 
1102	        toggleButton125.setChecked(true); 
1103	        toggleButton126.setChecked(true); 
1104	        toggleButton127.setChecked(true); 
1105	        toggleButton128.setChecked(true); 
1106	    } 
1107	 
1108	    static /* synthetic */ void lambda$items$9(ToggleButton toggleButton, ToggleButton toggleButton2, ToggleButton toggleButton3, ToggleButton toggleButton4, ToggleButton toggleButton5, ToggleButton toggleButton6, ToggleButton toggleButton7, ToggleButton toggleButton8, ToggleButton toggleButton9, ToggleButton toggleButton10, ToggleButton toggleButton11, ToggleButton toggleButton12, ToggleButton toggleButton13, ToggleButton toggleButton14, ToggleButton toggleButton15, ToggleButton toggleButton16, ToggleButton toggleButton17, ToggleButton toggleButton18, ToggleButton toggleButton19, ToggleButton toggleButton20, ToggleButton toggleButton21, ToggleButton toggleButton22, ToggleButton toggleButton23, ToggleButton toggleButton24, ToggleButton toggleButton25, ToggleButton toggleButton26, ToggleButton toggleButton27, ToggleButton toggleButton28, ToggleButton toggleButton29, ToggleButton toggleButton30, ToggleButton toggleButton31, ToggleButton toggleButton32, ToggleButton toggleButton33, ToggleButton toggleButton34, ToggleButton toggleButton35, ToggleButton toggleButton36, ToggleButton toggleButton37, ToggleButton toggleButton38, ToggleButton toggleButton39, ToggleButton toggleButton40, ToggleButton toggleButton41, ToggleButton toggleButton42, ToggleButton toggleButton43, ToggleButton toggleButton44, ToggleButton toggleButton45, ToggleButton toggleButton46, ToggleButton toggleButton47, ToggleButton toggleButton48, ToggleButton toggleButton49, ToggleButton toggleButton50, ToggleButton toggleButton51, ToggleButton toggleButton52, ToggleButton toggleButton53, ToggleButton toggleButton54, ToggleButton toggleButton55, ToggleButton toggleButton56, ToggleButton toggleButton57, ToggleButton toggleButton58, ToggleButton toggleButton59, ToggleButton toggleButton60, ToggleButton toggleButton61, ToggleButton toggleButton62, ToggleButton toggleButton63, ToggleButton toggleButton64, ToggleButton toggleButton65, ToggleButton toggleButton66, ToggleButton toggleButton67, ToggleButton toggleButton68, ToggleButton toggleButton69, ToggleButton toggleButton70, ToggleButton toggleButton71, ToggleButton toggleButton72, ToggleButton toggleButton73, ToggleButton toggleButton74, ToggleButton toggleButton75, ToggleButton toggleButton76, ToggleButton toggleButton77, ToggleButton toggleButton78, ToggleButton toggleButton79, ToggleButton toggleButton80, ToggleButton toggleButton81, ToggleButton toggleButton82, ToggleButton toggleButton83, ToggleButton toggleButton84, ToggleButton toggleButton85, ToggleButton toggleButton86, ToggleButton toggleButton87, ToggleButton toggleButton88, ToggleButton toggleButton89, ToggleButton toggleButton90, ToggleButton toggleButton91, ToggleButton toggleButton92, ToggleButton toggleButton93, ToggleButton toggleButton94, ToggleButton toggleButton95, ToggleButton toggleButton96, ToggleButton toggleButton97, ToggleButton toggleButton98, ToggleButton toggleButton99, ToggleButton toggleButton100, ToggleButton toggleButton101, ToggleButton toggleButton102, ToggleButton toggleButton103, ToggleButton toggleButton104, ToggleButton toggleButton105, ToggleButton toggleButton106, ToggleButton toggleButton107, ToggleButton toggleButton108, ToggleButton toggleButton109, ToggleButton toggleButton110, ToggleButton toggleButton111, ToggleButton toggleButton112, ToggleButton toggleButton113, ToggleButton toggleButton114, ToggleButton toggleButton115, ToggleButton toggleButton116, ToggleButton toggleButton117, ToggleButton toggleButton118, ToggleButton toggleButton119, ToggleButton toggleButton120, ToggleButton toggleButton121, ToggleButton toggleButton122, ToggleButton toggleButton123, ToggleButton toggleButton124, ToggleButton toggleButton125, ToggleButton toggleButton126, ToggleButton toggleButton127, ToggleButton toggleButton128, View view) { 
1109	        toggleButton.setChecked(false); 
1110	        toggleButton2.setChecked(false); 
1111	        toggleButton3.setChecked(false); 
1112	        toggleButton4.setChecked(false); 
1113	        toggleButton5.setChecked(false); 
1114	        toggleButton6.setChecked(false); 
1115	        toggleButton7.setChecked(false); 
1116	        toggleButton8.setChecked(false); 
1117	        toggleButton9.setChecked(false); 
1118	        toggleButton10.setChecked(false); 
1119	        toggleButton11.setChecked(false); 
1120	        toggleButton12.setChecked(false); 
1121	        toggleButton13.setChecked(false); 
1122	        toggleButton14.setChecked(false); 
1123	        toggleButton15.setChecked(false); 
1124	        toggleButton16.setChecked(false); 
1125	        toggleButton17.setChecked(false); 
1126	        toggleButton18.setChecked(false); 
1127	        toggleButton19.setChecked(false); 
1128	        toggleButton20.setChecked(false); 
1129	        toggleButton21.setChecked(false); 
1130	        toggleButton22.setChecked(false); 
1131	        toggleButton23.setChecked(false); 
1132	        toggleButton24.setChecked(false); 
1133	        toggleButton25.setChecked(false); 
1134	        toggleButton26.setChecked(false); 
1135	        toggleButton27.setChecked(false); 
1136	        toggleButton28.setChecked(false); 
1137	        toggleButton29.setChecked(false); 
1138	        toggleButton30.setChecked(false); 
1139	        toggleButton31.setChecked(false); 
1140	        toggleButton32.setChecked(false); 
1141	        toggleButton33.setChecked(false); 
1142	        toggleButton34.setChecked(false); 
1143	        toggleButton35.setChecked(false); 
1144	        toggleButton36.setChecked(false); 
1145	        toggleButton37.setChecked(false); 
1146	        toggleButton38.setChecked(false); 
1147	        toggleButton39.setChecked(false); 
1148	        toggleButton40.setChecked(false); 
1149	        toggleButton41.setChecked(false); 
1150	        toggleButton42.setChecked(false); 
1151	        toggleButton43.setChecked(false); 
1152	        toggleButton44.setChecked(false); 
1153	        toggleButton45.setChecked(false); 
1154	        toggleButton46.setChecked(false); 
1155	        toggleButton47.setChecked(false); 
1156	        toggleButton48.setChecked(false); 
1157	        toggleButton49.setChecked(false); 
1158	        toggleButton50.setChecked(false); 
1159	        toggleButton51.setChecked(false); 
1160	        toggleButton52.setChecked(false); 
1161	        toggleButton53.setChecked(false); 
1162	        toggleButton54.setChecked(false); 
1163	        toggleButton55.setChecked(false); 
1164	        toggleButton56.setChecked(false); 
1165	        toggleButton57.setChecked(false); 
1166	        toggleButton58.setChecked(false); 
1167	        toggleButton59.setChecked(false); 
1168	        toggleButton60.setChecked(false); 
1169	        toggleButton61.setChecked(false); 
1170	        toggleButton62.setChecked(false); 
1171	        toggleButton63.setChecked(false); 
1172	        toggleButton64.setChecked(false); 
1173	        toggleButton65.setChecked(false); 
1174	        toggleButton66.setChecked(false); 
1175	        toggleButton67.setChecked(false); 
1176	        toggleButton68.setChecked(false); 
1177	        toggleButton69.setChecked(false); 
1178	        toggleButton70.setChecked(false); 
1179	        toggleButton71.setChecked(false); 
1180	        toggleButton72.setChecked(false); 
1181	        toggleButton73.setChecked(false); 
1182	        toggleButton74.setChecked(false); 
1183	        toggleButton75.setChecked(false); 
1184	        toggleButton76.setChecked(false); 
1185	        toggleButton77.setChecked(false); 
1186	        toggleButton78.setChecked(false); 
1187	        toggleButton79.setChecked(false); 
1188	        toggleButton80.setChecked(false); 
1189	        toggleButton81.setChecked(false); 
1190	        toggleButton82.setChecked(false); 
1191	        toggleButton83.setChecked(false); 
1192	        toggleButton84.setChecked(false); 
1193	        toggleButton85.setChecked(false); 
1194	        toggleButton86.setChecked(false); 
1195	        toggleButton87.setChecked(false); 
1196	        toggleButton88.setChecked(false); 
1197	        toggleButton89.setChecked(false); 
1198	        toggleButton90.setChecked(false); 
1199	        toggleButton91.setChecked(false); 
1200	        toggleButton92.setChecked(false); 
1201	        toggleButton93.setChecked(false); 
1202	        toggleButton94.setChecked(false); 
1203	        toggleButton95.setChecked(false); 
1204	        toggleButton96.setChecked(false); 
1205	        toggleButton97.setChecked(false); 
1206	        toggleButton98.setChecked(false); 
1207	        toggleButton99.setChecked(false); 
1208	        toggleButton100.setChecked(false); 
1209	        toggleButton101.setChecked(false); 
1210	        toggleButton102.setChecked(false); 
1211	        toggleButton103.setChecked(false); 
1212	        toggleButton104.setChecked(false); 
1213	        toggleButton105.setChecked(false); 
1214	        toggleButton106.setChecked(false); 
1215	        toggleButton107.setChecked(false); 
1216	        toggleButton108.setChecked(false); 
1217	        toggleButton109.setChecked(false); 
1218	        toggleButton110.setChecked(false); 
1219	        toggleButton111.setChecked(false); 
1220	        toggleButton112.setChecked(false); 
1221	        toggleButton113.setChecked(false); 
1222	        toggleButton114.setChecked(false); 
1223	        toggleButton115.setChecked(false); 
1224	        toggleButton116.setChecked(false); 
1225	        toggleButton117.setChecked(false); 
1226	        toggleButton118.setChecked(false); 
1227	        toggleButton119.setChecked(false); 
1228	        toggleButton120.setChecked(false); 
1229	        toggleButton121.setChecked(false); 
1230	        toggleButton122.setChecked(false); 
1231	        toggleButton123.setChecked(false); 
1232	        toggleButton124.setChecked(false); 
1233	        toggleButton125.setChecked(false); 
1234	        toggleButton126.setChecked(false); 
1235	        toggleButton127.setChecked(false); 
1236	        toggleButton128.setChecked(false); 
1237	    } 
1238	 
1239	    private void loadbahasa() { 
1240	        this.setLokasi(this.getSharedPreferences(this.getPackageName(), 0).getString(Deobfuscator$app$Debug.getString(-24284468939148L), Deobfuscator$app$Debug.getString(-24314533710220L))); 
1241	    } 
1242	 
1243	    private void memory(View view) { 
1244	        ToggleButton toggleButton = (ToggleButton)view.findViewById(2131362295); 
1245	        this.memory(toggleButton, 1); 
1246	        this.memory((ToggleButton)view.findViewById(2131362297), 2); 
1247	        this.memory((ToggleButton)view.findViewById(2131362281), 3); 
1248	        ToggleButton toggleButton2 = (ToggleButton)view.findViewById(2131362293); 
1249	        SeekBar seekBar = (SeekBar)view.findViewById(2131362523); 
1250	        TextView textView = (TextView)view.findViewById(2131362522); 
1251	        TextView textView2 = (TextView)view.findViewById(2131362000); 
1252	        view = (LinearLayout)view.findViewById(2131362383); 
1253	        if (LoginActivity.Kooontoool) { 
1254	            typelogin = Deobfuscator$app$Debug.getString(-27475629640076L); 
1255	            textView2.setVisibility(8); 
1256	            view.setVisibility(0); 
1257	        } else { 
1258	            typelogin = Deobfuscator$app$Debug.getString(-27509989378444L); 
1259	            textView2.setVisibility(0); 
1260	            view.setVisibility(8); 
1261	            toggleButton.setEnabled(false); 
1262	            toggleButton2.setEnabled(false); 
1263	            seekBar.setEnabled(false); 
1264	            toggleButton.setAlpha(0.0f); 
1265	            toggleButton2.setAlpha(0.0f); 
1266	        } 
1267	        toggleButton2.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(this){ 
1268	            final FloatService this$0; 
1269	            { 
1270	                this.this$0 = floatService; 
1271	            } 
1272	 
1273	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1274	                if (bl) { 
1275	                    this.this$0.Exec(Deobfuscator$app$Debug.getString(-24181389724044L) + LoginActivity.USERKEY + Deobfuscator$app$Debug.getString(-24228634364300L) + MainActivity.game + Deobfuscator$app$Debug.getString(-24237224298892L), this.this$0.getString(2131952090)); 
1276	                } 
1277	            } 
1278	        }); 
1279	        this.setupSeekBar(seekBar, textView, this.getwideview(), new Runnable(){ 
1280	            final FloatService this$0; 
1281	            final SeekBar val$wideviewSeekBar; 
1282	            { 
1283	                this.this$0 = floatService; 
1284	                this.val$wideviewSeekBar = seekBar; 
1285	            } 
1286	 
1287	            public void run() { 
1288	                this.this$0.WideView(this.val$wideviewSeekBar.getProgress()); 
1289	                this.this$0.getwideview(this.val$wideviewSeekBar.getProgress()); 
1290	            } 
1291	        }); 
1292	    } 
1293	 
1294	    private View.OnTouchListener onTouchListener() { 
1295	        return new View.OnTouchListener(this){ 
1296	            final View collapsedView; 
1297	            final View expandedView; 
1298	            private float initialTouchX; 
1299	            private float initialTouchY; 
1300	            private int initialX; 
1301	            private int initialY; 
1302	            final FloatService this$0; 
1303	            { 
1304	                this.this$0 = floatService; 
1305	                this.collapsedView = floatService.layout_icon_control_view; 
1306	                this.expandedView = floatService.layout_main_view; 
1307	            } 
1308	 
1309	            public boolean onTouch(View view, MotionEvent motionEvent) { 
1310	                switch (motionEvent.getAction()) { 
1311	                    default: { 
1312	                        return false; 
1313	                    } 
1314	                    case 2: { 
1315	                        ((FloatService)this.this$0).paramsMainView.x = this.initialX + (int)(motionEvent.getRawX() - this.initialTouchX); 
1316	                        ((FloatService)this.this$0).paramsMainView.y = this.initialY + (int)(motionEvent.getRawY() - this.initialTouchY); 
1317	                        this.this$0.windowManagerMainView.updateViewLayout(this.this$0.mainView, (ViewGroup.LayoutParams)this.this$0.paramsMainView); 
1318	                        return true; 
1319	                    } 
1320	                    case 1: { 
1321	                        int n2 = (int)(motionEvent.getRawX() - this.initialTouchX); 
1322	                        int n4 = (int)(motionEvent.getRawY() - this.initialTouchY); 
1323	                        if (n2 < 10 && n4 < 10 && this.this$0.isViewCollapsed()) { 
1324	                            this.collapsedView.setVisibility(8); 
1325	                            this.expandedView.setVisibility(0); 
1326	                        } 
1327	                        return true; 
1328	                    } 
1329	                    case 0:  
1330	                } 
1331	                this.initialX = ((FloatService)this.this$0).paramsMainView.x; 
1332	                this.initialY = ((FloatService)this.this$0).paramsMainView.y; 
1333	                this.initialTouchX = motionEvent.getRawX(); 
1334	                this.initialTouchY = motionEvent.getRawY(); 
1335	                return true; 
1336	            } 
1337	        }; 
1338	    } 
1339	 
1340	    private void setAimSpeed(int n2) { 
1341	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26689650624908L), 0).edit(); 
1342	        editor.putInt(Deobfuscator$app$Debug.getString(-26728305330572L), n2); 
1343	        editor.apply(); 
1344	    } 
1345	 
1346	    private void setConfigitem(String string2, boolean bl) { 
1347	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26483492194700L), 0).edit(); 
1348	        editor.putBoolean(string2, bl); 
1349	        editor.apply(); 
1350	    } 
1351	 
1352	    private void setDistances(int n2) { 
1353	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24963073771916L), 0).edit(); 
1354	        editor.putInt(Deobfuscator$app$Debug.getString(-25001728477580L), n2); 
1355	        editor.apply(); 
1356	    } 
1357	 
1358	    private void setEspValue(String string2, int n2) { 
1359	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26560801606028L), 0).edit(); 
1360	        editor.putInt(string2, n2); 
1361	        editor.apply(); 
1362	    } 
1363	 
1364	    private void setFps(int n2) { 
1365	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24443382729100L), 0).edit(); 
1366	        editor.putInt(Deobfuscator$app$Debug.getString(-24482037434764L), n2); 
1367	        editor.apply(); 
1368	    } 
1369	 
1370	    private void setLokasi(String string2) { 
1371	        Locale locale = new Locale(string2); 
1372	        Locale.setDefault((Locale)locale); 
1373	        Configuration configuration = new Configuration(); 
1374	        configuration.locale = locale; 
1375	        this.getBaseContext().getResources().updateConfiguration(configuration, this.getBaseContext().getResources().getDisplayMetrics()); 
1376	        configuration = this.getSharedPreferences(this.getPackageName(), 0).edit(); 
1377	        configuration.putString(Deobfuscator$app$Debug.getString(-24254404168076L), string2); 
1378	        configuration.apply(); 
1379	    } 
1380	 
1381	    private void setSmoothness(int n2) { 
1382	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26865744284044L), 0).edit(); 
1383	        editor.putInt(Deobfuscator$app$Debug.getString(-26904398989708L), n2); 
1384	        editor.apply(); 
1385	    } 
1386	 
1387	    private void setValue(String string2, boolean bl) { 
1388	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24499217303948L), 0).edit(); 
1389	        editor.putBoolean(string2, bl); 
1390	        editor.apply(); 
1391	    } 
1392	 
1393	    private void setradarSize(int n2) { 
1394	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24537872009612L), 0).edit(); 
1395	        editor.putInt(Deobfuscator$app$Debug.getString(-24576526715276L), n2); 
1396	        editor.apply(); 
1397	    } 
1398	 
1399	    private void visual(View view) { 
1400	        Object object = (TextView)view.findViewById(2131362509); 
1401	        object = (ToggleButton)view.findViewById(2131362285); 
1402	        LinearLayout linearLayout = (LinearLayout)view.findViewById(2131362391); 
1403	        linearLayout = (LinearLayout)view.findViewById(2131362392); 
1404	        linearLayout = (Switch)view.findViewById(2131362289); 
1405	        LinearLayout linearLayout2 = (LinearLayout)view.findViewById(2131362385); 
1406	        linearLayout2 = (ImageView)view.findViewById(2131362255); 
1407	        linearLayout2 = (ImageView)view.findViewById(2131362258); 
1408	        object.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(this){ 
1409	            final FloatService this$0; 
1410	            { 
1411	                this.this$0 = floatService; 
1412	            } 
1413	 
1414	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1415	                if (bl) { 
1416	                    this.this$0.DrawESP(); 
1417	                } else { 
1418	                    this.this$0.StopESP(); 
1419	                    this.this$0.StopAimFloat(); 
1420	                    this.this$0.StopAimBulletFloat(); 
1421	                    this.this$0.StopAimTouch(); 
1422	                } 
1423	            } 
1424	        }); 
1425	        ((Switch)view.findViewById(2131362349)).setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(this){ 
1426	            final FloatService this$0; 
1427	            { 
1428	                this.this$0 = floatService; 
1429	            } 
1430	 
1431	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1432	                if (bl) { 
1433	                    this.this$0.Exec(Deobfuscator$app$Debug.getString(-23807727569292L), this.this$0.getString(2131951741)); 
1434	                    this.this$0.Exec(Deobfuscator$app$Debug.getString(-23842087307660L), this.this$0.getString(2131951741)); 
1435	                    this.this$0.Exec(Deobfuscator$app$Debug.getString(-23897921882508L), this.this$0.getString(2131951741)); 
1436	                    this.this$0.Exec(Deobfuscator$app$Debug.getString(-23953756457356L), this.this$0.getString(2131951741)); 
1437	                    this.this$0.Exec(Deobfuscator$app$Debug.getString(-23988116195724L), this.this$0.getString(2131951741)); 
1438	                    this.this$0.SettingValue(114, true); 
1439	                } else { 
1440	                    this.this$0.SettingValue(114, false); 
1441	                } 
1442	            } 
1443	        }); 
1444	        linearLayout.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(this){ 
1445	            final FloatService this$0; 
1446	            { 
1447	                this.this$0 = floatService; 
1448	            } 
1449	 
1450	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1451	                switch (MainActivity.gameint) { 
1452	                    default: { 
1453	                        break; 
1454	                    } 
1455	                    case 5: { 
1456	                        break; 
1457	                    } 
1458	                    case 1:  
1459	                    case 2:  
1460	                    case 3:  
1461	                    case 4: { 
1462	                        if (bl) { 
1463	                            this.this$0.Exec(Deobfuscator$app$Debug.getString(-24035360835980L) + MainActivity.game + Deobfuscator$app$Debug.getString(-24061130639756L), this.this$0.getString(2131951626)); 
1464	                            this.this$0.Exec(Deobfuscator$app$Debug.getString(-24065425607052L) + MainActivity.game + Deobfuscator$app$Debug.getString(-24104080312716L), this.this$0.getString(2131951626)); 
1465	                            break; 
1466	                        } 
1467	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-24108375280012L) + MainActivity.game + Deobfuscator$app$Debug.getString(-24134145083788L), this.this$0.getString(2131951625)); 
1468	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-24138440051084L) + MainActivity.game + Deobfuscator$app$Debug.getString(-24177094756748L), this.this$0.getString(2131951625)); 
1469	                    } 
1470	                } 
1471	            } 
1472	        }); 
1473	        linearLayout = (SeekBar)view.findViewById(2131362652); 
1474	        object = (TextView)view.findViewById(2131362510); 
1475	        this.setupSeekBar((SeekBar)linearLayout, (TextView)object, this.getradarSize(), new Runnable(){ 
1476	            final FloatService this$0; 
1477	            final SeekBar val$radarSizeSeekBar; 
1478	            final TextView val$radarSizeText; 
1479	            { 
1480	                this.this$0 = floatService; 
1481	                this.val$radarSizeSeekBar = seekBar; 
1482	                this.val$radarSizeText = textView; 
1483	            } 
1484	 
1485	            public void run() { 
1486	                int n2 = this.val$radarSizeSeekBar.getProgress(); 
1487	                this.this$0.setradarSize(n2); 
1488	                this.this$0.RadarSize(n2); 
1489	                this.val$radarSizeText.setText((CharSequence)String.valueOf((int)n2)); 
1490	            } 
1491	        }); 
1492	        linearLayout = (RadioButton)view.findViewById(2131362196); 
1493	        linearLayout2 = (RadioButton)view.findViewById(2131362193); 
1494	        object = (RadioButton)view.findViewById(2131362194); 
1495	        int n2 = this.getFps(); 
1496	        if (n2 == 60) { 
1497	            linearLayout.setChecked(true); 
1498	            ESPView.sleepTime = 16L; 
1499	        } else if (n2 == 90) { 
1500	            linearLayout2.setChecked(true); 
1501	            ESPView.sleepTime = 11L; 
1502	        } else if (n2 == 120) { 
1503	            object.setChecked(true); 
1504	            ESPView.sleepTime = 8L; 
1505	        } else { 
1506	            linearLayout.setChecked(true); 
1507	            ESPView.sleepTime = 16L; 
1508	        } 
1509	        linearLayout.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1510	            final FloatService this$0; 
1511	            final RadioButton val$fps4; 
1512	            final RadioButton val$fps5; 
1513	            { 
1514	                this.this$0 = floatService; 
1515	                this.val$fps4 = radioButton; 
1516	                this.val$fps5 = radioButton2; 
1517	            } 
1518	 
1519	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1520	                if (bl) { 
1521	                    this.val$fps4.setChecked(false); 
1522	                    this.val$fps5.setChecked(false); 
1523	                    this.this$0.setFps(60); 
1524	                    ESPView.ChangeFps(60); 
1525	                } 
1526	            } 
1527	        }); 
1528	        linearLayout2.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1529	            final FloatService this$0; 
1530	            final RadioButton val$fps3; 
1531	            final RadioButton val$fps5; 
1532	            { 
1533	                this.this$0 = floatService; 
1534	                this.val$fps3 = radioButton; 
1535	                this.val$fps5 = radioButton2; 
1536	            } 
1537	 
1538	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1539	                if (bl) { 
1540	                    this.val$fps3.setChecked(false); 
1541	                    this.val$fps5.setChecked(false); 
1542	                    this.this$0.setFps(90); 
1543	                    ESPView.ChangeFps(90); 
1544	                } 
1545	            } 
1546	        }); 
1547	        object.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1548	            final FloatService this$0; 
1549	            final RadioButton val$fps3; 
1550	            final RadioButton val$fps4; 
1551	            { 
1552	                this.this$0 = floatService; 
1553	                this.val$fps3 = radioButton; 
1554	                this.val$fps4 = radioButton2; 
1555	            } 
1556	 
1557	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1558	                if (bl) { 
1559	                    this.val$fps3.setChecked(false); 
1560	                    this.val$fps4.setChecked(false); 
1561	                    this.this$0.setFps(120); 
1562	                    ESPView.ChangeFps(120); 
1563	                } 
1564	            } 
1565	        }); 
1566	        object = view.getContext().getSharedPreferences(Deobfuscator$app$Debug.getString(-27260881275276L), 0).getString(Deobfuscator$app$Debug.getString(-27299535980940L), Deobfuscator$app$Debug.getString(-27346780621196L)); 
1567	        if (Shell.rootAccess()) { 
1568	            view.findViewById(2131362509).setVisibility(8); 
1569	            view.findViewById(2131362385).setVisibility(8); 
1570	            view.findViewById(2131362392).setVisibility(8); 
1571	        } else { 
1572	            if (object.equals((Object)Deobfuscator$app$Debug.getString(-27376845392268L))) { 
1573	                view.findViewById(2131362509).setVisibility(8); 
1574	                view.findViewById(2131362392).setVisibility(8); 
1575	            } else { 
1576	                view.findViewById(2131362509).setVisibility(0); 
1577	                view.findViewById(2131362392).setVisibility(0); 
1578	            } 
1579	            view.findViewById(2131362385).setVisibility(8); 
1580	        } 
1581	        this.espvisual((ToggleButton)view.findViewById(2131362291), 2); 
1582	        this.espvisual((ToggleButton)view.findViewById(2131362277), 3); 
1583	        this.espvisual((ToggleButton)view.findViewById(2131362296), 4); 
1584	        this.espvisual((ToggleButton)view.findViewById(2131362284), 5); 
1585	        this.espvisual((ToggleButton)view.findViewById(2131362288), 6); 
1586	        this.espvisual((ToggleButton)view.findViewById(2131362278), 7); 
1587	        this.espvisual((ToggleButton)view.findViewById(2131362287), 8); 
1588	        this.espvisual((ToggleButton)view.findViewById(2131362282), 9); 
1589	        this.espvisual((ToggleButton)view.findViewById(2131362299), 10); 
1590	        this.espvisual((ToggleButton)view.findViewById(2131362298), 11); 
1591	        this.espvisual((ToggleButton)view.findViewById(2131362294), 15); 
1592	        this.espvisual((ToggleButton)view.findViewById(2131362300), 16); 
1593	        this.espvisual((ToggleButton)view.findViewById(2131362279), 222); 
1594	        this.espvisual((ToggleButton)view.findViewById(2131362280), 111); 
1595	        this.espvisual((ToggleButton)view.findViewById(2131362292), 14); 
1596	    } 
1597	 
1598	    public native void AimBy(int var1); 
1599	 
1600	    public native void AimWhen(int var1); 
1601	 
1602	    public native void AimingSpeed(int var1); 
1603	 
1604	    public native void Bulletspeed(int var1); 
1605	 
1606	    public void Exec(String string2, String string3) { 
1607	        try { 
1608	            StringBuilder stringBuilder = new StringBuilder(); 
1609	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-27110557419916L)).append((Object)this.getFilesDir()).append(string2).toString()); 
1610	            stringBuilder = new StringBuilder(); 
1611	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-27183571863948L)).append((Object)this.getFilesDir()).append(string2).toString()); 
1612	            stringBuilder = new StringBuilder(); 
1613	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-27213636635020L)).append((Object)this.getFilesDir()).append(string2).toString()); 
1614	            stringBuilder = new StringBuilder(); 
1615	            this.ExecuteElf(stringBuilder.append((Object)this.getFilesDir()).append(string2).toString()); 
1616	            FloatRei.toastImage(2131231073, string3); 
1617	        } 
1618	        catch (Exception exception) { 
1619	            // empty catch block 
1620	        } 
1621	    } 
1622	 
1623	    public native void RadarSize(int var1); 
1624	 
1625	    public native void Range(int var1); 
1626	 
1627	    public native void SettingAim(int var1, boolean var2); 
1628	 
1629	    public native void SettingMemory(int var1, boolean var2); 
1630	 
1631	    public native void SettingValue(int var1, boolean var2); 
1632	 
1633	    public void Skin(View view) { 
1634	        CheckBox checkBox = (CheckBox)view.findViewById(2131362487); 
1635	        CheckBox checkBox2 = (CheckBox)view.findViewById(2131362038); 
1636	        CheckBox checkBox3 = (CheckBox)view.findViewById(2131362493); 
1637	        CheckBox checkBox4 = (CheckBox)view.findViewById(2131362023); 
1638	        CheckBox checkBox5 = (CheckBox)view.findViewById(2131362607); 
1639	        CheckBox checkBox6 = (CheckBox)view.findViewById(2131362276); 
1640	        view = (CheckBox)view.findViewById(2131362013); 
1641	        this.skinvisual(checkBox, 1); 
1642	        this.skinvisual(checkBox2, 2); 
1643	        this.skinvisual(checkBox3, 3); 
1644	        this.skinvisual(checkBox4, 4); 
1645	        this.skinvisual(checkBox5, 5); 
1646	        this.skinvisual(checkBox6, 6); 
1647	        this.skinvisual((CheckBox)view, 7); 
1648	    } 
1649	 
1650	    public native void SkinHack(int var1); 
1651	 
1652	    public native void Smoothness(int var1); 
1653	 
1654	    public native void Target(int var1); 
1655	 
1656	    public native void TouchPosX(int var1); 
1657	 
1658	    public native void TouchPosY(int var1); 
1659	 
1660	    public native void TouchSize(int var1); 
1661	 
1662	    public native void WideView(int var1); 
1663	 
1664	    public native void distances(int var1); 
1665	 
1666	    public void espvisual(ToggleButton toggleButton, int n2) { 
1667	        toggleButton.setChecked(this.getConfig((String)toggleButton.getText())); 
1668	        this.SettingValue(n2, this.getConfig((String)toggleButton.getText())); 
1669	        toggleButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1670	            final FloatService this$0; 
1671	            final ToggleButton val$a; 
1672	            final int val$b; 
1673	            { 
1674	                this.this$0 = floatService; 
1675	                this.val$a = toggleButton; 
1676	                this.val$b = n2; 
1677	            } 
1678	 
1679	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1680	                this.this$0.setValue(String.valueOf((Object)this.val$a.getText()), this.val$a.isChecked()); 
1681	                this.this$0.SettingValue(this.val$b, this.val$a.isChecked()); 
1682	            } 
1683	        }); 
1684	    } 
1685	 
1686	    boolean getConfig(String string2) { 
1687	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-24348893448588L), 0).getBoolean(string2, false); 
1688	    } 
1689	 
1690	    int getTouchPosX() { 
1691	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26264448862604L), 0).getInt(Deobfuscator$app$Debug.getString(-26303103568268L), 650); 
1692	    } 
1693	 
1694	    int getTouchPosY() { 
1695	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26384707946892L), 0).getInt(Deobfuscator$app$Debug.getString(-26423362652556L), 1400); 
1696	    } 
1697	 
1698	    int getTouchSize() { 
1699	        return this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26122714941836L), 0).getInt(Deobfuscator$app$Debug.getString(-26161369647500L), 600); 
1700	    } 
1701	 
1702	    public void initDesign() { 
1703	        RadioButton radioButton = (RadioButton)this.mainView.findViewById(2131362437); 
1704	        RadioButton radioButton2 = (RadioButton)this.mainView.findViewById(2131362438); 
1705	        RadioButton radioButton3 = (RadioButton)this.mainView.findViewById(2131362439); 
1706	        RadioButton radioButton4 = (RadioButton)this.mainView.findViewById(2131362440); 
1707	        RadioButton radioButton5 = (RadioButton)this.mainView.findViewById(2131362441); 
1708	        RadioButton radioButton6 = (RadioButton)this.mainView.findViewById(2131362442); 
1709	        LinearLayout linearLayout = (LinearLayout)this.mainView.findViewById(2131362386); 
1710	        LinearLayout linearLayout2 = (LinearLayout)this.mainView.findViewById(2131362387); 
1711	        LinearLayout linearLayout3 = (LinearLayout)this.mainView.findViewById(2131362388); 
1712	        LinearLayout linearLayout4 = (LinearLayout)this.mainView.findViewById(2131362389); 
1713	        LinearLayout linearLayout5 = (LinearLayout)this.mainView.findViewById(2131362390); 
1714	        LinearLayout linearLayout6 = (LinearLayout)this.mainView.findViewById(2131362451); 
1715	        linearLayout6 = (LinearLayout)this.mainView.findViewById(2131362453); 
1716	        LinearLayout linearLayout7 = (LinearLayout)this.mainView.findViewById(2131362307); 
1717	        linearLayout6 = (LinearLayout)this.mainView.findViewById(2131362353); 
1718	        View view = this.mainView.findViewById(2131362043); 
1719	        View view2 = this.mainView.findViewById(2131362044); 
1720	        radioButton.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda4(linearLayout, linearLayout2, linearLayout3, linearLayout4, linearLayout5)); 
1721	        radioButton2.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda5(linearLayout, linearLayout2, linearLayout3, linearLayout4, linearLayout5, linearLayout7, linearLayout6, view, view2)); 
1722	        radioButton3.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda6(linearLayout, linearLayout2, linearLayout3, linearLayout4, linearLayout5)); 
1723	        radioButton4.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda7(linearLayout, linearLayout2, linearLayout3, linearLayout4, linearLayout5)); 
1724	        radioButton5.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda8(linearLayout, linearLayout2, linearLayout3, linearLayout4, linearLayout5, linearLayout7, linearLayout6, view, view2)); 
1725	        radioButton6.setOnClickListener((View.OnClickListener)new FloatService$$ExternalSyntheticLambda9(linearLayout, linearLayout2, linearLayout3, linearLayout4, linearLayout5)); 
1726	    } 
1727	 
1728	    public void itemss(ToggleButton toggleButton) { 
1729	        toggleButton.setChecked(this.getConfig((String)toggleButton.getText())); 
1730	        toggleButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1731	            final FloatService this$0; 
1732	            final ToggleButton val$checkBox; 
1733	            { 
1734	                this.this$0 = floatService; 
1735	                this.val$checkBox = toggleButton; 
1736	            } 
1737	 
1738	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1739	                this.this$0.setValue(String.valueOf((Object)this.val$checkBox.getText()), this.val$checkBox.isChecked()); 
1740	            } 
1741	        }); 
1742	    } 
1743	 
1744	    public void memory(ToggleButton toggleButton, int n2) { 
1745	        toggleButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1746	            final FloatService this$0; 
1747	            final ToggleButton val$a; 
1748	            final int val$b; 
1749	            { 
1750	                this.this$0 = floatService; 
1751	                this.val$a = toggleButton; 
1752	                this.val$b = n2; 
1753	            } 
1754	 
1755	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1756	                this.this$0.setValue(String.valueOf((Object)this.val$a.getText()), this.val$a.isChecked()); 
1757	                this.this$0.SettingMemory(this.val$b, this.val$a.isChecked()); 
1758	            } 
1759	        }); 
1760	    } 
1761	 
1762	    public IBinder onBind(Intent intent) { 
1763	        return null; 
1764	    } 
1765	 
1766	    public void onCreate() { 
1767	        super.onCreate(); 
1768	        this.ctx = this.getApplicationContext(); 
1769	        this.InitShowMainView(); 
1770	        this.loadbahasa(); 
1771	    } 
1772	 
1773	    public void onDestroy() { 
1774	        super.onDestroy(); 
1775	        new Thread(new Runnable(this){ 
1776	            final FloatService this$0; 
1777	            { 
1778	                this.this$0 = floatService; 
1779	            } 
1780	 
1781	            public void run() { 
1782	            } 
1783	        }).start(); 
1784	        PowerManager.WakeLock wakeLock = this.mWakeLock; 
1785	        if (wakeLock != null) { 
1786	            wakeLock.release(); 
1787	            this.mWakeLock = null; 
1788	        } 
1789	        if ((wakeLock = this.mainView) != null) { 
1790	            this.windowManagerMainView.removeView((View)wakeLock); 
1791	        } 
1792	    } 
1793	 
1794	    public native void recoil(int var1); 
1795	 
1796	    public native void recoil2(int var1); 
1797	 
1798	    public native void recoil3(int var1); 
1799	 
1800	    void setTouchPosX(int n2) { 
1801	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26204319320460L), 0).edit(); 
1802	        editor.putInt(Deobfuscator$app$Debug.getString(-26242974026124L), n2); 
1803	        editor.apply(); 
1804	    } 
1805	 
1806	    void setTouchPosY(int n2) { 
1807	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26324578404748L), 0).edit(); 
1808	        editor.putInt(Deobfuscator$app$Debug.getString(-26363233110412L), n2); 
1809	        editor.apply(); 
1810	    } 
1811	 
1812	    void setTouchSize(int n2) { 
1813	        SharedPreferences.Editor editor = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-26041110563212L), 0).edit(); 
1814	        editor.putInt(Deobfuscator$app$Debug.getString(-26079765268876L), n2); 
1815	        editor.apply(); 
1816	    } 
1817	 
1818	    public void setaim(Switch switch_, int n2) { 
1819	        switch_.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1820	            final FloatService this$0; 
1821	            final Switch val$a; 
1822	            final int val$b; 
1823	            { 
1824	                this.this$0 = floatService; 
1825	                this.val$a = switch_; 
1826	                this.val$b = n2; 
1827	            } 
1828	 
1829	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1830	                this.this$0.setValue(String.valueOf((Object)this.val$a.getText()), this.val$a.isChecked()); 
1831	                this.this$0.SettingAim(this.val$b, this.val$a.isChecked()); 
1832	            } 
1833	        }); 
1834	    } 
1835	 
1836	    void setupSeekBar(SeekBar seekBar, TextView textView, int n2, Runnable runnable) { 
1837	        seekBar.setProgress(n2); 
1838	        textView.setText((CharSequence)String.valueOf((int)n2)); 
1839	        runnable.run(); 
1840	        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){ 
1841	            final FloatService this$0; 
1842	            final Runnable val$onChangeFunction; 
1843	            final TextView val$textView; 
1844	            { 
1845	                this.this$0 = floatService; 
1846	                this.val$textView = textView; 
1847	                this.val$onChangeFunction = runnable; 
1848	            } 
1849	 
1850	            public void onProgressChanged(SeekBar seekBar, int n2, boolean bl) { 
1851	                this.val$textView.setText((CharSequence)String.valueOf((int)n2)); 
1852	                this.val$onChangeFunction.run(); 
1853	            } 
1854	 
1855	            public void onStartTrackingTouch(SeekBar seekBar) { 
1856	            } 
1857	 
1858	            public void onStopTrackingTouch(SeekBar seekBar) { 
1859	            } 
1860	        }); 
1861	    } 
1862	 
1863	    public void skinvisual(CheckBox checkBox, int n2) { 
1864	        checkBox.setChecked(this.getConfig((String)checkBox.getText())); 
1865	        this.SkinHack(n2); 
1866	        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1867	            final FloatService this$0; 
1868	            final CheckBox val$a; 
1869	            final int val$b; 
1870	            { 
1871	                this.this$0 = floatService; 
1872	                this.val$a = checkBox; 
1873	                this.val$b = n2; 
1874	            } 
1875	 
1876	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1877	                this.this$0.setValue(String.valueOf((Object)this.val$a.getText()), this.val$a.isChecked()); 
1878	                this.this$0.SkinHack(this.val$b); 
1879	            } 
1880	        }); 
1881	    } 
1882	 
1883	    public void vehicless(ToggleButton toggleButton) { 
1884	        toggleButton.setChecked(this.getConfig((String)toggleButton.getText())); 
1885	        toggleButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener(){ 
1886	            final FloatService this$0; 
1887	            final ToggleButton val$checkBox; 
1888	            { 
1889	                this.this$0 = floatService; 
1890	                this.val$checkBox = toggleButton; 
1891	            } 
1892	 
1893	            public void onCheckedChanged(CompoundButton compoundButton, boolean bl) { 
1894	                this.this$0.setValue(String.valueOf((Object)this.val$checkBox.getText()), this.val$checkBox.isChecked()); 
1895	            } 
1896	        }); 