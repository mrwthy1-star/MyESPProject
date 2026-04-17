package pubgm.loader.activity; 
78	 
79	import android.app.Activity; 
80	import android.app.ActivityManager; 
81	import android.content.Context; 
82	import android.content.DialogInterface; 
83	import android.content.Intent; 
84	import android.content.SharedPreferences; 
85	import android.content.pm.ApplicationInfo; 
86	import android.content.pm.PackageManager; 
87	import android.content.res.ColorStateList; 
88	import android.graphics.drawable.Drawable; 
89	import android.graphics.drawable.ShapeDrawable; 
90	import android.graphics.drawable.shapes.RoundRectShape; 
91	import android.graphics.drawable.shapes.Shape; 
92	import android.icu.util.Calendar; 
93	import android.net.Uri; 
94	import android.os.Build; 
95	import android.os.Bundle; 
96	import android.os.Environment; 
97	import android.os.Handler; 
98	import android.os.Looper; 
99	import android.provider.Settings; 
100	import android.util.Log; 
101	import android.view.View; 
102	import android.view.ViewGroup; 
103	import android.view.animation.AnimationUtils; 
104	import android.widget.ArrayAdapter; 
105	import android.widget.ImageView; 
106	import android.widget.LinearLayout; 
107	import android.widget.ListAdapter; 
108	import android.widget.RelativeLayout; 
109	import android.widget.TextView; 
110	import android.widget.Toast; 
111	import androidx.appcompat.app.AlertDialog; 
112	import androidx.cardview.widget.CardView; 
113	import androidx.core.content.ContextCompat; 
114	import com.blankj.molihuan.utilcode.util.FileUtils; 
115	import com.google.android.material.button.MaterialButton; 
116	import com.google.android.material.progressindicator.LinearProgressIndicator; 
117	import com.topjohnwu.superuser.Shell; 
118	import com.topjohnwu.superuser.internal.UiThreadHandler; 
119	import io.michaelrocks.paranoid.Deobfuscator$app$Debug; 
120	import java.io.File; 
121	import java.io.FileInputStream; 
122	import java.io.FileOutputStream; 
123	import java.io.IOException; 
124	import java.nio.channels.FileChannel; 
125	import java.nio.channels.ReadableByteChannel; 
126	import java.nio.charset.StandardCharsets; 
127	import java.text.ParseException; 
128	import java.text.SimpleDateFormat; 
129	import java.util.Locale; 
130	import net_62v.external.MetaActivationManager; 
131	import net_62v.external.MetaActivityManager; 
132	import net_62v.external.MetaPackageManager; 
133	import pubgm.loader.BoxApplication; 
134	import pubgm.loader.Component.DownloadZip; 
135	import pubgm.loader.activity.CrashHandler; 
136	import pubgm.loader.activity.LoginActivity; 
137	import pubgm.loader.activity.MainActivity; 
138	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda0; 
139	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda1; 
140	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda10; 
141	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda11; 
142	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda12; 
143	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda13; 
144	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda14; 
145	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda15; 
146	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda16; 
147	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda17; 
148	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda18; 
149	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda19; 
150	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda2; 
151	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda20; 
152	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda21; 
153	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda22; 
154	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda23; 
155	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda24; 
156	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda25; 
157	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda26; 
158	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda27; 
159	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda28; 
160	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda29; 
161	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda3; 
162	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda30; 
163	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda31; 
164	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda32; 
165	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda33; 
166	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda34; 
167	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda35; 
168	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda36; 
169	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda37; 
170	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda38; 
171	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda39; 
172	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda4; 
173	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda40; 
174	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda41; 
175	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda42; 
176	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda43; 
177	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda44; 
178	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda5; 
179	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda6; 
180	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda7; 
181	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda8; 
182	import pubgm.loader.activity.MainActivity$$ExternalSyntheticLambda9; 
183	import pubgm.loader.activity.MainActivity$1$$ExternalSyntheticLambda0; 
184	import pubgm.loader.activity.MainActivity$1$$ExternalSyntheticLambda1; 
185	import pubgm.loader.activity.MainActivity$2$$ExternalSyntheticLambda0; 
186	import pubgm.loader.activity.MainActivity$3$$ExternalSyntheticLambda0; 
187	import pubgm.loader.activity.SplashActivity; 
188	import pubgm.loader.floating.FightMode; 
189	import pubgm.loader.floating.FloatRei; 
190	import pubgm.loader.floating.FloatService; 
191	import pubgm.loader.floating.Overlay; 
192	import pubgm.loader.floating.ToggleAim; 
193	import pubgm.loader.floating.ToggleBullet; 
194	import pubgm.loader.floating.ToggleSimulation; 
195	import pubgm.loader.libhelper.ApkEnv; 
196	import pubgm.loader.libhelper.FileHelper; 
197	import pubgm.loader.server.ApiServer; 
198	import pubgm.loader.utils.ActivityCompat; 
199	import pubgm.loader.utils.FLog; 
200	import pubgm.loader.utils.PermissionUtils; 
201	import pubgm.loader.utils.UiKit; 
202	 
203	/* 
204	 * Illegal identifiers - consider using --renameillegalidents true 
205	 */ 
206	public class MainActivity 
207	extends ActivityCompat { 
208	    public static boolean Ischeck = false; 
209	    private static final String PREF_NAME = Deobfuscator$app$Debug.getString(-18653766814092L); 
210	    private static final int REQUEST_PERMISSIONS = 1; 
211	    public static int bitversi; 
212	    public static String bypassmode; 
213	    public static boolean check; 
214	    public static String daemonPath; 
215	    public static int device; 
216	    public static boolean fixinstallint; 
217	    public static String game; 
218	    public static int gameint; 
219	    public static int hiderecord; 
220	    static MainActivity instance; 
221	    public static boolean kernel; 
222	    public static String modeselect; 
223	    public static boolean modestatus; 
224	    public static boolean noroot; 
225	    public static String socket; 
226	    public static String typelogin; 
227	    RelativeLayout BGMIONOFF; 
228	    public String BGMI_INSTALL_OFF = Deobfuscator$app$Debug.getString(-9106054515084L); 
229	    public String CURRENT_PACKAGE; 
230	    public LinearLayout container; 
231	    Context ctx; 
232	    public CardView disable; 
233	    public CardView enable; 
234	    Handler handler2; 
235	    public String nameGame; 
236	    String[] packageapp = new String[]{Deobfuscator$app$Debug.getString(-9110349482380L), Deobfuscator$app$Debug.getString(-9174773991820L), Deobfuscator$app$Debug.getString(-9252083403148L), Deobfuscator$app$Debug.getString(-9333687781772L), Deobfuscator$app$Debug.getString(-9402407258508L)}; 
237	    public LinearProgressIndicator progres; 
238	    TextView root; 
239	    private Runnable runnable; 
240	    private SharedPreferences sharedPreferences; 
241	 
242	    static { 
243	        fixinstallint = false; 
244	        check = false; 
245	        hiderecord = 0; 
246	        try { 
247	            System.loadLibrary((String)Deobfuscator$app$Debug.getString(-18692421519756L)); 
248	        } 
249	        catch (UnsatisfiedLinkError unsatisfiedLinkError) { 
250	            FLog.error(unsatisfiedLinkError.getMessage()); 
251	        } 
252	        gameint = 1; 
253	        bypassmode = Deobfuscator$app$Debug.getString(-18722486290828L); 
254	        bitversi = 64; 
255	        noroot = false; 
256	        device = 1; 
257	        game = Deobfuscator$app$Debug.getString(-18752551061900L); 
258	        kernel = false; 
259	        Ischeck = false; 
260	        modestatus = false; 
261	    } 
262	 
263	    public MainActivity() { 
264	        this.nameGame = Deobfuscator$app$Debug.getString(-9475421702540L); 
265	        this.CURRENT_PACKAGE = Deobfuscator$app$Debug.getString(-9552731113868L); 
266	        this.handler2 = new Handler(); 
267	    } 
268	 
269	    private void CountTimerAccout() { 
270	        if (ApiServer.EXP().isEmpty()) { 
271	            MainActivity mainActivity = instance; 
272	            if (mainActivity != null) { 
273	                mainActivity.finishAffinity(); 
274	            } 
275	            return; 
276	        } 
277	        Handler handler = new Handler(); 
278	        handler.post(new Runnable(){ 
279	            final MainActivity this$0; 
280	            final Handler val$handler; 
281	            { 
282	                this.this$0 = mainActivity; 
283	                this.val$handler = handler; 
284	            } 
285	 
286	            /* 
287	             * Enabled aggressive block sorting 
288	             * Enabled unnecessary exception pruning 
289	             * Enabled aggressive exception aggregation 
290	             */ 
291	            public void run() { 
292	                try { 
293	                    Object object; 
294	                    String string; 
295	                    block6: { 
296	                        this.val$handler.postDelayed((Runnable)this, 1000L); 
297	                        string = ApiServer.EXP(); 
298	                        object = new SimpleDateFormat(Deobfuscator$app$Debug.getString(-8650787981708L), Locale.getDefault()); 
299	                        try { 
300	                            object = object.parse(string); 
301	                            if (object == null) break block6; 
302	                        } 
303	                        catch (ParseException parseException) { 
304	                            String string2 = FLog.TAG; 
305	                            object = new StringBuilder(); 
306	                            Log.e((String)string2, (String)object.append(Deobfuscator$app$Debug.getString(-8856946411916L)).append(string).toString(), (Throwable)parseException); 
307	                            return; 
308	                        } 
309	                        long l2 = object.getTime(); 
310	                        long l8 = l2 - Calendar.getInstance().getTimeInMillis(); 
311	                        if (l8 < 0L) { 
312	                            if (instance == null) return; 
313	                            instance.finishAffinity(); 
314	                            return; 
315	                        } 
316	                        long l10 = l8 / 86400000L; 
317	                        long l11 = l8 / 3600000L; 
318	                        l2 = l8 / 60000L; 
319	                        MainActivity.access$200(this.this$0, l10, l11 % 24L, l2 % 60L, (l8 /= 1000L) % 60L); 
320	                        return; 
321	                    } 
322	                    object = FLog.TAG; 
323	                    StringBuilder stringBuilder = new StringBuilder(); 
324	                    Log.e((String)object, (String)stringBuilder.append(Deobfuscator$app$Debug.getString(-8736687327628L)).append(string).toString()); 
325	                    return; 
326	                } 
327	                catch (Exception exception) { 
328	                    Log.e((String)FLog.TAG, (String)Deobfuscator$app$Debug.getString(-8990090398092L), (Throwable)exception); 
329	                } 
330	            } 
331	        }); 
332	    } 
333	 
334	    private void ExecuteElf(String string) { 
335	        try { 
336	            Runtime.getRuntime().exec(string, null, null); 
337	        } 
338	        catch (Exception exception) { 
339	            exception.printStackTrace(); 
340	        } 
341	    } 
342	 
343	    private void Loadssets() { 
344	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-13877763180940L), Deobfuscator$app$Debug.getString(-13886353115532L)); 
345	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-13912122919308L), Deobfuscator$app$Debug.getString(-13920712853900L)); 
346	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-13950777624972L), Deobfuscator$app$Debug.getString(-13959367559564L)); 
347	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-13989432330636L), Deobfuscator$app$Debug.getString(-13998022265228L)); 
348	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-14028087036300L), Deobfuscator$app$Debug.getString(-14036676970892L)); 
349	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-14066741741964L), Deobfuscator$app$Debug.getString(-14075331676556L)); 
350	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-14088216578444L), Deobfuscator$app$Debug.getString(-14096806513036L)); 
351	        this.MoveAssets(this.getFilesDir() + Deobfuscator$app$Debug.getString(-14113986382220L), Deobfuscator$app$Debug.getString(-14122576316812L)); 
352	    } 
353	 
354	    /* 
355	     * Enabled aggressive block sorting 
356	     * Enabled unnecessary exception pruning 
357	     * Enabled aggressive exception aggregation 
358	     */ 
359	    private boolean MoveAssets(String string, String string2) { 
360	        File file = new File(string); 
361	        if (!file.exists() && !file.mkdirs()) { 
362	            Log.e((String)Deobfuscator$app$Debug.getString(-14165525989772L), (String)Deobfuscator$app$Debug.getString(-14212770630028L)); 
363	            return false; 
364	        } 
365	        try { 
366	            string = this.getAssets().open(string2); 
367	            Object object = new File(file, string2); 
368	            string2 = new FileOutputStream(object); 
369	            object = new byte[1024]; 
370	            while (true) { 
371	                int n; 
372	                if (-1 == (n = string.read((byte[])object))) { 
373	                    string.close(); 
374	                    string2.flush(); 
375	                    string2.close(); 
376	                    return true; 
377	                } 
378	                string2.write((byte[])object, 0, n); 
379	            } 
380	        } 
381	        catch (IOException iOException) { 
382	            iOException.printStackTrace(); 
383	            return false; 
384	        } 
385	    } 
386	 
387	    static /* synthetic */ Runnable access$000(MainActivity mainActivity) { 
388	        return mainActivity.runnable; 
389	    } 
390	 
391	    static /* synthetic */ void access$100(MainActivity mainActivity, String string) { 
392	        mainActivity.unInstallWithDellay(string); 
393	    } 
394	 
395	    static /* synthetic */ void access$200(MainActivity mainActivity, long l2, long l8, long l10, long l11) { 
396	        mainActivity.updateCountdownUI(l2, l8, l10, l11); 
397	    } 
398	 
399	    private void exportSharedPreferences() throws IOException { 
400	        block16: { 
401	            block15: { 
402	                FileChannel fileChannel; 
403	                block14: { 
404	                    FileInputStream fileInputStream; 
405	                    File file = new File(this.getApplication().getDataDir().toString() + Deobfuscator$app$Debug.getString(-11884898355596L) + Deobfuscator$app$Debug.getString(-11949322865036L) + Deobfuscator$app$Debug.getString(-11987977570700L)); 
406	                    File file2 = new File(Environment.getExternalStorageDirectory(), Deobfuscator$app$Debug.getString(-12009452407180L)); 
407	                    if (!file.exists()) break block15; 
408	                    FileChannel fileChannel2 = null; 
409	                    fileChannel = null; 
410	                    FileChannel fileChannel3 = fileChannel2; 
411	                    FileChannel fileChannel4 = fileChannel; 
412	                    fileChannel3 = fileChannel2; 
413	                    fileChannel4 = fileChannel; 
414	                    try { 
415	                        fileInputStream = new FileInputStream(file); 
416	                        fileChannel3 = fileChannel2; 
417	                        fileChannel4 = fileChannel; 
418	                    } 
419	                    catch (Throwable throwable) { 
420	                        if (fileChannel3 != null) { 
421	                            fileChannel3.close(); 
422	                        } 
423	                        if (fileChannel4 != null) { 
424	                            fileChannel4.close(); 
425	                        } 
426	                        throw throwable; 
427	                    } 
428	                    fileChannel3 = fileChannel2 = fileInputStream.getChannel(); 
429	                    fileChannel4 = fileChannel; 
430	                    fileChannel3 = fileChannel2; 
431	                    fileChannel4 = fileChannel; 
432	                    fileInputStream = new FileOutputStream(file2); 
433	                    fileChannel3 = fileChannel2; 
434	                    fileChannel4 = fileChannel; 
435	                    fileChannel = fileInputStream.getChannel(); 
436	                    fileChannel3 = fileChannel2; 
437	                    fileChannel4 = fileChannel; 
438	                    fileChannel.transferFrom((ReadableByteChannel)fileChannel2, 0L, fileChannel2.size()); 
439	                    fileChannel3 = fileChannel2; 
440	                    fileChannel4 = fileChannel; 
441	                    fileChannel3 = fileChannel2; 
442	                    fileChannel4 = fileChannel; 
443	                    fileInputStream = new StringBuilder(); 
444	                    fileChannel3 = fileChannel2; 
445	                    fileChannel4 = fileChannel; 
446	                    Toast.makeText((Context)this, (CharSequence)fileInputStream.append(Deobfuscator$app$Debug.getString(-12065286982028L)).append(file2.getAbsolutePath()).toString(), (int)0).show(); 
447	                    if (fileChannel2 == null) break block14; 
448	                    fileChannel2.close(); 
449	                } 
450	                if (fileChannel != null) { 
451	                    fileChannel.close(); 
452	                } 
453	                break block16; 
454	            } 
455	            Toast.makeText((Context)this, (CharSequence)Deobfuscator$app$Debug.getString(-12121121556876L), (int)0).show(); 
456	        } 
457	    } 
458	 
459	    public static MainActivity get() { 
460	        return instance; 
461	    } 
462	 
463	    private void hideSystemUI() { 
464	        this.getWindow().getDecorView().setSystemUiVisibility(3332); 
465	    } 
466	 
467	    private void importSharedPreferences() throws IOException { 
468	        block16: { 
469	            block15: { 
470	                FileChannel fileChannel; 
471	                block14: { 
472	                    FileInputStream fileInputStream; 
473	                    File file = new File(Environment.getExternalStorageDirectory(), Deobfuscator$app$Debug.getString(-12262855477644L)); 
474	                    File file2 = new File(this.getApplication().getDataDir().toString() + Deobfuscator$app$Debug.getString(-12318690052492L) + Deobfuscator$app$Debug.getString(-12383114561932L) + Deobfuscator$app$Debug.getString(-12421769267596L)); 
475	                    if (!file.exists()) break block15; 
476	                    FileChannel fileChannel2 = null; 
477	                    fileChannel = null; 
478	                    FileChannel fileChannel3 = fileChannel2; 
479	                    FileChannel fileChannel4 = fileChannel; 
480	                    fileChannel3 = fileChannel2; 
481	                    fileChannel4 = fileChannel; 
482	                    try { 
483	                        fileInputStream = new FileInputStream(file); 
484	                        fileChannel3 = fileChannel2; 
485	                        fileChannel4 = fileChannel; 
486	                    } 
487	                    catch (Throwable throwable) { 
488	                        if (fileChannel3 != null) { 
489	                            fileChannel3.close(); 
490	                        } 
491	                        if (fileChannel4 != null) { 
492	                            fileChannel4.close(); 
493	                        } 
494	                        throw throwable; 
495	                    } 
496	                    fileChannel3 = fileChannel2 = fileInputStream.getChannel(); 
497	                    fileChannel4 = fileChannel; 
498	                    fileChannel3 = fileChannel2; 
499	                    fileChannel4 = fileChannel; 
500	                    fileInputStream = new FileOutputStream(file2); 
501	                    fileChannel3 = fileChannel2; 
502	                    fileChannel4 = fileChannel; 
503	                    fileChannel = fileInputStream.getChannel(); 
504	                    fileChannel3 = fileChannel2; 
505	                    fileChannel4 = fileChannel; 
506	                    fileChannel.transferFrom((ReadableByteChannel)fileChannel2, 0L, fileChannel2.size()); 
507	                    fileChannel3 = fileChannel2; 
508	                    fileChannel4 = fileChannel; 
509	                    fileChannel3 = fileChannel2; 
510	                    fileChannel4 = fileChannel; 
511	                    file2 = new StringBuilder(); 
512	                    fileChannel3 = fileChannel2; 
513	                    fileChannel4 = fileChannel; 
514	                    Toast.makeText((Context)this, (CharSequence)file2.append(Deobfuscator$app$Debug.getString(-12443244104076L)).append(file.getAbsolutePath()).toString(), (int)0).show(); 
515	                    if (fileChannel2 == null) break block14; 
516	                    fileChannel2.close(); 
517	                } 
518	                if (fileChannel != null) { 
519	                    fileChannel.close(); 
520	                } 
521	                break block16; 
522	            } 
523	            Toast.makeText((Context)this, (CharSequence)Deobfuscator$app$Debug.getString(-12507668613516L), (int)0).show(); 
524	        } 
525	    } 
526	 
527	    private void initializeViews() { 
528	        this.BGMIONOFF = (RelativeLayout)this.findViewById(2131361796); 
529	    } 
530	 
531	    public static boolean isAppInstalled(Context context, String string) { 
532	        context = context.getPackageManager(); 
533	        try { 
534	            context.getPackageInfo(string, 1); 
535	            return true; 
536	        } 
537	        catch (PackageManager.NameNotFoundException nameNotFoundException) { 
538	            return false; 
539	        } 
540	    } 
541	 
542	    private boolean isServiceRunning() { 
543	        ActivityManager activityManager2 = (ActivityManager)this.getSystemService(Deobfuscator$app$Debug.getString(-14414634092940L)); 
544	        if (activityManager2 != null) { 
545	            for (ActivityManager activityManager2 : activityManager2.getRunningServices(Integer.MAX_VALUE)) { 
546	                if (!FloatService.class.getName().equals((Object)activityManager2.service.getClassName())) continue; 
547	                return true; 
548	            } 
549	        } 
550	        return false; 
551	    } 
552	 
553	    static /* synthetic */ void lambda$initMenu2$11(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
554	        if (alertDialog.getWindow() != null) { 
555	            alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
556	        } 
557	    } 
558	 
559	    static /* synthetic */ void lambda$initMenu2$15(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
560	        if (alertDialog.getWindow() != null) { 
561	            alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
562	        } 
563	    } 
564	 
565	    static /* synthetic */ void lambda$initMenu2$17() { 
566	    } 
567	 
568	    static /* synthetic */ void lambda$initMenu2$20(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
569	        if (alertDialog.getWindow() != null) { 
570	            alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
571	        } 
572	    } 
573	 
574	    static /* synthetic */ void lambda$initMenu2$25(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
575	        if (alertDialog.getWindow() != null) { 
576	            alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
577	        } 
578	    } 
579	 
580	    static /* synthetic */ void lambda$initMenu2$30(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
581	        if (alertDialog.getWindow() != null) { 
582	            alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
583	        } 
584	    } 
585	 
586	    static /* synthetic */ void lambda$initMenu2$8() { 
587	    } 
588	 
589	    private void resetSharedPreferences() { 
590	        SharedPreferences.Editor editor = this.sharedPreferences.edit(); 
591	        editor.clear(); 
592	        editor.apply(); 
593	    } 
594	 
595	    private void restartApp() { 
596	        this.startPatcher(); 
597	    } 
598	 
599	    private void showSystemUI() { 
600	        this.getWindow().getDecorView().setSystemUiVisibility(1280); 
601	    } 
602	 
603	    /* 
604	     * Enabled aggressive block sorting 
605	     */ 
606	    private void startFloater() { 
607	        long l2 = !Shell.rootAccess() ? -14706691869068L : (kernel ? -14723871738252L : -14753936509324L); 
608	        String string = Deobfuscator$app$Debug.getString(l2); 
609	        l2 = kernel ? -14771116378508L : (modestatus ? -14779706313100L : -14788296247692L); 
610	        String string2 = Deobfuscator$app$Debug.getString(l2); 
611	        l2 = kernel ? -14796886182284L : (bitversi == 64 ? -14809771084172L : -14822655986060L); 
612	        String string3 = Deobfuscator$app$Debug.getString(l2); 
613	        l2 = kernel ? -14835540887948L : (Shell.rootAccess() ? -14839835855244L : -14844130822540L); 
614	        String string4 = Deobfuscator$app$Debug.getString(l2); 
615	        if (this.isServiceRunning()) { 
616	            MainActivity.toastImage(2131231090, this.getString(2131952268)); 
617	            return; 
618	        } 
619	        this.loadAssets(string + string2 + string3 + string4); 
620	        this.loadAssets(Deobfuscator$app$Debug.getString(-14848425789836L)); 
621	        this.startService(new Intent((Context)MainActivity.get(), FloatService.class)); 
622	        this.startService(new Intent((Context)MainActivity.get(), FightMode.class)); 
623	    } 
624	 
625	    private void startPatcher() { 
626	        if (Build.VERSION.SDK_INT >= 23) { 
627	            if (!Settings.canDrawOverlays((Context)MainActivity.get())) { 
628	                this.startActivityForResult(new Intent(Deobfuscator$app$Debug.getString(-14453288798604L), Uri.parse((String)(Deobfuscator$app$Debug.getString(-14668037163404L) + this.getPackageName()))), 123); 
629	            } else { 
630	                this.startFloater(); 
631	            } 
632	        } 
633	    } 
634	 
635	    private void stopPatcher() { 
636	        this.stopService(new Intent((Context)MainActivity.get(), FloatService.class)); 
637	        this.stopService(new Intent((Context)MainActivity.get(), Overlay.class)); 
638	        this.stopService(new Intent((Context)MainActivity.get(), FloatRei.class)); 
639	        this.stopService(new Intent((Context)MainActivity.get(), ToggleAim.class)); 
640	        this.stopService(new Intent((Context)MainActivity.get(), ToggleBullet.class)); 
641	        this.stopService(new Intent((Context)MainActivity.get(), ToggleSimulation.class)); 
642	        this.stopService(new Intent((Context)MainActivity.get(), FightMode.class)); 
643	    } 
644	 
645	    private void toggleOnOffHelper(String string, RelativeLayout relativeLayout) { 
646	        if (string != null && string.equals((Object)Deobfuscator$app$Debug.getString(-13710259456396L))) { 
647	            relativeLayout.setVisibility(0); 
648	        } else { 
649	            relativeLayout.setVisibility(0); 
650	        } 
651	    } 
652	 
653	    private void unInstallWithDellay(String string) { 
654	        UiKit.defer().when((Runnable)new MainActivity$$ExternalSyntheticLambda13(this, string)).done(new MainActivity$$ExternalSyntheticLambda14(this, string)); 
655	    } 
656	 
657	    private void updateBypassButton(MaterialButton materialButton) { 
658	        if (bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-11768934238604L))) { 
659	            materialButton.setBackgroundTintList(ColorStateList.valueOf((int)this.getResources().getColor(2131099763))); 
660	            materialButton.setText((CharSequence)Deobfuscator$app$Debug.getString(-11811883911564L)); 
661	            materialButton.setIcon(this.getDrawable(2131230953)); 
662	        } else { 
663	            materialButton.setBackgroundTintList(ColorStateList.valueOf((int)this.getResources().getColor(2131099692))); 
664	            materialButton.setText((CharSequence)Deobfuscator$app$Debug.getString(-11854833584524L)); 
665	            materialButton.setIcon(this.getDrawable(2131230952)); 
666	        } 
667	    } 
668	 
669	    private void updateCountdownUI(long l2, long l8, long l10, long l11) { 
670	        MainActivity mainActivity = instance; 
671	        if (mainActivity != null && !mainActivity.isFinishing() && !instance.isDestroyed()) { 
672	            mainActivity = (TextView)this.findViewById(2131362108); 
673	            TextView textView = (TextView)this.findViewById(2131362235); 
674	            TextView textView2 = (TextView)this.findViewById(2131362397); 
675	            TextView textView3 = (TextView)this.findViewById(2131362594); 
676	            if (mainActivity != null) { 
677	                mainActivity.setText(String.format((String)Deobfuscator$app$Debug.getString(-15179138271628L), (Object[])new Object[]{l2})); 
678	            } 
679	            if (textView != null) { 
680	                textView.setText((CharSequence)String.format((String)Deobfuscator$app$Debug.getString(-15200613108108L), (Object[])new Object[]{l8})); 
681	            } 
682	            if (textView2 != null) { 
683	                textView2.setText((CharSequence)String.format((String)Deobfuscator$app$Debug.getString(-15222087944588L), (Object[])new Object[]{l10})); 
684	            } 
685	            if (textView3 != null) { 
686	                textView3.setText((CharSequence)String.format((String)Deobfuscator$app$Debug.getString(-15243562781068L), (Object[])new Object[]{l11})); 
687	            } 
688	        } 
689	    } 
690	 
691	    private void updateInstallStates() { 
692	        this.BGMI_INSTALL_OFF = this.ONOFFBGMI(); 
693	        this.toggleOnOff(); 
694	    } 
695	 
696	    public void Checking() { 
697	        if (!new File(this.getFilesDir().toString() + Deobfuscator$app$Debug.getString(-10012292614540L)).exists()) { 
698	            new DownloadZip((Context)this).execute(new String[]{Deobfuscator$app$Debug.getString(-10029472483724L), ApiServer.mainURL()}); 
699	        } 
700	    } 
701	 
702	    public void Exec(String string, String string2) { 
703	        try { 
704	            StringBuilder stringBuilder = new StringBuilder(); 
705	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-13723144358284L)).append((Object)this.getFilesDir()).append(string).toString()); 
706	            stringBuilder = new StringBuilder(); 
707	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-13796158802316L)).append((Object)this.getFilesDir()).append(string).toString()); 
708	            stringBuilder = new StringBuilder(); 
709	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-13826223573388L)).append((Object)this.getFilesDir()).append(string).toString()); 
710	            stringBuilder = new StringBuilder(); 
711	            this.ExecuteElf(stringBuilder.append(Deobfuscator$app$Debug.getString(-13873468213644L)).append((Object)this.getFilesDir()).append(string).toString()); 
712	            MainActivity.toastImage(2131231073, string2); 
713	        } 
714	        catch (Exception exception) { 
715	            // empty catch block 
716	        } 
717	    } 
718	 
719	    public native String ONOFFBGMI(); 
720	 
721	    public void SettingESP() { 
722	        if (ContextCompat.checkSelfPermission((Context)this, (String)Deobfuscator$app$Debug.getString(-11017314961804L)) != 0 || ContextCompat.checkSelfPermission((Context)this, (String)Deobfuscator$app$Debug.getString(-11197703588236L)) != 0) { 
723	            ActivityCompat.requestPermissions(this, new String[]{Deobfuscator$app$Debug.getString(-11373797247372L), Deobfuscator$app$Debug.getString(-11554185873804L)}, 1); 
724	        } 
725	        this.sharedPreferences = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-11730279532940L), 0); 
726	        this.findViewById(2131362560).setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda11(this)); 
727	        this.findViewById(2131362173).setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda22(this)); 
728	        this.findViewById(2131362539).setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda33(this)); 
729	    } 
730	 
731	    void StartCountDown(TextView textView) { 
732	        new Handler().postDelayed(new Runnable(){ 
733	            final MainActivity this$0; 
734	            final TextView val$time; 
735	            { 
736	                this.this$0 = mainActivity; 
737	                this.val$time = textView; 
738	            } 
739	 
740	            static /* synthetic */ void lambda$run$1(TextView textView, long l2, long l8, long l10, long l11) { 
741	                textView.setText((CharSequence)String.format((String)Deobfuscator$app$Debug.getString(-7134664526220L), (Object[])new Object[]{l2, l8, l10, l11})); 
742	            } 
743	 
744	            /* synthetic */ void lambda$run$0$pubgm-loader-activity-MainActivity$1() { 
745	                Toast.makeText((Context)MainActivity.get(), (CharSequence)Deobfuscator$app$Debug.getString(-7220563872140L), (int)1).show(); 
746	                this.this$0.handler2.removeCallbacks(MainActivity.access$000(this.this$0)); 
747	                System.exit((int)0); 
748	            } 
749	 
750	            public void run() { 
751	                long l2; 
752	                long l8; 
753	                long l10; 
754	                long l11; 
755	                block6: { 
756	                    UiThreadHandler.handler.postDelayed((Runnable)this, 1000L); 
757	                    long l12 = Long.parseLong((String)ApiServer.EXP()) - java.util.Calendar.getInstance().getTimeInMillis(); 
758	                    l11 = l12 / 86400000L; 
759	                    l10 = l12 / 3600000L % 24L; 
760	                    l8 = l12 / 60000L % 60L; 
761	                    l2 = l12 / 1000L; 
762	                    if (l12 >= 0L) break block6; 
763	                    MainActivity mainActivity = this.this$0; 
764	                    MainActivity$1$$ExternalSyntheticLambda0 mainActivity$1$$ExternalSyntheticLambda0 = new MainActivity$1$$ExternalSyntheticLambda0(this); 
765	                    mainActivity.runOnUiThread(mainActivity$1$$ExternalSyntheticLambda0); 
766	                } 
767	                if (l11 != 0L || l10 != 0L || l8 < 60L) { 
768	                    // empty if block 
769	                } 
770	                if (l11 != 0L || l10 != 0L || l8 < 30L) { 
771	                    // empty if block 
772	                } 
773	                try { 
774	                    MainActivity mainActivity = this.this$0; 
775	                    TextView textView = this.val$time; 
776	                    MainActivity$1$$ExternalSyntheticLambda1 mainActivity$1$$ExternalSyntheticLambda1 = new MainActivity$1$$ExternalSyntheticLambda1(textView, l11, l10, l8, l2 % 60L); 
777	                    mainActivity.runOnUiThread(mainActivity$1$$ExternalSyntheticLambda1); 
778	                } 
779	                catch (Exception exception) { 
780	                    // empty catch block 
781	                } 
782	            } 
783	        }, 0L); 
784	        this.handler2.postAtTime(this.runnable, 6000L); 
785	    } 
786	 
787	    public void addAdditionalApp(boolean bl, String string) { 
788	        new Handler(Looper.getMainLooper()).post(new Runnable(){ 
789	            final MainActivity this$0; 
790	            final String val$packageName; 
791	            { 
792	                this.this$0 = mainActivity; 
793	                this.val$packageName = string; 
794	            } 
795	 
796	            public void run() { 
797	                if (ApkEnv.getInstance().isInstalled(this.val$packageName)) { 
798	                    this.this$0.doShowProgress(true); 
799	                } else { 
800	                    try { 
801	                        if (ApkEnv.getInstance().installByPackage(this.val$packageName)) { 
802	                            this.this$0.doShowProgress(true); 
803	                            ActivityCompat.toastImage(2131231248, Deobfuscator$app$Debug.getString(-8092442233228L)); 
804	                        } 
805	                    } 
806	                    catch (Exception exception) { 
807	                        FLog.error(exception.getMessage()); 
808	                        this.this$0.doHideProgress(); 
809	                    } 
810	                } 
811	            } 
812	        }); 
813	    } 
814	 
815	    public void devicecheck() { 
816	        this.root = (TextView)this.findViewById(2131362698); 
817	        if (Shell.rootAccess()) { 
818	            FLog.info(Deobfuscator$app$Debug.getString(-9720234838412L)); 
819	            modeselect = Deobfuscator$app$Debug.getString(-9776069413260L) + Build.VERSION.RELEASE; 
820	            this.root.setText((CharSequence)this.getString(2131952250)); 
821	            Ischeck = true; 
822	            noroot = true; 
823	            device = 1; 
824	        } else { 
825	            FLog.info(Deobfuscator$app$Debug.getString(-9857673791884L)); 
826	            modeselect = Deobfuscator$app$Debug.getString(-9930688235916L) + Build.VERSION.RELEASE; 
827	            this.root.setText((CharSequence)this.getString(2131952197)); 
828	            Ischeck = false; 
829	            device = 2; 
830	        } 
831	    } 
832	 
833	    public void doHideProgress() { 
834	        LinearProgressIndicator linearProgressIndicator = this.progres; 
835	        if (linearProgressIndicator == null) { 
836	            return; 
837	        } 
838	        linearProgressIndicator.setIndeterminate(true); 
839	        this.progres.setVisibility(8); 
840	    } 
841	 
842	    public void doShowProgress(boolean bl) { 
843	        LinearProgressIndicator linearProgressIndicator = this.progres; 
844	        if (linearProgressIndicator == null) { 
845	            return; 
846	        } 
847	        linearProgressIndicator.setVisibility(0); 
848	        this.progres.setIndeterminate(bl); 
849	        if (!bl) { 
850	            if (Build.VERSION.SDK_INT >= 26) { 
851	                this.progres.setMin(0); 
852	            } 
853	            this.progres.setMax(100); 
854	        } 
855	    } 
856	 
857	    void gameversion(LinearLayout linearLayout, LinearLayout linearLayout2, LinearLayout linearLayout3, LinearLayout linearLayout4, LinearLayout linearLayout5) { 
858	        linearLayout.setBackgroundResource(2131230914); 
859	        linearLayout2.setBackgroundResource(2131230912); 
860	        linearLayout3.setBackgroundResource(2131230912); 
861	        linearLayout4.setBackgroundResource(2131230912); 
862	        linearLayout5.setBackgroundResource(2131230912); 
863	    } 
864	 
865	    public ApplicationInfo getApplicationInfoContainer(String string) { 
866	        if (!this.isInstalled(string)) { 
867	            BoxApplication.get().showToastWithImage(2131231090, Deobfuscator$app$Debug.getString(-12705237109132L)); 
868	            return null; 
869	        } 
870	        try { 
871	            string = MetaPackageManager.getApplicationInfo(string); 
872	            if (string == null) { 
873	                return null; 
874	            } 
875	            return string; 
876	        } 
877	        catch (Exception exception) { 
878	            throw new RuntimeException((Throwable)exception); 
879	        } 
880	    } 
881	 
882	    public LinearProgressIndicator getProgresBar() { 
883	        if (this.progres == null) { 
884	            this.progres = (LinearProgressIndicator)this.findViewById(2131362502); 
885	        } 
886	        return this.progres; 
887	    } 
888	 void init() { 
890	        AnimationUtils.loadAnimation((Context)this, (int)2130771980); 
891	        LinearLayout linearLayout = (LinearLayout)this.findViewById(2131362443); 
892	        LinearLayout linearLayout2 = (LinearLayout)this.findViewById(2131362452); 
893	        LinearLayout linearLayout3 = (LinearLayout)this.findViewById(2131362154); 
894	        linearLayout3 = (LinearLayout)this.findViewById(2131362155); 
895	        LinearLayout linearLayout4 = (LinearLayout)this.findViewById(2131362253); 
896	        linearLayout3 = (LinearLayout)this.findViewById(2131362254); 
897	        ImageView imageView = (ImageView)this.findViewById(2131362257); 
898	        ImageView imageView2 = (ImageView)this.findViewById(2131362260); 
899	        TextView textView = (TextView)this.findViewById(2131362749); 
900	        TextView textView2 = (TextView)this.findViewById(2131362748); 
901	        linearLayout.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda18(this, linearLayout4, linearLayout3, textView2, textView, imageView, imageView2)); 
902	        linearLayout2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda19(this, linearLayout4, linearLayout3, textView2, textView, imageView, imageView2)); 
903	    } 
904	 
905	    public void initMenu1() { 
906	        TextView textView = (TextView)this.findViewById(2131362699); 
907	        LinearLayout linearLayout = (LinearLayout)this.findViewById(2131362221); 
908	        MaterialButton materialButton = (MaterialButton)this.findViewById(2131362167); 
909	        MaterialButton materialButton2 = (MaterialButton)this.findViewById(2131362166); 
910	        MaterialButton materialButton3 = (MaterialButton)this.findViewById(2131362658); 
911	        MaterialButton materialButton4 = (MaterialButton)this.findViewById(2131362314); 
912	        MaterialButton materialButton5 = (MaterialButton)this.findViewById(2131362168); 
913	        linearLayout = (MaterialButton)this.findViewById(2131362169); 
914	        MaterialButton materialButton6 = (MaterialButton)this.findViewById(2131361848); 
915	        MaterialButton materialButton7 = (MaterialButton)this.findViewById(2131361850); 
916	        MaterialButton materialButton8 = (MaterialButton)this.findViewById(2131361852); 
917	        MaterialButton materialButton9 = (MaterialButton)this.findViewById(2131361855); 
918	        MaterialButton materialButton10 = (MaterialButton)this.findViewById(2131361853); 
919	        if (Shell.rootAccess()) { 
920	            materialButton6.setText((CharSequence)Deobfuscator$app$Debug.getString(-10038062418316L)); 
921	            materialButton7.setText((CharSequence)Deobfuscator$app$Debug.getString(-10063832222092L)); 
922	            materialButton8.setText((CharSequence)Deobfuscator$app$Debug.getString(-10089602025868L)); 
923	            materialButton9.setText((CharSequence)Deobfuscator$app$Debug.getString(-10115371829644L)); 
924	            materialButton10.setText((CharSequence)Deobfuscator$app$Debug.getString(-10141141633420L)); 
925	        } 
926	        materialButton10 = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-10166911437196L), 0); 
927	        materialButton6 = materialButton10.edit(); 
928	        boolean bl = materialButton10.getBoolean(Deobfuscator$app$Debug.getString(-10205566142860L), true); 
929	        boolean bl2 = materialButton10.getBoolean(Deobfuscator$app$Debug.getString(-10265695685004L), false); 
930	        boolean bl3 = materialButton10.getBoolean(Deobfuscator$app$Debug.getString(-10330120194444L), true); 
931	        if (bl) { 
932	            materialButton.setTextColor(this.getResources().getColor(2131099692)); 
933	            materialButton.setIconTintResource(2131099692); 
934	            materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
935	            materialButton2.setIconTintResource(2131099689); 
936	        } else { 
937	            materialButton2.setTextColor(this.getResources().getColor(2131099692)); 
938	            materialButton2.setIconTintResource(2131099692); 
939	            materialButton.setTextColor(this.getResources().getColor(2131099689)); 
940	            materialButton.setIconTintResource(2131099689); 
941	        } 
942	        if (!bl2) { 
943	            materialButton3.setTextColor(this.getResources().getColor(2131099692)); 
944	            materialButton3.setIconTintResource(2131099692); 
945	            materialButton4.setTextColor(this.getResources().getColor(2131099689)); 
946	            materialButton4.setIconTintResource(2131099689); 
947	        } else { 
948	            materialButton4.setTextColor(this.getResources().getColor(2131099692)); 
949	            materialButton4.setIconTintResource(2131099692); 
950	            materialButton3.setTextColor(this.getResources().getColor(2131099689)); 
951	            materialButton3.setIconTintResource(2131099689); 
952	        } 
953	        if (bl3) { 
954	            materialButton5.setTextColor(this.getResources().getColor(2131099692)); 
955	            materialButton5.setIconTintResource(2131099692); 
956	            linearLayout.setTextColor(this.getResources().getColor(2131099689)); 
957	            linearLayout.setIconTintResource(2131099689); 
958	            textView.setText(2131951630); 
959	        } else { 
960	            linearLayout.setTextColor(this.getResources().getColor(2131099692)); 
961	            linearLayout.setIconTintResource(2131099692); 
962	            materialButton5.setTextColor(this.getResources().getColor(2131099689)); 
963	            materialButton5.setIconTintResource(2131099689); 
964	            textView.setText(2131951619); 
965	        } 
966	        materialButton.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda25(this, materialButton, materialButton2, (SharedPreferences.Editor)materialButton6)); 
967	        materialButton2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda26(this, materialButton2, materialButton, (SharedPreferences.Editor)materialButton6)); 
968	        materialButton3.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda27(this, materialButton3, materialButton4, (SharedPreferences.Editor)materialButton6)); 
969	        materialButton4.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda28(this, materialButton4, materialButton3, (SharedPreferences.Editor)materialButton6)); 
970	        materialButton5.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda29(this, materialButton5, (MaterialButton)linearLayout, textView, (SharedPreferences.Editor)materialButton6)); 
971	        linearLayout.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda30(this, (MaterialButton)linearLayout, materialButton5, textView, (SharedPreferences.Editor)materialButton6)); 
972	        bypassmode = materialButton10.getString(Deobfuscator$app$Debug.getString(-10364479932812L), Deobfuscator$app$Debug.getString(-10411724573068L)); 
973	        textView = (MaterialButton)this.findViewById(2131362055); 
974	        this.updateBypassButton((MaterialButton)textView); 
975	        textView.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda31(this, (MaterialButton)textView, (SharedPreferences.Editor)materialButton6)); 
976	    } 
977	 
978	    void initMenu2() { 
979	        TextView textView = (TextView)this.findViewById(2131362760); 
980	        TextView textView2 = (TextView)this.findViewById(2131362328); 
981	        TextView textView3 = (TextView)this.findViewById(2131362121); 
982	        String string = Build.MANUFACTURER; 
983	        String string2 = Build.MODEL; 
984	        String string3 = Build.VERSION.RELEASE; 
985	        textView3.setText((CharSequence)(string + Deobfuscator$app$Debug.getString(-10441789344140L) + string2 + Deobfuscator$app$Debug.getString(-10450379278732L) + string3)); 
986	        textView.setText((CharSequence)(LoginActivity.PASSKEY + Deobfuscator$app$Debug.getString(-10501918886284L) + LoginActivity.USERKEY)); 
987	        if (LoginActivity.Kooontoool) { 
988	            textView2.setText((CharSequence)Deobfuscator$app$Debug.getString(-10510508820876L)); 
989	        } else { 
990	            textView2.setText((CharSequence)Deobfuscator$app$Debug.getString(-10544868559244L)); 
991	            this.findViewById(2131362187).setAlpha(0.5f); 
992	            this.findViewById(2131362228).setAlpha(0.5f); 
993	        } 
994	        string2 = (MaterialButton)this.findViewById(2131362489); 
995	        string2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda39(this, new boolean[]{false}, (MaterialButton)string2)); 
996	        ((MaterialButton)this.findViewById(2131361854)).setOnClickListener(new View.OnClickListener(this){ 
997	            final MainActivity this$0; 
998	            { 
999	                this.this$0 = mainActivity; 
1000	            } 
1001	 
1002	            static /* synthetic */ void lambda$onClick$0(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
1003	                if (alertDialog.getWindow() != null) { 
1004	                    alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
1005	                } 
1006	            } 
1007	 
1008	            public void onClick(View view) { 
1009	                view = new AlertDialog.Builder((Context)this.this$0); 
1010	                View view2 = this.this$0.getLayoutInflater().inflate(2131558442, null); 
1011	                String[] stringArray = (String[])view2.findViewById(2131362123); 
1012	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-7577046157708L)); 
1013	                stringArray.setTextColor(this.this$0.getResources().getColor(2131099692)); 
1014	                view.setCustomTitle(view2); 
1015	                stringArray = new String[]{Deobfuscator$app$Debug.getString(-7650060601740L), Deobfuscator$app$Debug.getString(-7680125372812L), Deobfuscator$app$Debug.getString(-7714485111180L)}; 
1016	                view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this.this$0, 2131558458, stringArray, stringArray){ 
1017	                    final 2 this$1; 
1018	                    final String[] val$options; 
1019	                    { 
1020	                        this.this$1 = var1_1; 
1021	                        this.val$options = stringArray2; 
1022	                        super(context, n, (Object[])stringArray); 
1023	                    } 
1024	 
1025	                    public View getView(int n, View view, ViewGroup viewGroup) { 
1026	                        view = super.getView(n, view, viewGroup); 
1027	                        viewGroup = (TextView)view.findViewById(2131362126); 
1028	                        viewGroup.setText((CharSequence)this.val$options[n]); 
1029	                        viewGroup.setTextColor(this.this$1.this$0.getResources().getColor(2131099689)); 
1030	                        return view; 
1031	                    } 
1032	                }, new DialogInterface.OnClickListener(this){ 
1033	                    final 2 this$1; 
1034	                    { 
1035	                        this.this$1 = var1_1; 
1036	                    } 
1037	 
1038	                    public void onClick(DialogInterface dialogInterface, int n) { 
1039	                        switch (n) { 
1040	                            default: { 
1041	                                break; 
1042	                            } 
1043	                            case 2: { 
1044	                                this.this$1.this$0.doShowProgress(true); 
1045	                                MainActivity.access$100(this.this$1.this$0, Deobfuscator$app$Debug.getString(-7491146811788L)); 
1046	                                break; 
1047	                            } 
1048	                            case 1: { 
1049	                                this.this$1.this$0.doShowProgress(true); 
1050	                                this.this$1.this$0.addAdditionalApp(false, Deobfuscator$app$Debug.getString(-7405247465868L)); 
1051	                                break; 
1052	                            } 
1053	                            case 0: { 
1054	                                ApkEnv.getInstance().launchApk(Deobfuscator$app$Debug.getString(-7319348119948L)); 
1055	                            } 
1056	                        } 
1057	                    } 
1058	                }); 
1059	                view = view.create(); 
1060	                stringArray = new ShapeDrawable(); 
1061	                float f = this.this$0.getResources().getDisplayMetrics().density * 4.0f; 
1062	                stringArray.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1063	                stringArray.getPaint().setColor(-1); 
1064	                view.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$2$$ExternalSyntheticLambda0((AlertDialog)view, (ShapeDrawable)stringArray)); 
1065	                view.show(); 
1066	            } 
1067	        }); 
1068	        ((MaterialButton)this.findViewById(2131361849)).setOnClickListener(new View.OnClickListener(this){ 
1069	            final MainActivity this$0; 
1070	            { 
1071	                this.this$0 = mainActivity; 
1072	            } 
1073	 
1074	            static /* synthetic */ void lambda$onClick$0(AlertDialog alertDialog, ShapeDrawable shapeDrawable, DialogInterface dialogInterface) { 
1075	                if (alertDialog.getWindow() != null) { 
1076	                    alertDialog.getWindow().setBackgroundDrawable((Drawable)shapeDrawable); 
1077	                } 
1078	            } 
1079	 
1080	            public void onClick(View view) { 
1081	                view = new AlertDialog.Builder((Context)this.this$0); 
1082	                String[] stringArray = this.this$0.getLayoutInflater().inflate(2131558442, null); 
1083	                TextView textView = (TextView)stringArray.findViewById(2131362123); 
1084	                textView.setText((CharSequence)Deobfuscator$app$Debug.getString(-7912053606796L)); 
1085	                textView.setTextColor(this.this$0.getResources().getColor(2131099692)); 
1086	                view.setCustomTitle((View)stringArray); 
1087	                stringArray = new String[]{Deobfuscator$app$Debug.getString(-7985068050828L), Deobfuscator$app$Debug.getString(-8015132821900L), Deobfuscator$app$Debug.getString(-8049492560268L)}; 
1088	                view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this.this$0, 2131558458, stringArray, stringArray){ 
1089	                    final 3 this$1; 
1090	                    final String[] val$options; 
1091	                    { 
1092	                        this.this$1 = var1_1; 
1093	                        this.val$options = stringArray2; 
1094	                        super(context, n, (Object[])stringArray); 
1095	                    } 
1096	 
1097	                    public View getView(int n, View view, ViewGroup viewGroup) { 
1098	                        view = super.getView(n, view, viewGroup); 
1099	                        viewGroup = (TextView)view.findViewById(2131362126); 
1100	                        viewGroup.setText((CharSequence)this.val$options[n]); 
1101	                        viewGroup.setTextColor(this.this$1.this$0.getResources().getColor(2131099689)); 
1102	                        return view; 
1103	                    } 
1104	                }, new DialogInterface.OnClickListener(this){ 
1105	                    final 3 this$1; 
1106	                    { 
1107	                        this.this$1 = var1_1; 
1108	                    } 
1109	 
1110	                    public void onClick(DialogInterface dialogInterface, int n) { 
1111	                        switch (n) { 
1112	                            default: { 
1113	                                break; 
1114	                            } 
1115	                            case 2: { 
1116	                                this.this$1.this$0.doShowProgress(true); 
1117	                                MainActivity.access$100(this.this$1.this$0, Deobfuscator$app$Debug.getString(-7860513999244L)); 
1118	                                break; 
1119	                            } 
1120	                            case 1: { 
1121	                                this.this$1.this$0.doShowProgress(true); 
1122	                                this.this$1.this$0.addAdditionalApp(false, Deobfuscator$app$Debug.getString(-7808974391692L)); 
1123	                                break; 
1124	                            } 
1125	                            case 0: { 
1126	                                ApkEnv.getInstance().launchApk(Deobfuscator$app$Debug.getString(-7757434784140L)); 
1127	                            } 
1128	                        } 
1129	                    } 
1130	                }); 
1131	                stringArray = view.create(); 
1132	                view = new ShapeDrawable(); 
1133	                float f = this.this$0.getResources().getDisplayMetrics().density * 4.0f; 
1134	                view.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1135	                view.getPaint().setColor(-1); 
1136	                stringArray.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$3$$ExternalSyntheticLambda0((AlertDialog)stringArray, (ShapeDrawable)view)); 
1137	                stringArray.show(); 
1138	            } 
1139	        }); 
1140	        string2 = (MaterialButton)this.findViewById(2131361848); 
1141	        string2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda40(this, Deobfuscator$app$Debug.getString(-10566343395724L), (MaterialButton)string2)); 
1142	        string2 = (MaterialButton)this.findViewById(2131361850); 
1143	        string2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda41(this, Deobfuscator$app$Debug.getString(-10639357839756L), (MaterialButton)string2)); 
1144	        string2 = (MaterialButton)this.findViewById(2131361852); 
1145	        string2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda42(this, Deobfuscator$app$Debug.getString(-10703782349196L), (MaterialButton)string2)); 
1146	        string2 = (MaterialButton)this.findViewById(2131361855); 
1147	        string2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda43(this, Deobfuscator$app$Debug.getString(-10781091760524L), (MaterialButton)string2)); 
1148	        string2 = (MaterialButton)this.findViewById(2131361853); 
1149	        string2.setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda44(this, Deobfuscator$app$Debug.getString(-10862696139148L), (MaterialButton)string2)); 
1150	        string = this.getSharedPreferences(Deobfuscator$app$Debug.getString(-10931415615884L), 0); 
1151	        string2 = string.edit(); 
1152	        int n = string.getInt(Deobfuscator$app$Debug.getString(-10970070321548L), 0); 
1153	        string = (MaterialButton)this.findViewById(2131362228); 
1154	        if (n == 1) { 
1155	            string.setTextColor(this.getResources().getColor(2131099763)); 
1156	            string.setIconTintResource(2131099763); 
1157	        } else { 
1158	            string.setTextColor(this.getResources().getColor(2131099692)); 
1159	            string.setIconTintResource(2131099692); 
1160	        } 
1161	        this.findViewById(2131362228).setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda1(this, (MaterialButton)string, (SharedPreferences.Editor)string2)); 
1162	        this.findViewById(2131362187).setOnClickListener((View.OnClickListener)new MainActivity$$ExternalSyntheticLambda2(this)); 
1163	    } 
1164	 
1165	    public boolean isInstalled(String string) { 
1166	        try { 
1167	            boolean bl = MetaPackageManager.isInnerAppInstalled(string); 
1168	            return bl; 
1169	        } 
1170	        catch (Exception exception) { 
1171	            throw new RuntimeException((Throwable)exception); 
1172	        } 
1173	    } 
1174	 
1175	    public boolean isRunning(String string) { 
1176	        try { 
1177	            boolean bl = MetaActivityManager.isAppRunning(string, 0); 
1178	            return bl; 
1179	        } 
1180	        catch (Exception exception) { 
1181	            throw new RuntimeException((Throwable)exception); 
1182	        } 
1183	    } 
1184	 
1185	    /* synthetic */ void lambda$SettingESP$38$pubgm-loader-activity-MainActivity(View view) { 
1186	        try { 
1187	            this.importSharedPreferences(); 
1188	        } 
1189	        catch (IOException iOException) { 
1190	            iOException.printStackTrace(); 
1191	            Toast.makeText((Context)this, (CharSequence)Deobfuscator$app$Debug.getString(-15531325589900L), (int)0).show(); 
1192	        } 
1193	    } 
1194	 
1195	    /* synthetic */ void lambda$SettingESP$39$pubgm-loader-activity-MainActivity(View view) { 
1196	        try { 
1197	            this.exportSharedPreferences(); 
1198	        } 
1199	        catch (IOException iOException) { 
1200	            iOException.printStackTrace(); 
1201	            Toast.makeText((Context)this, (CharSequence)Deobfuscator$app$Debug.getString(-15458311145868L), (int)0).show(); 
1202	        } 
1203	    } 
1204	 
1205	    /* synthetic */ void lambda$SettingESP$40$pubgm-loader-activity-MainActivity(View view) { 
1206	        this.resetSharedPreferences(); 
1207	        Toast.makeText((Context)this, (CharSequence)Deobfuscator$app$Debug.getString(-15398181603724L), (int)0).show(); 
1208	    } 
1209	 
1210	    /* synthetic */ void lambda$init$41$pubgm-loader-activity-MainActivity(LinearLayout linearLayout, LinearLayout linearLayout2, TextView textView, TextView textView2, ImageView imageView, ImageView imageView2, View view) { 
1211	        linearLayout.setVisibility(0); 
1212	        linearLayout2.setVisibility(8); 
1213	        textView.setTextColor(this.getResources().getColor(2131099692)); 
1214	        textView2.setTextColor(this.getResources().getColor(2131099762)); 
1215	        imageView.setBackgroundResource(2131231099); 
1216	        imageView2.setBackgroundResource(2131231264); 
1217	    } 
1218	 
1219	    /* synthetic */ void lambda$init$42$pubgm-loader-activity-MainActivity(LinearLayout linearLayout, LinearLayout linearLayout2, TextView textView, TextView textView2, ImageView imageView, ImageView imageView2, View view) { 
1220	        linearLayout.setVisibility(8); 
1221	        linearLayout2.setVisibility(0); 
1222	        textView.setTextColor(this.getResources().getColor(2131099762)); 
1223	        textView2.setTextColor(this.getResources().getColor(2131099692)); 
1224	        imageView.setBackgroundResource(2131231100); 
1225	        imageView2.setBackgroundResource(2131231098); 
1226	    } 
1227	 
1228	    /* synthetic */ void lambda$initMenu1$0$pubgm-loader-activity-MainActivity(MaterialButton materialButton, MaterialButton materialButton2, SharedPreferences.Editor editor, View view) { 
1229	        bitversi = 64; 
1230	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1231	        materialButton.setIconTintResource(2131099692); 
1232	        materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
1233	        materialButton2.setIconTintResource(2131099689); 
1234	        editor.putBoolean(Deobfuscator$app$Debug.getString(-18593637271948L), true).apply(); 
1235	    } 
1236	 
1237	    /* synthetic */ void lambda$initMenu1$1$pubgm-loader-activity-MainActivity(MaterialButton materialButton, MaterialButton materialButton2, SharedPreferences.Editor editor, View view) { 
1238	        bitversi = 32; 
1239	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1240	        materialButton.setIconTintResource(2131099692); 
1241	        materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
1242	        materialButton2.setIconTintResource(2131099689); 
1243	        editor.putBoolean(Deobfuscator$app$Debug.getString(-18533507729804L), false).apply(); 
1244	    } 
1245	 
1246	    /* synthetic */ void lambda$initMenu1$2$pubgm-loader-activity-MainActivity(MaterialButton materialButton, MaterialButton materialButton2, SharedPreferences.Editor editor, View view) { 
1247	        kernel = false; 
1248	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1249	        materialButton.setIconTintResource(2131099692); 
1250	        materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
1251	        materialButton2.setIconTintResource(2131099689); 
1252	        editor.putBoolean(Deobfuscator$app$Debug.getString(-18469083220364L), false).apply(); 
1253	    } 
1254	 
1255	    /* synthetic */ void lambda$initMenu1$3$pubgm-loader-activity-MainActivity(MaterialButton materialButton, MaterialButton materialButton2, SharedPreferences.Editor editor, View view) { 
1256	        kernel = true; 
1257	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1258	        materialButton.setIconTintResource(2131099692); 
1259	        materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
1260	        materialButton2.setIconTintResource(2131099689); 
1261	        editor.putBoolean(Deobfuscator$app$Debug.getString(-18404658710924L), true).apply(); 
1262	    } 
1263	 
1264	    /* synthetic */ void lambda$initMenu1$4$pubgm-loader-activity-MainActivity(MaterialButton materialButton, MaterialButton materialButton2, TextView textView, SharedPreferences.Editor editor, View view) { 
1265	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1266	        materialButton.setIconTintResource(2131099692); 
1267	        materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
1268	        materialButton2.setIconTintResource(2131099689); 
1269	        textView.setText(2131951630); 
1270	        modestatus = false; 
1271	        editor.putBoolean(Deobfuscator$app$Debug.getString(-18370298972556L), true).apply(); 
1272	    } 
1273	 
1274	    /* synthetic */ void lambda$initMenu1$5$pubgm-loader-activity-MainActivity(MaterialButton materialButton, MaterialButton materialButton2, TextView textView, SharedPreferences.Editor editor, View view) { 
1275	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1276	        materialButton.setIconTintResource(2131099692); 
1277	        materialButton2.setTextColor(this.getResources().getColor(2131099689)); 
1278	        materialButton2.setIconTintResource(2131099689); 
1279	        textView.setText(2131951619); 
1280	        modestatus = true; 
1281	        editor.putBoolean(Deobfuscator$app$Debug.getString(-18335939234188L), false).apply(); 
1282	    } 
1283	 
1284	    /* synthetic */ void lambda$initMenu1$6$pubgm-loader-activity-MainActivity(MaterialButton materialButton, SharedPreferences.Editor editor, View view) { 
1285	        bypassmode = bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-18185615378828L)) ? Deobfuscator$app$Debug.getString(-18215680149900L) : Deobfuscator$app$Debug.getString(-18258629822860L); 
1286	        this.updateBypassButton(materialButton); 
1287	        editor.putString(Deobfuscator$app$Debug.getString(-18288694593932L), bypassmode); 
1288	        editor.apply(); 
1289	    } 
1290	 
1291	    /* synthetic */ void lambda$initMenu2$10$pubgm-loader-activity-MainActivity(boolean bl, String string, DialogInterface dialogInterface, int n) { 
1292	        switch (n) { 
1293	            default: { 
1294	                break; 
1295	            } 
1296	            case 2: { 
1297	                this.doShowProgress(true); 
1298	                this.unInstallWithDellay(string); 
1299	                break; 
1300	            } 
1301	            case 1: { 
1302	                this.doShowProgress(true); 
1303	                if (!fixinstallint) { 
1304	                    FileHelper.tryInstallWithCopyObb(this, this.getProgresBar(), string); 
1305	                    break; 
1306	                } 
1307	                PermissionUtils.openobb((Activity)this, 1, string); 
1308	                break; 
1309	            } 
1310	            case 0: { 
1311	                if (bl) { 
1312	                    this.stopRunningApp(string); 
1313	                    break; 
1314	                } 
1315	                this.launchApk(string); 
1316	                this.tryAddLoader(string); 
1317	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda0(this, string), 3000L); 
1318	            } 
1319	        } 
1320	    } 
1321	 
1322	    /* synthetic */ void lambda$initMenu2$12$pubgm-loader-activity-MainActivity(String string, MaterialButton stringArray, View view) { 
1323	        gameint = 5; 
1324	        game = string; 
1325	        if (Shell.rootAccess()) { 
1326	            if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-17657334401420L))) { 
1327	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-17683104205196L)); 
1328	                stringArray = this.getPackageManager().getLaunchIntentForPackage(string); 
1329	                if (stringArray != null) { 
1330	                    this.startActivity((Intent)stringArray); 
1331	                } else { 
1332	                    MainActivity.toastImage(2131231090, string + this.getString(2131952191)); 
1333	                } 
1334	                this.launchbypass(); 
1335	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda7(), 3000L); 
1336	            } else if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-17704579041676L))) { 
1337	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-17726053878156L)); 
1338	                this.stopPatcher(); 
1339	            } 
1340	        } else { 
1341	            view = new AlertDialog.Builder((Context)this); 
1342	            View view2 = this.getLayoutInflater().inflate(2131558442, null); 
1343	            stringArray = (TextView)view2.findViewById(2131362123); 
1344	            stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-17751823681932L)); 
1345	            stringArray.setTextColor(this.getResources().getColor(2131099692)); 
1346	            view.setCustomTitle(view2); 
1347	            boolean bl = this.isRunning(string); 
1348	            stringArray = bl ? new String[]{Deobfuscator$app$Debug.getString(-17824838125964L), Deobfuscator$app$Debug.getString(-17863492831628L), Deobfuscator$app$Debug.getString(-17897852569996L)} : new String[]{Deobfuscator$app$Debug.getString(-17940802242956L), Deobfuscator$app$Debug.getString(-17970867014028L), Deobfuscator$app$Debug.getString(-18005226752396L)}; 
1349	            view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this, 2131558458, stringArray, stringArray){ 
1350	                final MainActivity this$0; 
1351	                final String[] val$options; 
1352	                { 
1353	                    this.this$0 = mainActivity; 
1354	                    this.val$options = stringArray2; 
1355	                    super(context, n, (Object[])stringArray); 
1356	                } 
1357	 
1358	                public View getView(int n, View view, ViewGroup viewGroup) { 
1359	                    viewGroup = super.getView(n, view, viewGroup); 
1360	                    view = (TextView)viewGroup.findViewById(2131362126); 
1361	                    view.setText((CharSequence)this.val$options[n]); 
1362	                    view.setTextColor(this.this$0.getResources().getColor(2131099689)); 
1363	                    return viewGroup; 
1364	                } 
1365	            }, (DialogInterface.OnClickListener)new MainActivity$$ExternalSyntheticLambda8(this, bl, string)); 
1366	            string = view.create(); 
1367	            stringArray = new ShapeDrawable(); 
1368	            float f = this.getResources().getDisplayMetrics().density * 4.0f; 
1369	            stringArray.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1370	            stringArray.getPaint().setColor(-1); 
1371	            string.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$$ExternalSyntheticLambda9((AlertDialog)string, (ShapeDrawable)stringArray)); 
1372	            string.show(); 
1373	        } 
1374	    } 
1375	 
1376	    /* synthetic */ void lambda$initMenu2$13$pubgm-loader-activity-MainActivity(String string) { 
1377	        if (this.isRunning(string) && bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-17614384728460L))) { 
1378	            this.launchbypassNoRoot(); 
1379	        } 
1380	    } 
1381	 
1382	    /* synthetic */ void lambda$initMenu2$14$pubgm-loader-activity-MainActivity(boolean bl, String string, DialogInterface dialogInterface, int n) { 
1383	        switch (n) { 
1384	            default: { 
1385	                break; 
1386	            } 
1387	            case 2: { 
1388	                this.doShowProgress(true); 
1389	                this.unInstallWithDellay(string); 
1390	                break; 
1391	            } 
1392	            case 1: { 
1393	                this.doShowProgress(true); 
1394	                if (!fixinstallint) { 
1395	                    FileHelper.tryInstallWithCopyObb(this, this.getProgresBar(), string); 
1396	                    break; 
1397	                } 
1398	                PermissionUtils.openobb((Activity)this, 1, string); 
1399	                break; 
1400	            } 
1401	            case 0: { 
1402	                if (bl) { 
1403	                    this.stopRunningApp(string); 
1404	                    break; 
1405	                } 
1406	                this.launchApk(string); 
1407	                this.tryAddLoader(string); 
1408	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda3(this, string), 3000L); 
1409	            } 
1410	        } 
1411	    } 
1412	 
1413	    /* synthetic */ void lambda$initMenu2$16$pubgm-loader-activity-MainActivity(String string, MaterialButton stringArray, View view) { 
1414	        gameint = 1; 
1415	        game = string; 
1416	        if (Shell.rootAccess()) { 
1417	            if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-17223542704524L))) { 
1418	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-17249312508300L)); 
1419	                stringArray = this.getPackageManager().getLaunchIntentForPackage(string); 
1420	                if (stringArray != null) { 
1421	                    this.startActivity((Intent)stringArray); 
1422	                } else { 
1423	                    MainActivity.toastImage(2131231090, string + this.getString(2131952191)); 
1424	                    this.stopPatcher(); 
1425	                } 
1426	                this.launchbypass(); 
1427	            } else if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-17270787344780L))) { 
1428	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-17292262181260L)); 
1429	                this.stopPatcher(); 
1430	            } 
1431	        } else { 
1432	            view = new AlertDialog.Builder((Context)this); 
1433	            stringArray = this.getLayoutInflater().inflate(2131558442, null); 
1434	            TextView textView = (TextView)stringArray.findViewById(2131362123); 
1435	            textView.setText((CharSequence)Deobfuscator$app$Debug.getString(-17318031985036L)); 
1436	            textView.setTextColor(this.getResources().getColor(2131099692)); 
1437	            view.setCustomTitle((View)stringArray); 
1438	            boolean bl = this.isRunning(string); 
1439	            stringArray = bl ? new String[]{Deobfuscator$app$Debug.getString(-17391046429068L), Deobfuscator$app$Debug.getString(-17429701134732L), Deobfuscator$app$Debug.getString(-17464060873100L)} : new String[]{Deobfuscator$app$Debug.getString(-17507010546060L), Deobfuscator$app$Debug.getString(-17537075317132L), Deobfuscator$app$Debug.getString(-17571435055500L)}; 
1440	            view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this, 2131558458, stringArray, stringArray){ 
1441	                final MainActivity this$0; 
1442	                final String[] val$options; 
1443	                { 
1444	                    this.this$0 = mainActivity; 
1445	                    this.val$options = stringArray2; 
1446	                    super(context, n, (Object[])stringArray); 
1447	                } 
1448	 
1449	                public View getView(int n, View view, ViewGroup viewGroup) { 
1450	                    view = super.getView(n, view, viewGroup); 
1451	                    viewGroup = (TextView)view.findViewById(2131362126); 
1452	                    viewGroup.setText((CharSequence)this.val$options[n]); 
1453	                    viewGroup.setTextColor(this.this$0.getResources().getColor(2131099689)); 
1454	                    return view; 
1455	                } 
1456	            }, (DialogInterface.OnClickListener)new MainActivity$$ExternalSyntheticLambda15(this, bl, string)); 
1457	            string = view.create(); 
1458	            stringArray = new ShapeDrawable(); 
1459	            float f = this.getResources().getDisplayMetrics().density * 4.0f; 
1460	            stringArray.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1461	            stringArray.getPaint().setColor(-1); 
1462	            string.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$$ExternalSyntheticLambda16((AlertDialog)string, (ShapeDrawable)stringArray)); 
1463	            string.show(); 
1464	        } 
1465	    } 
1466	 
1467	    /* synthetic */ void lambda$initMenu2$18$pubgm-loader-activity-MainActivity(String string) { 
1468	        if (this.isRunning(string) && bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-17180593031564L))) { 
1469	            this.launchbypassNoRoot(); 
1470	        } 
1471	    } 
1472	 
1473	    /* synthetic */ void lambda$initMenu2$19$pubgm-loader-activity-MainActivity(boolean bl, String string, DialogInterface dialogInterface, int n) { 
1474	        switch (n) { 
1475	            default: { 
1476	                break; 
1477	            } 
1478	            case 2: { 
1479	                this.doShowProgress(true); 
1480	                this.unInstallWithDellay(string); 
1481	                break; 
1482	            } 
1483	            case 1: { 
1484	                this.doShowProgress(true); 
1485	                if (!fixinstallint) { 
1486	                    FileHelper.tryInstallWithCopyObb(this, this.getProgresBar(), string); 
1487	                    break; 
1488	                } 
1489	                PermissionUtils.openobb((Activity)this, 1, string); 
1490	                break; 
1491	            } 
1492	            case 0: { 
1493	                if (bl) { 
1494	                    this.stopRunningApp(string); 
1495	                    break; 
1496	                } 
1497	                this.launchApk(string); 
1498	                this.tryAddLoader(string); 
1499	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda17(this, string), 3000L); 
1500	            } 
1501	        } 
1502	    } 
1503	 
1504	    /* synthetic */ void lambda$initMenu2$21$pubgm-loader-activity-MainActivity(String string, MaterialButton stringArray, View view) { 
1505	        gameint = 2; 
1506	        game = string; 
1507	        if (Shell.rootAccess()) { 
1508	            if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-16789751007628L))) { 
1509	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-16815520811404L)); 
1510	                stringArray = this.getPackageManager().getLaunchIntentForPackage(string); 
1511	                if (stringArray != null) { 
1512	                    this.startActivity((Intent)stringArray); 
1513	                } else { 
1514	                    MainActivity.toastImage(2131231090, string + this.getString(2131952191)); 
1515	                } 
1516	                this.launchbypass(); 
1517	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda35(), 3000L); 
1518	            } else if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-16836995647884L))) { 
1519	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-16858470484364L)); 
1520	            } 
1521	        } else { 
1522	            view = new AlertDialog.Builder((Context)this); 
1523	            View view2 = this.getLayoutInflater().inflate(2131558442, null); 
1524	            stringArray = (TextView)view2.findViewById(2131362123); 
1525	            stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-16884240288140L)); 
1526	            stringArray.setTextColor(this.getResources().getColor(2131099692)); 
1527	            view.setCustomTitle(view2); 
1528	            boolean bl = this.isRunning(string); 
1529	            stringArray = bl ? new String[]{Deobfuscator$app$Debug.getString(-16957254732172L), Deobfuscator$app$Debug.getString(-16995909437836L), Deobfuscator$app$Debug.getString(-17030269176204L)} : new String[]{Deobfuscator$app$Debug.getString(-17073218849164L), Deobfuscator$app$Debug.getString(-17103283620236L), Deobfuscator$app$Debug.getString(-17137643358604L)}; 
1530	            view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this, 2131558458, stringArray, stringArray){ 
1531	                final MainActivity this$0; 
1532	                final String[] val$options; 
1533	                { 
1534	                    this.this$0 = mainActivity; 
1535	                    this.val$options = stringArray2; 
1536	                    super(context, n, (Object[])stringArray); 
1537	                } 
1538	 
1539	                public View getView(int n, View view, ViewGroup viewGroup) { 
1540	                    view = super.getView(n, view, viewGroup); 
1541	                    viewGroup = (TextView)view.findViewById(2131362126); 
1542	                    viewGroup.setText((CharSequence)this.val$options[n]); 
1543	                    viewGroup.setTextColor(this.this$0.getResources().getColor(2131099689)); 
1544	                    return view; 
1545	                } 
1546	            }, (DialogInterface.OnClickListener)new MainActivity$$ExternalSyntheticLambda36(this, bl, string)); 
1547	            stringArray = view.create(); 
1548	            string = new ShapeDrawable(); 
1549	            float f = this.getResources().getDisplayMetrics().density * 4.0f; 
1550	            string.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1551	            string.getPaint().setColor(-1); 
1552	            stringArray.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$$ExternalSyntheticLambda37((AlertDialog)stringArray, (ShapeDrawable)string)); 
1553	            stringArray.show(); 
1554	        } 
1555	    } 
1556	 
1557	    /* synthetic */ void lambda$initMenu2$22$pubgm-loader-activity-MainActivity() { 
1558	        this.startPatcher(); 
1559	    } 
1560	 
1561	    /* synthetic */ void lambda$initMenu2$23$pubgm-loader-activity-MainActivity(String string) { 
1562	        if (this.isRunning(string) && bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-16746801334668L))) { 
1563	            this.launchbypassNoRoot(); 
1564	        } 
1565	    } 
1566	 
1567	    /* synthetic */ void lambda$initMenu2$24$pubgm-loader-activity-MainActivity(boolean bl, String string, DialogInterface dialogInterface, int n) { 
1568	        switch (n) { 
1569	            default: { 
1570	                break; 
1571	            } 
1572	            case 2: { 
1573	                this.doShowProgress(true); 
1574	                this.unInstallWithDellay(string); 
1575	                break; 
1576	            } 
1577	            case 1: { 
1578	                this.doShowProgress(true); 
1579	                if (!fixinstallint) { 
1580	                    FileHelper.tryInstallWithCopyObb(this, this.getProgresBar(), string); 
1581	                    break; 
1582	                } 
1583	                PermissionUtils.openobb((Activity)this, 1, string); 
1584	                break; 
1585	            } 
1586	            case 0: { 
1587	                if (bl) { 
1588	                    this.stopRunningApp(string); 
1589	                    break; 
1590	                } 
1591	                this.launchApk(string); 
1592	                this.tryAddLoader(string); 
1593	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda38(this, string), 3000L); 
1594	            } 
1595	        } 
1596	    } 
    synthetic */ void lambda$initMenu2$26$pubgm-loader-activity-MainActivity(String string, MaterialButton stringArray, View view) { 
1599	        gameint = 3; 
1600	        game = string; 
1601	        if (Shell.rootAccess()) { 
1602	            if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-16355959310732L))) { 
1603	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-16381729114508L)); 
1604	                stringArray = this.getPackageManager().getLaunchIntentForPackage(string); 
1605	                if (stringArray != null) { 
1606	                    this.startActivity((Intent)stringArray); 
1607	                } else { 
1608	                    MainActivity.toastImage(2131231090, string + this.getString(2131952191)); 
1609	                } 
1610	                this.launchbypass(); 
1611	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda4(this), 3000L); 
1612	            } else if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-16403203950988L))) { 
1613	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-16424678787468L)); 
1614	                this.stopPatcher(); 
1615	            } 
1616	        } else { 
1617	            view = new AlertDialog.Builder((Context)this); 
1618	            stringArray = this.getLayoutInflater().inflate(2131558442, null); 
1619	            TextView textView = (TextView)stringArray.findViewById(2131362123); 
1620	            textView.setText((CharSequence)Deobfuscator$app$Debug.getString(-16450448591244L)); 
1621	            textView.setTextColor(this.getResources().getColor(2131099692)); 
1622	            view.setCustomTitle((View)stringArray); 
1623	            boolean bl = this.isRunning(string); 
1624	            stringArray = bl ? new String[]{Deobfuscator$app$Debug.getString(-16523463035276L), Deobfuscator$app$Debug.getString(-16562117740940L), Deobfuscator$app$Debug.getString(-16596477479308L)} : new String[]{Deobfuscator$app$Debug.getString(-16639427152268L), Deobfuscator$app$Debug.getString(-16669491923340L), Deobfuscator$app$Debug.getString(-16703851661708L)}; 
1625	            view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this, 2131558458, stringArray, stringArray){ 
1626	                final MainActivity this$0; 
1627	                final String[] val$options; 
1628	                { 
1629	                    this.this$0 = mainActivity; 
1630	                    this.val$options = stringArray2; 
1631	                    super(context, n, (Object[])stringArray); 
1632	                } 
1633	 
1634	                public View getView(int n, View view, ViewGroup viewGroup) { 
1635	                    viewGroup = super.getView(n, view, viewGroup); 
1636	                    view = (TextView)viewGroup.findViewById(2131362126); 
1637	                    view.setText((CharSequence)this.val$options[n]); 
1638	                    view.setTextColor(this.this$0.getResources().getColor(2131099689)); 
1639	                    return viewGroup; 
1640	                } 
1641	            }, (DialogInterface.OnClickListener)new MainActivity$$ExternalSyntheticLambda5(this, bl, string)); 
1642	            string = view.create(); 
1643	            stringArray = new ShapeDrawable(); 
1644	            float f = this.getResources().getDisplayMetrics().density * 4.0f; 
1645	            stringArray.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1646	            stringArray.getPaint().setColor(-1); 
1647	            string.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$$ExternalSyntheticLambda6((AlertDialog)string, (ShapeDrawable)stringArray)); 
1648	            string.show(); 
1649	        } 
1650	    } 
1651	 
1652	    /* synthetic */ void lambda$initMenu2$27$pubgm-loader-activity-MainActivity() { 
1653	        this.startPatcher(); 
1654	    } 
1655	 
1656	    /* synthetic */ void lambda$initMenu2$28$pubgm-loader-activity-MainActivity(String string) { 
1657	        if (this.isRunning(string) && bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-16313009637772L))) { 
1658	            this.launchbypassNoRoot(); 
1659	        } 
1660	    } 
1661	 
1662	    /* synthetic */ void lambda$initMenu2$29$pubgm-loader-activity-MainActivity(boolean bl, String string, DialogInterface dialogInterface, int n) { 
1663	        switch (n) { 
1664	            default: { 
1665	                break; 
1666	            } 
1667	            case 2: { 
1668	                this.doShowProgress(true); 
1669	                this.unInstallWithDellay(string); 
1670	                break; 
1671	            } 
1672	            case 1: { 
1673	                this.doShowProgress(true); 
1674	                if (!fixinstallint) { 
1675	                    FileHelper.tryInstallWithCopyObb(this, this.getProgresBar(), string); 
1676	                    break; 
1677	                } 
1678	                PermissionUtils.openobb((Activity)this, 1, string); 
1679	                break; 
1680	            } 
1681	            case 0: { 
1682	                if (bl) { 
1683	                    this.stopRunningApp(string); 
1684	                    break; 
1685	                } 
1686	                this.launchApk(string); 
1687	                this.tryAddLoader(string); 
1688	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda24(this, string), 3000L); 
1689	            } 
1690	        } 
1691	    } 
1692	 
1693	    /* synthetic */ void lambda$initMenu2$31$pubgm-loader-activity-MainActivity(String string, MaterialButton stringArray, View view) { 
1694	        gameint = 4; 
1695	        game = string; 
1696	        if (Shell.rootAccess()) { 
1697	            if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-15922167613836L))) { 
1698	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-15947937417612L)); 
1699	                stringArray = this.getPackageManager().getLaunchIntentForPackage(string); 
1700	                if (stringArray != null) { 
1701	                    this.startActivity((Intent)stringArray); 
1702	                } else { 
1703	                    MainActivity.toastImage(2131231090, string + this.getString(2131952191)); 
1704	                } 
1705	                this.launchbypass(); 
1706	                new Handler(Looper.getMainLooper()).postDelayed((Runnable)new MainActivity$$ExternalSyntheticLambda20(this), 3000L); 
1707	            } else if (stringArray.getText().toString().equals((Object)Deobfuscator$app$Debug.getString(-15969412254092L))) { 
1708	                stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-15990887090572L)); 
1709	            } 
1710	        } else { 
1711	            view = new AlertDialog.Builder((Context)this); 
1712	            View view2 = this.getLayoutInflater().inflate(2131558442, null); 
1713	            stringArray = (TextView)view2.findViewById(2131362123); 
1714	            stringArray.setText((CharSequence)Deobfuscator$app$Debug.getString(-16016656894348L)); 
1715	            stringArray.setTextColor(this.getResources().getColor(2131099692)); 
1716	            view.setCustomTitle(view2); 
1717	            boolean bl = this.isRunning(string); 
1718	            stringArray = bl ? new String[]{Deobfuscator$app$Debug.getString(-16089671338380L), Deobfuscator$app$Debug.getString(-16128326044044L), Deobfuscator$app$Debug.getString(-16162685782412L)} : new String[]{Deobfuscator$app$Debug.getString(-16205635455372L), Deobfuscator$app$Debug.getString(-16235700226444L), Deobfuscator$app$Debug.getString(-16270059964812L)}; 
1719	            view.setAdapter((ListAdapter)new ArrayAdapter<String>(this, (Context)this, 2131558458, stringArray, stringArray){ 
1720	                final MainActivity this$0; 
1721	                final String[] val$options; 
1722	                { 
1723	                    this.this$0 = mainActivity; 
1724	                    this.val$options = stringArray2; 
1725	                    super(context, n, (Object[])stringArray); 
1726	                } 
1727	 
1728	                public View getView(int n, View view, ViewGroup viewGroup) { 
1729	                    view = super.getView(n, view, viewGroup); 
1730	                    viewGroup = (TextView)view.findViewById(2131362126); 
1731	                    viewGroup.setText((CharSequence)this.val$options[n]); 
1732	                    viewGroup.setTextColor(this.this$0.getResources().getColor(2131099689)); 
1733	                    return view; 
1734	                } 
1735	            }, (DialogInterface.OnClickListener)new MainActivity$$ExternalSyntheticLambda21(this, bl, string)); 
1736	            string = view.create(); 
1737	            stringArray = new ShapeDrawable(); 
1738	            float f = this.getResources().getDisplayMetrics().density * 4.0f; 
1739	            stringArray.setShape((Shape)new RoundRectShape(new float[]{f, f, f, f, f, f, f, f}, null, null)); 
1740	            stringArray.getPaint().setColor(-1); 
1741	            string.setOnShowListener((DialogInterface.OnShowListener)new MainActivity$$ExternalSyntheticLambda23((AlertDialog)string, (ShapeDrawable)stringArray)); 
1742	            string.show(); 
1743	        } 
1744	    } 
1745	 
1746	    /* synthetic */ void lambda$initMenu2$32$pubgm-loader-activity-MainActivity(MaterialButton materialButton, SharedPreferences.Editor editor, View view) { 
1747	        hiderecord = 1; 
1748	        materialButton.setTextColor(this.getResources().getColor(2131099763)); 
1749	        materialButton.setIconTintResource(2131099763); 
1750	        editor.putInt(Deobfuscator$app$Debug.getString(-15874922973580L), 1).apply(); 
1751	        this.dismissBottomSheetDialog(); 
1752	    } 
1753	 
1754	    /* synthetic */ void lambda$initMenu2$33$pubgm-loader-activity-MainActivity(MaterialButton materialButton, SharedPreferences.Editor editor, View view) { 
1755	        hiderecord = 0; 
1756	        materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1757	        materialButton.setIconTintResource(2131099692); 
1758	        editor.putInt(Deobfuscator$app$Debug.getString(-15827678333324L), 0).apply(); 
1759	        this.dismissBottomSheetDialog(); 
1760	    } 
1761	 
1762	    /* synthetic */ void lambda$initMenu2$34$pubgm-loader-activity-MainActivity(MaterialButton materialButton, SharedPreferences.Editor editor, View view) { 
1763	        if (LoginActivity.Kooontoool) { 
1764	            this.showBottomSheetDialog(this.getResources().getDrawable(2131231153), this.getString(2131951757), this.getString(2131952377), false, new MainActivity$$ExternalSyntheticLambda32(this, materialButton, editor), new MainActivity$$ExternalSyntheticLambda34(this, materialButton, editor)); 
1765	        } else { 
1766	            MainActivity.toastImage(2131231248, Deobfuscator$app$Debug.getString(-15716009183628L)); 
1767	        } 
1768	    } 
1769	 
1770	    /* synthetic */ void lambda$initMenu2$35$pubgm-loader-activity-MainActivity(View view) { 
1771	        fixinstallint = true; 
1772	        this.dismissBottomSheetDialog(); 
1773	    } 
1774	 
1775	    /* synthetic */ void lambda$initMenu2$36$pubgm-loader-activity-MainActivity(View view) { 
1776	        fixinstallint = false; 
1777	        this.dismissBottomSheetDialog(); 
1778	    } 
1779	 
1780	    /* synthetic */ void lambda$initMenu2$37$pubgm-loader-activity-MainActivity(View view) { 
1781	        if (LoginActivity.Kooontoool) { 
1782	            this.showBottomSheetDialog(this.getResources().getDrawable(2131231153), this.getString(2131951757), this.getString(2131952326), false, new MainActivity$$ExternalSyntheticLambda10(this), new MainActivity$$ExternalSyntheticLambda12(this)); 
1783	        } else { 
1784	            MainActivity.toastImage(2131231248, Deobfuscator$app$Debug.getString(-15604340033932L)); 
1785	        } 
1786	    } 
1787	 
1788	    /* synthetic */ void lambda$initMenu2$7$pubgm-loader-activity-MainActivity(boolean[] blArray, MaterialButton materialButton, View view) { 
1789	        if (!blArray[0]) { 
1790	            materialButton.setIcon(this.getResources().getDrawable(2131231265)); 
1791	            materialButton.setText((CharSequence)Deobfuscator$app$Debug.getString(-18091126098316L)); 
1792	            materialButton.setIconTint(this.getResources().getColorStateList(2131099692)); 
1793	            materialButton.setTextColor(this.getResources().getColor(2131099692)); 
1794	            this.startPatcher(); 
1795	            blArray[0] = true; 
1796	        } else { 
1797	            materialButton.setIcon(this.getResources().getDrawable(2131231266)); 
1798	            materialButton.setText((CharSequence)Deobfuscator$app$Debug.getString(-18138370738572L)); 
1799	            materialButton.setIconTint(this.getResources().getColorStateList(2131099763)); 
1800	            materialButton.setTextColor(this.getResources().getColor(2131099763)); 
1801	            this.stopPatcher(); 
1802	            blArray[0] = false; 
1803	        } 
1804	    } 
1805	 
1806	    /* synthetic */ void lambda$initMenu2$9$pubgm-loader-activity-MainActivity(String string) { 
1807	        if (this.isRunning(string)) { 
1808	            if (bypassmode.equals((Object)Deobfuscator$app$Debug.getString(-18048176425356L))) { 
1809	                this.launchbypassNoRoot(); 
1810	            } 
1811	        } else { 
1812	            this.stopPatcher(); 
1813	        } 
1814	    } 
1815	 
1816	    /* synthetic */ void lambda$unInstallWithDellay$43$pubgm-loader-activity-MainActivity(String string) { 
1817	        long l2 = System.currentTimeMillis(); 
1818	        this.unInstallApp(string); 
1819	        l2 = 500L - (System.currentTimeMillis() - l2); 
1820	        if (l2 > 0L) { 
1821	            UiKit.sleep(l2); 
1822	        } 
1823	    } 
1824	 
1825	    /* synthetic */ void lambda$unInstallWithDellay$44$pubgm-loader-activity-MainActivity(String string, Void void_) { 
1826	        this.doHideProgress(); 
1827	        MainActivity.toastImage(2131231073, string + Deobfuscator$app$Debug.getString(-15265037617548L)); 
1828	    } 
1829	 
1830	    public void launchApk(String string) { 
1831	        if (!this.isInstalled(string)) { 
1832	            BoxApplication.get().showToastWithImage(2131231151, Deobfuscator$app$Debug.getString(-12623632730508L)); 
1833	            return; 
1834	        } 
1835	        try { 
1836	            MetaActivityManager.launchApp(string); 
1837	            return; 
1838	        } 
1839	        catch (Exception exception) { 
1840	            throw new RuntimeException((Throwable)exception); 
1841	        } 
1842	    } 
1843	 
1844	    public void launchbypass() { 
1845	        new Handler().postDelayed(new Runnable(this){ 
1846	            final MainActivity this$0; 
1847	            { 
1848	                this.this$0 = mainActivity; 
1849	            } 
1850	 
1851	            public void run() { 
1852	                if (bitversi == 64) { 
1853	                    if (gameint >= 1 && gameint <= 4) { 
1854	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8161161709964L) + game + Deobfuscator$app$Debug.getString(-8208406350220L), this.this$0.getString(2131951741)); 
1855	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8212701317516L) + game + Deobfuscator$app$Debug.getString(-8264240925068L), this.this$0.getString(2131951741)); 
1856	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8268535892364L) + game + Deobfuscator$app$Debug.getString(-8315780532620L), this.this$0.getString(2131951741)); 
1857	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8320075499916L) + game + Deobfuscator$app$Debug.getString(-8354435238284L), this.this$0.getString(2131951741)); 
1858	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8358730205580L) + game + Deobfuscator$app$Debug.getString(-8401679878540L), this.this$0.getString(2131951741)); 
1859	                    } else { 
1860	                        int n = gameint; 
1861	                    } 
1862	                } else if (bitversi == 32 && (gameint < 1 || gameint > 4)) { 
1863	                    int n = gameint; 
1864	                } 
1865	            } 
1866	        }, 13000L); 
1867	    } 
1868	 
1869	    public void launchbypassNoRoot() { 
1870	        new Handler().postDelayed(new Runnable(this){ 
1871	            final MainActivity this$0; 
1872	            { 
1873	                this.this$0 = mainActivity; 
1874	            } 
1875	 
1876	            public void run() { 
1877	                if (bitversi == 64) { 
1878	                    if (gameint >= 1 && gameint <= 4) { 
1879	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8405974845836L) + game + Deobfuscator$app$Debug.getString(-8453219486092L), this.this$0.getString(2131951617)); 
1880	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8457514453388L) + game + Deobfuscator$app$Debug.getString(-8509054060940L), this.this$0.getString(2131951617)); 
1881	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8513349028236L) + game + Deobfuscator$app$Debug.getString(-8560593668492L), this.this$0.getString(2131951617)); 
1882	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8564888635788L) + game + Deobfuscator$app$Debug.getString(-8599248374156L), this.this$0.getString(2131951617)); 
1883	                        this.this$0.Exec(Deobfuscator$app$Debug.getString(-8603543341452L) + game + Deobfuscator$app$Debug.getString(-8646493014412L), this.this$0.getString(2131951617)); 
1884	                    } else { 
1885	                        int n = gameint; 
1886	                    } 
1887	                } else if (bitversi == 32 && (gameint < 1 || gameint > 4)) { 
1888	                    int n = gameint; 
1889	                } 
1890	            } 
1891	        }, 10000L); 
1892	    } 
1893	 
1894	    public void loadAssets(String string) { 
1895	        daemonPath = string = this.getFilesDir().toString() + Deobfuscator$app$Debug.getString(-14908555331980L) + string; 
1896	        socket = string; 
1897	        try { 
1898	            string = Runtime.getRuntime(); 
1899	            StringBuilder stringBuilder = new StringBuilder(); 
1900	            string.exec(stringBuilder.append(Deobfuscator$app$Debug.getString(-14917145266572L)).append(daemonPath).toString()); 
1901	        } 
1902	        catch (IOException iOException) { 
1903	            // empty catch block 
1904	        } 
1905	    } 
1906	 
1907	    public String loadJSONFromAsset(String string) { 
1908	        try { 
1909	            string = this.getAssets().open(string); 
1910	            byte[] byArray = new byte[string.available()]; 
1911	            string.read(byArray); 
1912	            string.close(); 
1913	            string = new String(byArray, StandardCharsets.UTF_8); 
1914	            return string; 
1915	        } 
1916	        catch (IOException iOException) { 
1917	            iOException.printStackTrace(); 
1918	            return null; 
1919	        } 
1920	    } 
1921	 
1922	    @Override 
1923	    public void onBackPressed() { 
1924	        super.onBackPressed(); 
1925	        Toast.makeText((Context)this, (CharSequence)this.getString(2131952220), (int)0).show(); 
1926	    } 
1927	 
1928	    @Override 
1929	    protected void onCreate(Bundle bundle) { 
1930	        super.onCreate(bundle); 
1931	        this.setContentView(2131558431); 
1932	        Thread.setDefaultUncaughtExceptionHandler((Thread.UncaughtExceptionHandler)new CrashHandler((Context)this)); 
1933	        this.initializeViews(); 
1934	        this.updateInstallStates(); 
1935	        this.init(); 
1936	        this.setRequestedOrientation(1); 
1937	        boolean bl = MetaActivationManager.getActivationStatus(); 
1938	        MetaActivationManager.getActivationMessage(); 
1939	        if (bl) { 
1940	            Toast.makeText((Context)this.getApplicationContext(), (CharSequence)Deobfuscator$app$Debug.getString(-9557026081164L), (int)0).show(); 
1941	        } else { 
1942	            Toast.makeText((Context)this.getApplicationContext(), (CharSequence)Deobfuscator$app$Debug.getString(-9647220394380L), (int)0).show(); 
1943	        } 
1944	        this.initMenu1(); 
1945	        this.initMenu2(); 
1946	        this.Loadssets(); 
1947	        this.devicecheck(); 
1948	        this.SettingESP(); 
1949	        if (!SplashActivity.mahyong) { 
1950	            this.finish(); 
1951	            this.finishActivity(1); 
1952	        } 
1953	        instance = this; 
1954	        this.isLogin = true; 
1955	        this.Checking(); 
1956	    } 
1957	 
1958	    public void onDestroy() { 
1959	        super.onDestroy(); 
1960	        this.stopService(new Intent((Context)MainActivity.get(), FloatService.class)); 
1961	        this.stopService(new Intent((Context)MainActivity.get(), Overlay.class)); 
1962	        this.stopService(new Intent((Context)MainActivity.get(), FloatRei.class)); 
1963	        this.stopService(new Intent((Context)MainActivity.get(), ToggleBullet.class)); 
1964	        this.stopService(new Intent((Context)MainActivity.get(), ToggleAim.class)); 
1965	        this.stopService(new Intent((Context)MainActivity.get(), ToggleSimulation.class)); 
1966	        this.stopService(new Intent((Context)MainActivity.get(), FightMode.class)); 
1967	    } 
1968	 
1969	    public void onRequestPermissionsResult(int n, String[] stringArray, int[] nArray) { 
1970	        super.onRequestPermissionsResult(n, stringArray, nArray); 
1971	        if (n == 1 && (nArray.length <= 0 || nArray[0] != 0)) { 
1972	            this.finish(); 
1973	        } 
1974	    } 
1975	 
1976	    protected void onResume() { 
1977	        super.onResume(); 
1978	        this.CountTimerAccout(); 
1979	        if (this.getSharedPreferences(Deobfuscator$app$Debug.getString(-14964389906828L), 0).getBoolean(Deobfuscator$app$Debug.getString(-15007339579788L), false)) { 
1980	            this.getSharedPreferences(Deobfuscator$app$Debug.getString(-15071764089228L), 0).edit().putBoolean(Deobfuscator$app$Debug.getString(-15114713762188L), false).apply(); 
1981	        } 
1982	    } 
1983	 
1984	    @Override 
1985	    public void onWindowFocusChanged(boolean bl) { 
1986	        super.onWindowFocusChanged(bl); 
1987	        if (bl) { 
1988	            this.hideSystemUI(); 
1989	        } else { 
1990	            this.showSystemUI(); 
1991	        } 
1992	    } 
1993	 
1994	    public void stopRunningApp(String string) { 
1995	        try { 
1996	            MetaActivityManager.killAppByPkg(string); 
1997	            return; 
1998	        } 
1999	        catch (Exception exception) { 
2000	            throw new RuntimeException((Throwable)exception); 
2001	        } 
2002	    } 
2003	 
2004	    public void toggleOnOff() { 
2005	        this.toggleOnOffHelper(this.BGMI_INSTALL_OFF, this.BGMIONOFF); 
2006	    } 
2007	 
2008	    public boolean tryAddLoader(String string) { 
2009	        boolean bl = Deobfuscator$app$Debug.getString(-12838381095308L).equals((Object)Deobfuscator$app$Debug.getString(-12868445866380L)); 
2010	        ApplicationInfo applicationInfo = this.getApplicationInfoContainer(string); 
2011	        if (applicationInfo == null) { 
2012	            FLog.error(Deobfuscator$app$Debug.getString(-12898510637452L)); 
2013	            return false; 
2014	        } 
2015	        Deobfuscator$app$Debug.getString(-13001589852556L); 
2016	        String string2 = string.equals((Object)Deobfuscator$app$Debug.getString(-13053129460108L)) ? Deobfuscator$app$Debug.getString(-13173388544396L) : (string.equals((Object)Deobfuscator$app$Debug.getString(-13237813053836L)) ? Deobfuscator$app$Debug.getString(-13310827497868L) : Deobfuscator$app$Debug.getString(-13353777170828L)); 
2017	        String string3 = bl ? new File(BoxApplication.get().getFilesDir(), Deobfuscator$app$Debug.getString(-13405316778380L)).toString() : BoxApplication.get().getApplicationInfo().nativeLibraryDir; 
2018	        string2 = new File(string3, string2); 
2019	        string3 = applicationInfo.nativeLibraryDir; 
2020	        long l2 = string.equals((Object)Deobfuscator$app$Debug.getString(-13435381549452L)) ? -13555640633740L : -13620065143180L; 
2021	        string = new File(string3, Deobfuscator$app$Debug.getString(l2)); 
2022	        if (string.exists()) { 
2023	            string.delete(); 
2024	        } 
2025	        try { 
2026	            bl = FileUtils.copy(string2.toString(), string.toString()); 
2027	            return bl; 
2028	        } 
2029	        catch (Exception exception) { 
2030	            FLog.error(exception.getMessage()); 
2031	            return false; 
2032	        } 
2033	    } 
2034	 
2035	    public void unInstallApp(String string) { 
2036	        try { 
2037	            MetaPackageManager.uninstallAppFully(string); 
2038	            return; 
2039	        } 
2040	        catch (Exception exception) { 
2041	            throw new RuntimeException((Throwable)exception); 

