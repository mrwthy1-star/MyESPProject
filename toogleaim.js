
24	package pubgm.loader.floating; 
25	 
26	import android.app.Service; 
27	import android.content.Context; 
28	import android.content.Intent; 
29	import android.os.Build; 
30	import android.os.IBinder; 
31	import android.view.LayoutInflater; 
32	import android.view.MotionEvent; 
33	import android.view.View; 
34	import android.view.ViewGroup; 
35	import android.view.WindowManager; 
36	import android.widget.ImageView; 
37	import android.widget.RelativeLayout; 
38	import pubgm.loader.utils.FLog; 
39	 
40	public class ToggleAim 
41	extends Service { 
42	    private boolean checkStatus; 
43	    private View mainView; 
44	    private RelativeLayout miniFloatView; 
45	    private WindowManager.LayoutParams paramsView; 
46	    private WindowManager windowManager; 
47	 
48	    static { 
49	        try { 
50	            System.loadLibrary((String)"client"); 
51	        } 
52	        catch (UnsatisfiedLinkError unsatisfiedLinkError) { 
53	            FLog.error(unsatisfiedLinkError.getMessage()); 
54	        } 
55	    } 
56	 
57	    private void InitShowMainView() { 
58	        this.miniFloatView = (RelativeLayout)this.mainView.findViewById(2131362396); 
59	        ((RelativeLayout)this.mainView.findViewById(2131362321)).setOnTouchListener(new View.OnTouchListener(){ 
60	            private float initialTouchX; 
61	            private float initialTouchY; 
62	            private int initialX; 
63	            private int initialY; 
64	            final ToggleAim this$0; 
65	            final ImageView val$myImageView; 
66	            { 
67	                this.this$0 = toggleAim; 
68	                this.val$myImageView = imageView; 
69	            } 
70	 
71	            public boolean onTouch(View view, MotionEvent motionEvent) { 
72	                switch (motionEvent.getAction()) { 
73	                    default: { 
74	                        return false; 
75	                    } 
76	                    case 2: { 
77	                        ((ToggleAim)this.this$0).paramsView.x = this.initialX + (int)(motionEvent.getRawX() - this.initialTouchX); 
78	                        ((ToggleAim)this.this$0).paramsView.y = this.initialY + (int)(motionEvent.getRawY() - this.initialTouchY); 
79	                        this.this$0.windowManager.updateViewLayout(this.this$0.mainView, (ViewGroup.LayoutParams)this.this$0.paramsView); 
80	                        return true; 
81	                    } 
82	                    case 1: { 
83	                        int n2 = (int)(motionEvent.getRawX() - this.initialTouchX); 
84	                        int n4 = (int)(motionEvent.getRawY() - this.initialTouchY); 
85	                        if (n2 < 5 && n4 < 5 && this.this$0.miniFloatView.getVisibility() == 0) { 
86	                            if (!this.this$0.checkStatus) { 
87	                                ToggleAim.access$202(this.this$0, true); 
88	                                this.this$0.ToggleAim(true); 
89	                                this.val$myImageView.setImageResource(2131231056); 
90	                                this.val$myImageView.animate().rotationBy(0.0f).rotation(-45.0f); 
91	                            } else { 
92	                                ToggleAim.access$202(this.this$0, false); 
93	                                this.this$0.ToggleAim(false); 
94	                                this.val$myImageView.setImageResource(2131231144); 
95	                                this.val$myImageView.animate().rotationBy(-45.0f).rotation(0.0f); 
96	                            } 
97	                        } 
98	                        return true; 
99	                    } 
100	                    case 0:  
101	                } 
102	                this.initialX = ((ToggleAim)this.this$0).paramsView.x; 
103	                this.initialY = ((ToggleAim)this.this$0).paramsView.y; 
104	                this.initialTouchX = motionEvent.getRawX(); 
105	                this.initialTouchY = motionEvent.getRawY(); 
106	                return true; 
107	            } 
108	        }); 
109	    } 
110	 
111	    private void ShowMainView() { 
112	        WindowManager windowManager; 
113	        this.mainView = LayoutInflater.from((Context)this).inflate(2131558572, null); 
114	        this.paramsView = this.getParaams(); 
115	        this.windowManager = windowManager = (WindowManager)this.getSystemService("window"); 
116	        windowManager.addView(this.mainView, (ViewGroup.LayoutParams)this.paramsView); 
117	        this.InitShowMainView(); 
118	    } 
119	 
120	    static /* synthetic */ boolean access$202(ToggleAim toggleAim, boolean bl) { 
121	        toggleAim.checkStatus = bl; 
122	        return bl; 
123	    } 
124	 
125	    private static int getLayoutType() { 
126	        int n2 = Build.VERSION.SDK_INT >= 26 ? 2038 : (Build.VERSION.SDK_INT >= 24 ? 2002 : (Build.VERSION.SDK_INT >= 23 ? 2005 : 2003)); 
127	        return n2; 
128	    } 
129	 
130	    private WindowManager.LayoutParams getParaams() { 
131	        WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams(-2, -2, ToggleAim.getLayoutType(), 8, -3); 
132	        layoutParams.gravity = 17; 
133	        layoutParams.x = 0; 
134	        layoutParams.y = 0; 
135	        return layoutParams; 
136	    } 
137	 
138	    public native void ToggleAim(boolean var1); 
139	 
140	    public IBinder onBind(Intent intent) { 
141	        return null; 
142	    } 
143	 
144	    public void onCreate() { 
145	        super.onCreate(); 
146	        this.ShowMainView(); 
147	    } 
148	 
149	    public void onDestroy() { 
150	        super.onDestroy(); 
151	        this.checkStatus = false; 
152	        this.ToggleAim(false); 
153	        View view = this.mainView; 
154	        if (view != null) { 
155	            this.windowManager.removeView(view); 
156	        } 
157	    } 
158	} 
159	 
160	 


