/*
 * Copyright (C) 2014 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef WindowServerConnection_h
#define WindowServerConnection_h

namespace WebKit {

class WindowServerConnection {
public:
    static WindowServerConnection& shared();

    bool applicationWindowModificationsHaveStopped() const { return m_applicationWindowModificationsHaveStopped; }

private:
    WindowServerConnection();

#if HAVE(WINDOW_SERVER_OCCLUSION_NOTIFICATIONS)
    void windowServerConnectionStateChanged();

    void applicationWindowModificationsStopped(bool stopped);

    static void applicationWindowModificationsStarted(uint32_t, void*, uint32_t, void*, uint32_t);
    static void applicationWindowModificationsStopped(uint32_t, void*, uint32_t, void*, uint32_t);
#endif

    bool m_applicationWindowModificationsHaveStopped;
};

} // namespace WebKit

#endif // WindowServerConnection_h
