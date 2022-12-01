<template>
  <div class="w-50 mt-5 position-relative start-50 translate-middle-x">
    <div class="w-100 p-3 border rounded-top">
      <h1 style="font-family: var(--bs-font-sans-serif);">Setting up a device</h1>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">This page contains all the information needed to register a device on the Niredo server! In order for this to be possible, the following items are required:</p>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">- A Nintendo DS, Nintendo DSi, Nintendo 3DS or Nintendo 2DS</p>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">- A mobile device supporting hotspots or a router that supports WEP security.</p>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">- A stable internet connection.</p>
    </div>
    <div class="w-100 p-3 mb-5 border border-top-0 rounded-bottom">
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">1. Turn on your Nintendo DS and open up the Nintendo WFC Settings. Select the device you are using below to view a description of it's location.</p>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="ds-tab" data-bs-toggle="tab" data-bs-target="#ds" type="button" role="tab" aria-controls="ds" aria-selected="true">DS/3DS/2DS</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#dsi" type="button" role="tab" aria-controls="dsi" aria-selected="false">DSi</button>
        </li>
      </ul>
      <div class="tab-content p-2 mb-3 border border-top-0 rounded-bottom" id="myTabContent">
        <div class="tab-pane fade show active" id="ds" role="tabpanel" aria-labelledby="ds-tab">
          <p class="text-start" style="font-family: var(--bs-font-sans-serif);">The Nintendo WFC Settings for this device can be accessed by booting up a Nintendo DS game that supports online features and locating the Nintendo WFC Settings. These can oftentimes be found somewhere on the main menu of the game.</p>
        </div>
        <div class="tab-pane fade" id="dsi" role="tabpanel" aria-labelledby="dsi-tab">
          <p class="text-start" style="font-family: var(--bs-font-sans-serif);">The Nintendo WFC Settings for this device can be found in the system settings. When on the Home Menu, press the Settings icon to open the settings menu and navigate to the Network Options section to continue.</p>
          <p class="text-start" style="font-family: var(--bs-font-sans-serif);">Note: Once the device has successfully been registered on the Niredo server, you will need to accept the user agreement before you can play online.</p>
        </div>
      </div>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">2. Before your system can register at the Niredo server, any previous Nintendo WFC data needs to be deleted first. Navigate to Options -> Delete Nintendo WFC Configuration to do this. If this button is gray, you can move onto the next step.</p>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">3. Set up a new connection by selecting <code>Nintendo Wi-Fi Connection Options</code> -> <code>One of the three connection slots</code> -> <code>Manual setup</code> and entering the following information:</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="w-30 text-start" style="font-family: var(--bs-font-sans-serif);">Name</th>
            <th scope="col" class="w-70 text-start" style="font-family: var(--bs-font-sans-serif);">Value</th>
          </tr>
        </thead>
        <tbody class="border-top border-top-color">
          <tr>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);">SSID</td>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);"><code>Name of your router/hotspot</code></td>
          </tr>
          <tr>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);">WEP Key</td>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);"><code>Router/hotspot password. Leave empty if not applicable.</code></td>
          </tr>
          <tr>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);">Auto-obtain IP Address</td>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);"><code>Yes</code></td>
          </tr>
          <tr>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);">Auto-obtain DNS</td>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);"><code>No</code></td>
          </tr>
          <tr>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);">Primary DNS Address</td>
            <td class="text-start" style="font-family: var(--bs-font-sans-serif);"><code>192.168.1.106</code></td>
          </tr>
        </tbody>
      </table>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);"></p>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);">4. Test the connection. If successfull, the device has been registered to the Niredo server and can now be used for online play. If you already have an account on the Niredo website, you can link your device to your account using <router-link class="link" to="registerdevice">this page</router-link>!</p>
      <p class="text-start" style="font-family: var(--bs-font-sans-serif);"></p>
    </div>
  </div>
</template>

<script>
export default {
    name: "TutorialView",
    data() {
        return { }
    }
}
</script>
