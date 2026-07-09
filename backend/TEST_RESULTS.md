# Backend API Test Results

## Notification APIs

### POST /notifications
Successfully creates a notification.

### GET /notifications
Returns notifications visible to the authenticated tenant and user.

### GET /notifications/unread-count
Returns correct unread notification count.

### PATCH /notifications/:id/read
Marks a single notification as read.

### PATCH /notifications/read-all
Marks all visible notifications as read.

## Trigger APIs

### POST /triggers/invite-member
Creates a tenant-wide notification.

### POST /triggers/creator-replied
Creates a user-specific notification.

## Tenant Isolation

### Test 1
User from tenant `t1` only receives notifications belonging to `t1`.

Status: Passed

### Test 2
User from tenant `t1` cannot mark a notification from tenant `t2` as read.

Status: Passed

### Test 3
Unread count only includes notifications belonging to the authenticated tenant.

Status: Passed
