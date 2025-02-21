package com.awesomeproject

import android.os.Bundle // Import for Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen // Import for SplashScreen

class MainActivity : ReactActivity() {

    /**
     * Show the splash screen before calling `super.onCreate()`.
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this) // Show the splash screen
        super.onCreate(savedInstanceState)
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    override fun getMainComponentName(): String {
        return "AwesomeProject"
    }

    /**
     * Returns the instance of the [ReactActivityDelegate].
     * We use [DefaultReactActivityDelegate] which allows you to enable
     * New Architecture with a single boolean flag [fabricEnabled].
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return DefaultReactActivityDelegate(
            this,
            mainComponentName,
            fabricEnabled
        )
    }
}