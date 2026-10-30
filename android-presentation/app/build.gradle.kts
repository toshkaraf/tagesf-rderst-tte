plugins {
    id("com.android.application")
}

android {
    namespace = "com.toshkaraf.humanoide"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.toshkaraf.humanoide"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation("androidx.webkit:webkit:1.11.0")
}
